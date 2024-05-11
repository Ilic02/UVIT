const express = require("express");

const controller = require('../controllers/meteo')

const router = express.Router();

module.exports = router;

router.get('/', controller.dohvatiStatistike);
router.post('/detalji', controller.dohvatiDetalje);
