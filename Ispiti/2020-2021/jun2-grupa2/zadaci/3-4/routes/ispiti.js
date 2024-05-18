const express = require("express");

const router = express.Router();
const controller = require('../controllers/ispiti');

router.get('/', controller.prikaziPocetnuStranicu);
router.get('/student', controller.prikaziRasporedZaStudenta);
router.post('/', controller.unesiIspit);

module.exports = router;
