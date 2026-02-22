const express = require('express');
const healthRoutes = require('../../features/health/health.routes');
const notesRoutes = require('../../features/notes/notes.routes');

const router = express.Router();

router.use('/health', healthRoutes);
router.use('/notes', notesRoutes);

module.exports = router;
