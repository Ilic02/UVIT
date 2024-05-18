const mongoose = require('mongoose');

const rasporedSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    godina:{
        type: Number, 
        required: true
    },
    smer:{
        type: String, 
        required: true
    },
    termin:{
        type: Date,
        required: true
    },
    predmet:{
        type: String, 
        required: true
    }
}, {collection: 'raspored'});

const rasporedModel = mongoose.model("Raspored", rasporedSchema);

// Za 3. zadatak
async function dohvatiCeoRaspored() {
    const podaci =  await rasporedModel.find({}).sort({smer: -1, godina: 1, termin: 1 }).exec();

    return podaci;
}

// Za 3. zadatak
async function unesiNoviIspit(godina, smer, termin, predmet) {
    const noviIspit = new rasporedModel({
        _id: new mongoose.Types.ObjectId,
        godina: godina,
        smer: smer,
        termin: termin,
        predmet: predmet
    });

    await noviIspit.save();

    const test = await rasporedModel.find({}).exec();

    console.log(test);
}

// Za 4. zadatak
async function dohvatiRasporedStudenta(indeks, smer) {
    const godina = 2021 - indeks.split('/')[1];

    const raspored = await rasporedModel.find({godina: godina, smer: smer}).sort({termin: 1}).exec();

    return raspored;
}

module.exports = {
    dohvatiCeoRaspored,
    dohvatiRasporedStudenta,
    unesiNoviIspit
};
