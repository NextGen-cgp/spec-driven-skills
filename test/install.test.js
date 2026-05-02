const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');

const installer = require('../bin/install.js');

const repoRoot = path.resolve(__dirname, '..');
const binPath = path.join(repoRoot, 'bin', 'install.js');
const skillNames = installer.listSkillDirs(path.join(repoRoot, 'skills'));

function makeTempDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'sdd-skills-test-'));
}

function runCli(args, options = {}) {
  return execFileSync(process.execPath, [binPath, ...args], {
    cwd: options.cwd || repoRoot,
    env: {
      ...process.env,
      ...options.env
    },
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe']
  });
}

function skillExists(root, providerRoot, skillName) {
  return fs.existsSync(path.join(root, providerRoot, 'skills', skillName, 'SKILL.md'));
}

test('default install copies all skills into project Claude and OpenAI destinations', () => {
  const cwd = makeTempDir();

  runCli(['--cwd', cwd]);

  for (const skillName of skillNames) {
    assert.equal(skillExists(cwd, '.claude', skillName), true);
    assert.equal(skillExists(cwd, '.agents', skillName), true);
  }

  assert.equal(fs.existsSync(path.join(cwd, '.claude', 'sdd-skills-manifest.json')), true);
  assert.equal(fs.existsSync(path.join(cwd, '.agents', 'sdd-skills-manifest.json')), true);
});

test('provider claude only writes the Claude destination', () => {
  const cwd = makeTempDir();

  runCli(['--cwd', cwd, '--provider', 'claude']);

  assert.equal(fs.existsSync(path.join(cwd, '.claude', 'skills')), true);
  assert.equal(fs.existsSync(path.join(cwd, '.agents')), false);
});

test('provider openai only writes the OpenAI destination', () => {
  const cwd = makeTempDir();

  runCli(['--cwd', cwd, '--provider', 'openai']);

  assert.equal(fs.existsSync(path.join(cwd, '.agents', 'skills')), true);
  assert.equal(fs.existsSync(path.join(cwd, '.claude')), false);
});

test('global scope resolves provider roots under the configured home directory', () => {
  const home = makeTempDir();

  runCli(['--scope', 'global', '--provider', 'openai'], {
    env: {
      SDD_SKILLS_HOME: home
    }
  });

  assert.equal(fs.existsSync(path.join(home, '.agents', 'skills')), true);
  assert.equal(fs.existsSync(path.join(home, '.claude')), false);
});

test('existing SDD skill folders are backed up before replacement', () => {
  const cwd = makeTempDir();
  const skillName = skillNames[0];
  const existingSkillDir = path.join(cwd, '.agents', 'skills', skillName);
  fs.mkdirSync(existingSkillDir, { recursive: true });
  fs.writeFileSync(path.join(existingSkillDir, 'LOCAL.txt'), 'custom local content\n', 'utf8');

  runCli(['--cwd', cwd, '--provider', 'openai']);

  const backupRoot = path.join(cwd, '.agents', 'sdd-skills-backups');
  const backupRuns = fs.readdirSync(backupRoot);
  assert.equal(backupRuns.length, 1);
  assert.equal(fs.existsSync(path.join(backupRoot, backupRuns[0], skillName, 'LOCAL.txt')), true);
  assert.equal(fs.existsSync(path.join(cwd, '.agents', 'skills', skillName, 'SKILL.md')), true);
});

test('dry run reports planned writes without creating files', () => {
  const cwd = makeTempDir();

  const output = runCli(['--cwd', cwd, '--dry-run']);

  assert.match(output, /\[dry-run\] install/);
  assert.equal(fs.existsSync(path.join(cwd, '.claude')), false);
  assert.equal(fs.existsSync(path.join(cwd, '.agents')), false);
});

test('invalid flag values fail cleanly', () => {
  assert.throws(
    () => runCli(['--provider', 'cursor']),
    /Invalid --provider/
  );
});

test('argument parser accepts equals syntax and yes flag', () => {
  const options = installer.parseArgs(['--scope=global', '--provider=openai', '--cwd=.', '--yes']);

  assert.equal(options.scope, 'global');
  assert.equal(options.provider, 'openai');
  assert.equal(options.yes, true);
});
