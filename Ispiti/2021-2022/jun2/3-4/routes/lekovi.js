const express = require("express");
const kontroler = require("../controllers/lekovi");

const router = express.Router();

router.get('/', kontroler.prikaziPocetnuStranicu);
router.get('/lekovi', kontroler.prikaziLekove);
router.post('/recept', kontroler.prikaziRecept);

module.exports = router;
