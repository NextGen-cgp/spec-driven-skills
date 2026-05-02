#!/usr/bin/env node

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const PACKAGE_NAME = 'spec-driven-skills';

const PROVIDERS = {
  claude: {
    name: 'claude',
    rootDir: '.claude'
  },
  openai: {
    name: 'openai',
    rootDir: '.agents'
  }
};

function printHelp() {
  console.log(`Install Spec Driven Development skills for agent tools.

Usage:
  npx spec-driven-skills [options]

Options:
  --scope <project|global>      Install into the current project or user home. Default: project
  --provider <claude|openai|all>
                               Install for one provider or both. Default: all
  --cwd <path>                  Project directory for project installs. Default: current directory
  --dry-run                     Show planned writes without changing files
  --yes                         Non-interactive mode. Accepted for scripting
  -h, --help                    Show this help
`);
}

function parseArgs(argv) {
  const options = {
    scope: 'project',
    provider: 'all',
    cwd: process.cwd(),
    dryRun: false,
    yes: false,
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--scope') {
      options.scope = readValue(argv, index, arg);
      index += 1;
    } else if (arg.startsWith('--scope=')) {
      options.scope = arg.slice('--scope='.length);
    } else if (arg === '--provider') {
      options.provider = readValue(argv, index, arg);
      index += 1;
    } else if (arg.startsWith('--provider=')) {
      options.provider = arg.slice('--provider='.length);
    } else if (arg === '--cwd') {
      options.cwd = readValue(argv, index, arg);
      index += 1;
    } else if (arg.startsWith('--cwd=')) {
      options.cwd = arg.slice('--cwd='.length);
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else if (arg === '--yes' || arg === '-y') {
      options.yes = true;
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  validateOptions(options);
  options.cwd = path.resolve(options.cwd);
  return options;
}

function readValue(argv, index, flag) {
  const value = argv[index + 1];
  if (!value || value.startsWith('--')) {
    throw new Error(`Missing value for ${flag}`);
  }
  return value;
}

function validateOptions(options) {
  if (!['project', 'global'].includes(options.scope)) {
    throw new Error(`Invalid --scope "${options.scope}". Expected project or global.`);
  }

  if (!['claude', 'openai', 'all'].includes(options.provider)) {
    throw new Error(`Invalid --provider "${options.provider}". Expected claude, openai, or all.`);
  }
}

function getSelectedProviders(provider) {
  if (provider === 'all') {
    return [PROVIDERS.claude, PROVIDERS.openai];
  }
  return [PROVIDERS[provider]];
}

function getPackageRoot() {
  return path.resolve(__dirname, '..');
}

function getSkillsSourceDir() {
  return path.join(getPackageRoot(), 'skills');
}

function getPackageVersion() {
  const packageJsonPath = path.join(getPackageRoot(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  return packageJson.version;
}

function getHomeDir() {
  return process.env.SDD_SKILLS_HOME || os.homedir();
}

function getProviderRoot(provider, options) {
  const baseDir = options.scope === 'global' ? getHomeDir() : options.cwd;
  return path.join(baseDir, provider.rootDir);
}

function listSkillDirs(sourceDir = getSkillsSourceDir()) {
  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Skills source directory not found: ${sourceDir}`);
  }

  return fs.readdirSync(sourceDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function makeTimestamp(date = new Date()) {
  return date.toISOString().replace(/[:.]/g, '-');
}

function ensureUniqueBackupDir(baseBackupDir, timestamp) {
  let backupDir = path.join(baseBackupDir, timestamp);
  let counter = 1;

  while (fs.existsSync(backupDir)) {
    backupDir = path.join(baseBackupDir, `${timestamp}-${counter}`);
    counter += 1;
  }

  return backupDir;
}

function copyDirectory(source, destination) {
  fs.cpSync(source, destination, {
    recursive: true,
    errorOnExist: false,
    force: true
  });
}

function removeDirectory(target) {
  fs.rmSync(target, {
    recursive: true,
    force: true
  });
}

function installProvider(provider, options, context) {
  const providerRoot = getProviderRoot(provider, options);
  const destinationSkillsRoot = path.join(providerRoot, 'skills');
  const backupRoot = path.join(providerRoot, 'sdd-skills-backups');
  const manifestPath = path.join(providerRoot, 'sdd-skills-manifest.json');
  const backedUpSkills = [];
  const installedSkills = [];

  let backupDir = null;

  for (const skillName of context.skillNames) {
    const sourceSkillDir = path.join(context.sourceDir, skillName);
    const destinationSkillDir = path.join(destinationSkillsRoot, skillName);
    const destinationExists = fs.existsSync(destinationSkillDir);

    if (options.dryRun) {
      console.log(`[dry-run] install ${skillName} -> ${destinationSkillDir}`);
      if (destinationExists) {
        console.log(`[dry-run] backup existing ${destinationSkillDir} -> ${path.join(backupRoot, context.timestamp, skillName)}`);
      }
      installedSkills.push(skillName);
      if (destinationExists) {
        backedUpSkills.push(skillName);
      }
      continue;
    }

    if (destinationExists) {
      if (!backupDir) {
        backupDir = ensureUniqueBackupDir(backupRoot, context.timestamp);
        fs.mkdirSync(backupDir, { recursive: true });
      }

      const backupSkillDir = path.join(backupDir, skillName);
      copyDirectory(destinationSkillDir, backupSkillDir);
      backedUpSkills.push(skillName);
      removeDirectory(destinationSkillDir);
    }

    fs.mkdirSync(destinationSkillsRoot, { recursive: true });
    copyDirectory(sourceSkillDir, destinationSkillDir);
    installedSkills.push(skillName);
  }

  if (!options.dryRun) {
    fs.mkdirSync(providerRoot, { recursive: true });
    const manifest = {
      package: PACKAGE_NAME,
      version: context.version,
      installedAt: new Date().toISOString(),
      scope: options.scope,
      provider: provider.name,
      providerRoot,
      skillsRoot: destinationSkillsRoot,
      installedSkills,
      backedUpSkills,
      backupDir
    };
    fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  } else {
    console.log(`[dry-run] write manifest -> ${manifestPath}`);
  }

  return {
    provider: provider.name,
    providerRoot,
    skillsRoot: destinationSkillsRoot,
    manifestPath,
    installedSkills,
    backedUpSkills,
    backupDir
  };
}

function install(options) {
  const sourceDir = getSkillsSourceDir();
  const skillNames = listSkillDirs(sourceDir);
  const selectedProviders = getSelectedProviders(options.provider);
  const context = {
    sourceDir,
    skillNames,
    timestamp: makeTimestamp(),
    version: getPackageVersion()
  };

  if (skillNames.length === 0) {
    throw new Error(`No skills found in ${sourceDir}`);
  }

  console.log(`${options.dryRun ? 'Planning' : 'Installing'} ${skillNames.length} SDD skills`);
  console.log(`Scope: ${options.scope}`);
  console.log(`Providers: ${selectedProviders.map((provider) => provider.name).join(', ')}`);

  const results = selectedProviders.map((provider) => installProvider(provider, options, context));

  for (const result of results) {
    console.log(`${options.dryRun ? '[dry-run] ' : ''}${result.provider}: ${result.installedSkills.length} skills -> ${result.skillsRoot}`);
    if (result.backedUpSkills.length > 0) {
      const backupTarget = result.backupDir || path.join(result.providerRoot, 'sdd-skills-backups', context.timestamp);
      console.log(`${options.dryRun ? '[dry-run] ' : ''}${result.provider}: backed up ${result.backedUpSkills.length} existing skills -> ${backupTarget}`);
    }
  }

  return results;
}

function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv);
  if (options.help) {
    printHelp();
    return 0;
  }

  install(options);
  return 0;
}

if (require.main === module) {
  try {
    process.exitCode = main();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exitCode = 1;
  }
}

module.exports = {
  parseArgs,
  install,
  listSkillDirs,
  getProviderRoot,
  makeTimestamp
};
