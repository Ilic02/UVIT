const model = require('../models/raspored');
const model2 = require('../models/student');

// Za 3. zadatak
async function prikaziPocetnuStranicu(req, res, next) {
    try{
        const podaci = await model.dohvatiCeoRaspored();
        console.log(podaci);
        res.render('pocetna.ejs', {podaci});
    }
    catch(err){
        next(err);
    }
}

// Za 3. zadatak
async function unesiIspit(req, res, next) {
    try{
        let r = req.body;
        let godina = r.godina;
        let smer = r.smer;
        let datum = r.datum;
        let vreme = r.vreme;
        let predmet = r.predmet;

        let termin = datum + " " + vreme;

        await model.unesiNoviIspit(godina, smer, termin, predmet);
        await prikaziPocetnuStranicu(req, res, next);
    }
    catch(err){
        next(err);
    }
}

// Za 4. zadatak
async function prikaziRasporedZaStudenta(req, res, next) {
    try{
        const indeks = req.query.indeks;
        console.log(indeks);
        const info = await model2.dohvatiInfoStudenta(indeks);
        const raspored = await model.dohvatiRasporedStudenta(indeks, info.smer);

        res.render('student.ejs', {
            info: info,
            raspored: raspored
        })
    }
    catch(err){
        next(err);
    }
}


module.exports = {
    prikaziPocetnuStranicu,
    prikaziRasporedZaStudenta,
    unesiIspit
};
