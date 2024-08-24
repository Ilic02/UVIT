const knjigeModel = require('../model/knjige');


async function prikaziPocetnu(req, res, next) {
    try {
        const knjige = await knjigeModel.dohvatiKnjige();

        res.render("pocetna.ejs", {knjige})
    } catch(err){
        next(err);
    }
}


async function dohvatiKnjigu(req, res, next) {
    try {
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

        console.log(title);
        console.log(author);
        console.log(year);
        console.log(pages);

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