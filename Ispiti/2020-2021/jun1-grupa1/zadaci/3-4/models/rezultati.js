const mongoose = require('mongoose');
const { type } = require('os');

const rezultatiSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    drzavaKojaGlasa:{
        type: String,
        required: true
    },

    drzavaZaKojuSeGlasa:{
        type: String,
        required: true
    },

    ziri:{
        type: Boolean,
        required: true
    },

    poeni:{
        type: Number,
        required: true
    }

}, {collection : 'rezultati'});

const rezultatiModel = mongoose.model('Rezultati', rezultatiSchema);

async function dohvatiDrzaveZaKojePostojeRezultati() {
    const drzave = await rezultatiModel.find({}, {drzavaZaKojuSeGlasa:true, _id:false}).sort({drzavaZaKojuSeGlasa:1}).exec();
    let ret = [];
    for(let d of drzave){
        let ime = d.drzavaZaKojuSeGlasa;
        if(ret.length == 0)
            ret.push(ime);
        else if(ret[ret.length - 1] != ime)
            ret.push(ime);
    }
    return ret;
}

async function dohvatiRezultateZirijaZaDrzavu(drzava) {
    return await rezultatiModel.find({drzavaZaKojuSeGlasa: drzava, ziri:true}).sort({poeni:-1}).exec();
}

async function dohvatiRezultatePublikeZaDrzavu(drzava) {
    return await rezultatiModel.find({drzavaZaKojuSeGlasa: drzava, ziri:false}).sort({poeni:-1}).exec();    
}

module.exports = {
    dohvatiDrzaveZaKojePostojeRezultati,
    dohvatiRezultateZirijaZaDrzavu,
    dohvatiRezultatePublikeZaDrzavu,
};
