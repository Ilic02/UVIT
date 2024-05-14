const express = require("express");

const router = express.Router();
const controller = require('../controllers/olimpijada');

router.get('/', controller.prikaziPocetnuStranicu);
router.get('/rezultati', controller.prikaziRezultate);
router.get('/statistike', controller.prikaziStatistike);

module.exports = router;
