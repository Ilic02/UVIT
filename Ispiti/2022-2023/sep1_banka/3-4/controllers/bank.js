const accountModel = require('../models/account');

module.exports.prikaziTabelu = async function (req, res, next) {
    try {        
      res.render("pocetna.ejs", {tabela: await accountModel.getAccounts()});
    } catch (err) {
        next(err);
    }
};

module.exports.dodajNalog = async function (req, res, next) {
  try {        
    let data = req.body;
    let imePrezime = data.imePrezime;
    let [ime, prezime] = imePrezime.split(' ');
    let stanje = data.stanje;

    console.log(ime, prezime, stanje);

    await accountModel.createAccount(ime, prezime, stanje)

  } catch (err) {
      next(err);
  }
};

module.exports.prikaziBankomat = async function (req, res, next) {
  try {        
    res.render("bankomat.ejs", {tabela: await accountModel.getAccounts()});
  } catch (err) {
      next(err);
  }
};

module.exports.transakcija = async function (req, res, next) {
  try {        
    
  } catch (err) {
      next(err);
  }
};