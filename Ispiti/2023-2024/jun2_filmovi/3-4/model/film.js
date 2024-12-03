const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    naslov:{
        type: String, 
        required: true
    },
    godina:{ 
        type: Number
    },
    duzina:{ 
        type: String
    },
    imdb:{ 
        type: Number
    },
    glumci:{
        type: [String]
    },
    zanr:{
        type: [String]
    }
}, {collection : "film"});

const filmModel = mongoose.model("Film", filmSchema);

async function dohvatiFilmove() {
    return await filmModel.find().exec();
} 

async function dodajFilm(naslov, godina, duzina, imdb, zanr) {
    let newEl = new filmModel();
    newEl._id = new mongoose.Types.ObjectId;
    newEl.naslov = naslov;
    newEl.godina = godina;
    newEl.duzina = duzina;
    newEl.imdb = imdb;
    newEl.zanr = zanr;

    await newEl.save();
}

async function dodajGlumca(id, noviGlumac){
}

async function dohvatiFilm(id) {
    const objectId = mongoose.Types.ObjectId(id); 

    return await filmModel.find({_id: objectId}).exec();
} 

module.exports = {
    dohvatiFilmove, 
    dodajFilm,
    dohvatiFilm,
    dodajGlumca
};
