const knjigeModel = require('../model/knjige');


async function prikaziPocetnu(req, res, next) {
    try {
        let data = await knjigeModel.dohvatiKnjige();
        console.log(data)
        res.render("pocetna.ejs", {data});
    } catch(err){
        next(err);
    }
}


async function dohvatiKnjigu(req, res, next) {
    try {
        let id = req.query.id;
        console.log(id);
        let data = await knjigeModel.dohvatiKnjigu(id);
        console.log(data);
        res.render("knjiga.ejs", {data})
    } catch(err){
        next(err);
    }
}


async function unesiKnjigu(req, res, next) {
    try {
        let data = req.body;
        let title = data.title;
        let author = data.author;
        let pages = data.pages;
        let year = data.year;
        console.log(title, author, pages, year);
        await knjigeModel.unesiKnjigu(title, author, year, pages);
    } catch(err){
        next(err);
    }
}


module.exports = {
    prikaziPocetnu,
    dohvatiKnjigu,
    unesiKnjigu
};