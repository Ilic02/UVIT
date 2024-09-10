const mongoose = require('mongoose');
const ucenikModel = require('../model/ucenik');


async function prikaziPocetnu(req, res, next) {
    try {
        res.render("pocetna.ejs");
    } catch(err){
        next(err);
    }
}


async function prikaziOcene(req, res, next) {
    try {
        let data = req.query;
        let imePrezime = data.imePrezime;

        res.render("ocene.ejs", {ucenik:await ucenikModel.dohvatiOceneUcenika(imePrezime)})
    } catch(err){
        next(err);
    }
}


async function unesiOcenu(req, res, next){
	 try {
        let data = req.body;
        let imePrezime = data.imePrezime;
        let ocena = data.ocena;
        let predmet = data.predmet;

        console.log(imePrezime, ocena, predmet);

        await ucenikModel.dodajNovuOcenu(imePrezime, predmet, ocena);
    } catch(err){
        next(err);
    }
}




module.exports = {
    prikaziPocetnu,
    prikaziOcene,
    unesiOcenu
};
