const express = require('express');
const path = require('path');

const router = express.Router();

router.get("/student", function(req, res, next){
    const data = req.query;
    console.log('Username', data.username);
    console.log('Pass', data.password);
    res.sendFile(path.join(__dirname, "..", "public", "student.html"))

});


module.exports = router;