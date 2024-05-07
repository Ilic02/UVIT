const express = require('express');
const path = require('path');

const app = express();

const studentRoutes = require('./routes/student');

app.use(express.static(path.join(__dirname , "public")));

app.use('/hello-world', function(req, res, next){
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(studentRoutes);

app.use(function(err, req, res, next){
    console.log('Greska na serveru!');
    console.log(err);
    //Odgovor 500
});

module.exports = app;