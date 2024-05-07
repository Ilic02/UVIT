const express = require('express');
const path = require('path');
const ejs = require('ejs');

const router = express.Router();

router.get("/student", function(req, res, next){
    const data = req.body;
    console.log('Username', data.username);
    console.log('Pass', data.password);
    res.render('student.ejs');

});


module.exports = router;