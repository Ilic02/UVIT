const model = require('../models/lekovi')

// 3. zadatak
async function prikaziPocetnuStranicu(req, res, next) {
    try{
        res.render('pocetna.ejs');
    }
    catch(err){
        next(err);
    }
}

// 3. zadatak 
async function prikaziLekove(req, res, next) {
    const data = req.query;
    console.log(data);
    let simptomi = [];
    if (data.upalaGrla ==='on'){
        simptomi.push('upala grla');
    }
    if (data.curenjeNos==='on'){
        simptomi.push('curenje nosa');
    }
    if (data.temperatura ==='on'){
        simptomi.push('temperatura');
    }
    if (data.glavobolja ==='on'){
        simptomi.push('glavobolja');
    }
    console.log(simptomi);
    let trazeni_lekovi = await model.dohvatiLekove(simptomi);
    let ime = data.ime;
    console.log('ime');
    console.log(trazeni_lekovi);
    res.render('lekovi.ejs', {
        lekovi: trazeni_lekovi,
        ime: ime
    });
}


// 4. zadatak
async function prikaziRecept(req, res, next) {
    // Nisam siguran za ovo, mislim da fali funkcija u modelu! :(
    const ime = req.body.ime;
    console.log(ime);
    res.render("recept.ejs", {ime: ime});
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziLekove,
    prikaziRecept	
};
