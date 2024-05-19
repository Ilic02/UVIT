const model = require('../models/raspored');


async function prikaziPocetnu(req, res, next) {
    try {
       const meseci = await model.dohvatiMeseceIzPlanera();

       res.render('calendar.ejs', {meseci})
        
    } catch(err){
        next(err);
    }
}


async function prikaziMesec(req, res, next) {
    try {
        const podaci = req.body.mesec;
        console.log(podaci);

        const meseci = await model.dohvatiMeseceIzPlanera();
        const planovi = await model.dohvatiPlanoveZaMesec(podaci);
        res.render('month.ejs', {podaci, planovi, meseci});
    } catch(err){
        next(err);
    }
}


async function obrisiMesec(req, res, next) {
    try {
       const podaci = req.body.id;

       await model.obrisiDogadjaj(podaci);


       next();
    } catch(err){
        next(err);
    }
}


module.exports = {
    prikaziPocetnu,
    prikaziMesec,
    obrisiMesec
};
