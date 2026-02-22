const assert = require('node:assert/strict');
const test = require('node:test');
const path = require('node:path');
const fs = require('node:fs/promises');
const { execFileSync } = require('node:child_process');

test('snapshot generator includes notes frontend source and config files', async () => {
  execFileSync(process.execPath, ['app/scripts/generate-webcontainer-files.js'], {
    cwd: process.cwd(),
    stdio: 'pipe',
  });

  const generatedPath = path.join(process.cwd(), 'app', 'src', 'generated-files.ts');
  const generated = await fs.readFile(generatedPath, 'utf8');

  assert.match(generated, /export const projectFiles =/);
  assert.match(generated, /"packages"/);
  assert.match(generated, /"client"/);
  assert.match(generated, /"shared"/);
  assert.match(generated, /"server"/);
  assert.match(generated, /"app": \{/);
  assert.match(generated, /"package\.json"/);
  assert.match(generated, /"dist": \{/);
  assert.match(generated, /"app\.js"/);
  assert.match(generated, /"styles\.css"/);
  assert.match(generated, /"index\.html"/);
  assert.doesNotMatch(generated, /"app\.html"/);
});
