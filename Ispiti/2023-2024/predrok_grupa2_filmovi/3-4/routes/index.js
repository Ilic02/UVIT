const express = require("express");
const router = express.Router();
const controller = require("../controller/knjige");

router.get("/", controller.prikaziPocetnu);
router.get("/knjige", controller.dohvatiKnjigu);
router.post("/novaKnjiga", controller.unesiKnjigu);

module.exports = router;

