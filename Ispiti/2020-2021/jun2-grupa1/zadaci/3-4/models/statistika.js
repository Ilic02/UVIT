const mongoose = require('mongoose');
const { type } = require('os');

const statistikaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    smer:{
        type: String,
        required: true
    },
    brojStudenata:{
        type: Number, 
        required: true
    },
    prosek:{
        type: String,
        required: true
    },
    student:{
        type: String,
        required: true
    },
    datum:{
        type: Date,
        required: true
    },
    imaKomentar:{
        type: Boolean, 
        required: true
    },
    komentar:{
        type: String
    }
}, {collection: "statistike"})

const statistikeModel = mongoose.model('Statistika', statistikaSchema);

// Za 3. zadatak
async function dohvatiIstorijuStatistikaZaSmer(smer) {
    const statistike = await statistikeModel.find({smer : smer}, {_id: false, smer: false}).exec();

    return statistike;
}

// Za 4. zadatak
async function unesiStatistikuZaSmer(smer, brojStudenata, prosek, student, datum, imaKomentar, komentar) {
    const novaStatistika = new statistikeModel({
        _id: new mongoose.Types.ObjectId,
        smer: smer,
        brojStudenata : brojStudenata,
        prosek: prosek,
        student : student,
        datum: datum,
        imaKomentar: imaKomentar,
        komentar: komentar
    });

    await novaStatistika.save();

    const test = await statistikeModel.find({}).exec();

    console.log(test);
}

module.exports = {
    dohvatiIstorijuStatistikaZaSmer,
    unesiStatistikuZaSmer,
};
