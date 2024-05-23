const mongoose = require('mongoose');

const lekoviSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nazivLeka:{
        type: String,
        required: true
    },
    proizvodjac:{
        type: String,
        required: true
    },
    simptomi:{
        type: [String],
        required: true
    },
    miligrami:{
        type: [Number],
        required: true
    }
}, {collection: "lekovi"});

const lekoviModel = mongoose.model("Lek", lekoviSchema);

// 3. zadatak
async function dohvatiLekove(spisak_simptoma){
    let niz_lekova =[];
    
    let svi_lekovi = await lekoviModel.find({}).exec();
    for (let lek of svi_lekovi){
        let dodajemo=false;
        for (let s of spisak_simptoma){
            if (lek.simptomi.includes(s)){
                    dodajemo = true;
                    break;
            }
        }
        if (dodajemo){
            niz_lekova.push(lek);
        }
    }
    return niz_lekova;
}

module.exports = {
    dohvatiLekove
};
