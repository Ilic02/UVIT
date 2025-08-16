const express = require("express");

const router = express.Router();

const controller = require('../controller/letovi');

router.get("/", controller.prikaziPocetnu);
router.post("/letovi", controller.prikaziLetove);
router.get("/krajnjadestinacija", controller.prikaziKranjuDestinaciju);

module.exports = router;
