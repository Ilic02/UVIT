const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

const studentRoutes = require('./routes/student');

app.use(express.static(path.join(__dirname , "public")));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(studentRoutes);

app.use(function(err, req, res, next){
    console.log('Greska na serveru!');
    console.log(err);
    //Odgovor 500
});

module.exports = app;