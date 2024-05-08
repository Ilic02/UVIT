const model = require('../models/rezultati')

async function dohvatiDrzave(req, res, next) {
    try{
        const drzave = await model.dohvatiDrzaveZaKojePostojeRezultati();
        res.render('drzave.ejs', {drzave});
    }
    catch(err){
        next(err);
    }
}

async function prikaziRezultate(req, res, next) {
    try{
        const data = req.body;
        console.log(data);
        let rez = [];
        tip = data.tipOcene;
        if(data.tipOcene == 'ziri'){
            rez = await model.dohvatiRezultateZirijaZaDrzavu(data.drzava)
        }
        else if(data.tipOcene == 'publika'){
            rez = await model.dohvatiRezultatePublikeZaDrzavu(data.drzava);
        }
        else{
            a = await model.dohvatiRezultateZirijaZaDrzavu(data.drzava);
            b = await model.dohvatiRezultatePublikeZaDrzavu(data.drzava);
            rez = a.concat(b);
        }

        res.render('rezultati.ejs', {drzava: data.drzava, rezultati: rez, tip})
    }
    catch(err){
        next(err);
    }
}

module.exports = {
    dohvatiDrzave,
    prikaziRezultate,
};
