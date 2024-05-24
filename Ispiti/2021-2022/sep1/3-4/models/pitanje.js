const mongoose = require('mongoose');

const pitanjaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tekst:{
        type: String,
        required: true
    },
    odgovor:{
        type: String,
        required: true
    },
    oblast:{
        type: String,
        required: true
    },
    tezina:{
        type: Number,
        required: true
    }
}, {collection: "pitanja"});

const pitanjaModel = mongoose.model("Pitanje", pitanjaSchema);

// 4. zadatak
async function ubaciPitanje(tekst, odgovor, oblast, tezina){
    let newEl = new pitanjaModel();
    newEl._id = new mongoose.Types.ObjectId;
    newEl.tekst = tekst;
    newEl.odgovor = odgovor;
    newEl.oblast = oblast;
    newEl.tezina = tezina;

    await newEl.save();
}

module.exports = {
    ubaciPitanje
};
