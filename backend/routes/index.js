const express = require('express');
const router = express.Router();

const pandenRoutes = require('./panden_route');
// Je kan hier je andere routes importeren...

router.use('/panden', pandenRoutes);
// Voeg hier je andere routes toe...

module.exports = router;
