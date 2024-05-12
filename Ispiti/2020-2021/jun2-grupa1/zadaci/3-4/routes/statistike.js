const express = require("express");

const router = express.Router();

const controller = require('../controllers/statistike');

module.exports = router;

router.get('/', controller.prikaziPocetnuStranicu);
router.get('/prikazi-statistike', controller.prikaziStatistike);
router.post('/unesi-statistiku', controller.unesiStatistiku);