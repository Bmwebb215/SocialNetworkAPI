const router = require('express').Router();

// Importing API routes
const apiRoutes = require('./api');

// Setup API routes
router.use('/api', apiRoutes);

module.exports = router;
