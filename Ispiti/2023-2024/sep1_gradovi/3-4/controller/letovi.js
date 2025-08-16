const mongoose = require('mongoose');
const letoviModel = require('../model/letovi');
const gradoviModel = require('../model/gradovi');

async function prikaziPocetnu(req, res, next) {
    try {
        res.render("pocetna.ejs");
    } catch(err){
        next(err);
    }
}


async function prikaziLetove(req, res, next) {
    try {
        let data = req.body;
        let from = data.from;
        let to = data.to;
        let depart = data.depart;
        let ret = data.ret;
        let adults = data.adults;
        let children = data.children;
        let infants = data.infants;
        let cabin = data.cabin;
        let direct = data.direct;
        let date = new Date(depart);
        console.log(date.toLocaleDateString("sr-RS").replace(/\s+/g, ""));
        let flights = await letoviModel.dohvatiLet(from, to, date.toLocaleDateString("sr-RS").replace(/\s+/g, ""));
        console.log(flights);
        res.render("letovi.ejs", {flights});
    } catch(err){
        next(err);
    }
}


async function prikaziKranjuDestinaciju(req, res, next){
	 try {
        let city = req.query.city;
        console.log(city);
        let info = gradoviModel.dohvatiInfo(city);
        let questions = gradoviModel.dohvatiPitanja(city);
        res.render("krajnja.ejs", {info, questions, city});
    } catch(err){
        next(err);
    }
}




module.exports = {
    prikaziPocetnu,
    prikaziKranjuDestinaciju,
    prikaziLetove
};
