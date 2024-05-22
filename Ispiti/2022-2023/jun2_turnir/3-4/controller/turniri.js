const mongoose = require('mongoose');
const turniriModel = require('../model/turniri');


async function prikaziPocetnu(req, res, next) {
    try {
        res.render('pocetna.ejs', {turniri: await turniriModel.dohvatiTurnire()});
    } catch(err){
        next(err);
    }
}


async function prikaziTurnir(req, res, next) {
    try {
        const turnir = req.query.turnir;
        console.log(turnir);
        const igre = await turniriModel.dohvatiIgreZaTurnir(turnir);
        res.render('turnir.ejs', {igre, turnir});
    } catch(err){
        next(err);
    }
}


async function unesiMec(req, res, next) {
    try {
       let data = req.query;
       let poeni1 = data.a1 + '-' + data.a2 + '-' + data.a3;
       let poeni2 = data.b1 + '-' + data.b2 + '-' + data.b3;
       await turniriModel.unesiTurnir(data.igrac1, data.igrac2, poeni1, poeni2, data.sati + ":" + data.minuti, data.turnir);
    } catch(err){
        next(err);
    }
}


module.exports = {
    prikaziPocetnu,
    prikaziTurnir,
    unesiMec
};