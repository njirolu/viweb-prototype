const path = require('path');
const express = require('express');
const cors = require('cors');
const apiV1Router = require('./api/v1');
const errorHandler = require('./middleware/error-handler');
const notesRepository = require('./features/notes/notes.repository');
const projectRoot = path.resolve(__dirname, '..', '..');

function setCrossOriginIsolationHeaders(_req, res, next) {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
}

function createApp(options = {}) {
  const isWebContainerTarget =
    options.webContainerTarget ?? process.env.WEB_CONTAINER_TARGET === '1';

  const app = express();
  const publicDir = path.join(projectRoot, 'public');

  app.use(cors({ origin: '*' }));
  app.use(express.json());

  if (isWebContainerTarget) {
    app.use('/api/v1', apiV1Router);
  } else {
    app.use('/api/v1', (_req, res) => {
      return res.status(404).json({ error: 'Not found' });
    });
  }

  app.use(
    '/webcontainer-runner',
    setCrossOriginIsolationHeaders,
    express.static(path.join(publicDir, 'webcontainer-runner'))
  );
  app.use(express.static(publicDir, { index: false }));

  function serveContainerApp(_req, res) {
    return res.sendFile(path.join(publicDir, 'app.html'));
  }

  function serveRunner(_req, res) {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    return res.sendFile(path.join(publicDir, 'index.html'));
  }

  app.get('/', (req, res) => {
    if (isWebContainerTarget) {
      return serveContainerApp(req, res);
    }

    return serveRunner(req, res);
  });

  app.get(/^\/(?!api).*/, (req, res) => {
    if (isWebContainerTarget) {
      return serveContainerApp(req, res);
    }

    return res.redirect('/');
  });

  app.use(errorHandler);

  return app;
}

async function start() {
  const PORT = Number.parseInt(process.env.PORT, 10) || 3000;

  if (process.env.WEB_CONTAINER_TARGET === '1') {
    await notesRepository.initDb();
  }

  const app = createApp();
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

if (require.main === module) {
  start().catch((error) => {
    console.error('Failed to start app:', error);
    process.exit(1);
  });
}

module.exports = {
  createApp,
  start,
};
