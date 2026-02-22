const assert = require('node:assert/strict');
const test = require('node:test');
const path = require('node:path');
const fs = require('node:fs/promises');
const { execFileSync } = require('node:child_process');

test('snapshot generator includes notes frontend source and config files', async () => {
  execFileSync(process.execPath, ['scripts/generate-webcontainer-files.js'], {
    cwd: process.cwd(),
    stdio: 'pipe',
  });

  const generatedPath = path.join(process.cwd(), 'frontend', 'runner', 'src', 'generated-files.ts');
  const generated = await fs.readFile(generatedPath, 'utf8');

  assert.match(generated, /export const projectFiles =/);
  assert.match(generated, /"frontend"/);
  assert.match(generated, /"notes"/);
  assert.match(generated, /"shared"/);
  assert.match(generated, /"vite\.notes\.config\.ts"/);
  assert.match(generated, /"tailwind\.config\.ts"/);
  assert.match(generated, /"postcss\.config\.cjs"/);
});
