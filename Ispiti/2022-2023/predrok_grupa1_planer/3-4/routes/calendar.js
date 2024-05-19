const express = require("express");

const router = express.Router();

const controller = require('../controllers/calendar')

router.get('/', controller.prikaziPocetnu);
router.post('/month', controller.prikaziMesec);
router.post('/obrisi', controller.obrisiMesec, controller.prikaziMesec);

module.exports = router;
