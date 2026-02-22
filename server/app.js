const path = require('path');
const express = require('express');
const cors = require('cors');
const apiV1Router = require('./api/v1');
const errorHandler = require('./middleware/error-handler');
const notesRepository = require('./features/notes/notes.repository');

function createApp() {
  const app = express();

  app.use(cors({ origin: '*' }));
  app.use(express.json());

  app.use('/api/v1', apiV1Router);

  app.use(express.static(path.join(process.cwd(), 'public')));

  app.get(/^\/(?!api).*/, (_req, res) => {
    res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
  });

  app.use(errorHandler);

  return app;
}

async function start() {
  const PORT = Number.parseInt(process.env.PORT, 10) || 3000;

  await notesRepository.initDb();

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
