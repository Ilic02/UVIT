const express = require('express');

const router = express.Router();

const bankController = require('../controllers/bank');

router.get("/", bankController.prikaziTabelu);
router.post("/dodaj", bankController.dodajNalog);
router.get("/bankomat", bankController.prikaziBankomat);
router.post("/transakcija", bankController.transakcija);

module.exports = router;
