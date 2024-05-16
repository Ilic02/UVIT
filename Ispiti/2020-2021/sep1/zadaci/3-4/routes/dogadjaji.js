const express = require("express");

const router = express.Router();
const controller = require('../controllers/dogadjaj');

router.get('/', controller.prikaziPocetnu);
router.get('/dogadjaji', controller.prikaziDogadjaje);
router.post('/dogadjaji/azuriraj', controller.prikaziAzuriranDogadjaj);


module.exports = router;
