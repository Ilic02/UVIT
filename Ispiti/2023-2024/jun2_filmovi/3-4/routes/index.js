const express = require("express");
const controller = require('../controller/film');

const router = express.Router();

router.get("/", controller.prikaziPocetnu);
router.post("/film", controller.dohvatiFilm);
router.post("/noviGlumac", controller.unesiGlumca)
router.get("/unesiFilm", controller.unesiFilm);

module.exports = router;
