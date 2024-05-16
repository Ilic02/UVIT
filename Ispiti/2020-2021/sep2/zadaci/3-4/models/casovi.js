const mongoose = require('mongoose');

const casoviSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    grupa:{
        type: String,
        required: true
    },
    predmet:{
        type: String,
        required: true
    },
    tip:{
        type: String,
        required: true
    },
    dan:{
        type: String,
        required: true
    },
    vreme:{
        type: Number,
        required: true
    },
    brojCasova:{
        type: Number,
        required: true
    }
}, {collection: "casovi"});

const casoviModel = mongoose.model("Cas", casoviSchema);

// 3. zadatak
async function dohvatiCasoveZaGrupu(grupa) {
    const casovi = await casoviModel.find({grupa: grupa}, {grupa: false}).sort({vreme: 1}).exec();

    const dani = {
        Ponedeljak: [],
        Utorak: [],
        Sreda: [],
        Cetvrtak: [],
        Petak: [],
    };

    for(const c of casovi)
        dani[c.dan].push(c);

    return dani;
}


// 4. zadatak
async function obrisiCas(id) {
    await casoviModel.deleteOne({_id: id});
}

module.exports = {
    dohvatiCasoveZaGrupu,
    obrisiCas,
};
