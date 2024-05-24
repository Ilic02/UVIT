const rezModel = require('../models/rezultat');
const pitModel = require('../models/pitanje');

// 3. zadatak
async function prikaziPocetnuStranicu(req, res, next) {
    try{
        res.render("pocetna.ejs");
    }
    catch(err){
        next(err);
    }
}

// 3. zadatak 
async function prikaziRezultate(req, res, next) {
    try{
        const data = req.query
        const username = data.username;
        console.log(username);
        const password = data.password;
        console.log(password);

        const rezultati = await rezModel.dohvatiRezultate(username, password);

        res.render("rezultati.ejs", {rezultati: rezultati, username: username});
    }
    catch(err){
        next(err);
    }
}


// 4. zadatak
async function unesiPitanje(req, res, next) {
    try{
        let data = req.body;
        let pitanje = data.pitanje;
        let odgovor = data.odgovor;
        let oblast = data.oblast;
        let tezina = data.tezina;

        await pitModel.ubaciPitanje(pitanje, odgovor, oblast, tezina);
    }
    catch(err){
        next(err);
    }
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziRezultate,
    unesiPitanje	
};
