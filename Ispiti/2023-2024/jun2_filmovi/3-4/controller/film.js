const filmModels = require('../model/film');
const zanrovi = require('../model/zanrovi')

async function prikaziPocetnu(req, res, next) {
    try {
        const filmovi = await filmModels.dohvatiFilmove();

        res.render("pocetna.ejs", {filmovi});
    } catch(err){
        next(err);
    }
}


async function dohvatiFilm(req, res, next) {
    try {
        const id = req.body.id.trim();
        console.log(id);

        const film = await filmModels.dohvatiFilm(id);

        res.render("film.ejs", {film});
    } catch(err){
        next(err);
    }
}


async function unesiFilm(req, res, next) {
    try {
        let data = req.query;
        let naslov = data.naslov;
        let godina = data.godina;
        let duzina = data.duzina;
        let imdb = data.imdb;
        let zanr = data.zanr;

        console.log(naslov, godina, duzina, imdb, zanr);

        await filmModels.dodajFilm(naslov, godina, duzina, imdb, zanr);
    } catch(err){
        next(err);
    }
}

async function unesiGlumca(req, res, next){
    try {
        const id = req.body.id.trim();
        const glumac = req.body.noviGlumac;

        console.log(id, glumac);

        await filmModels.dodajGlumca(id, glumac);
    } catch(err){
        next(err)
    }
}

module.exports = {
    prikaziPocetnu,
    dohvatiFilm,
    unesiFilm,
    unesiGlumca
};
