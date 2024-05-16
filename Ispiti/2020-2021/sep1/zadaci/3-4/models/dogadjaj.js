const mongoose = require('mongoose');

const dogadjajiSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    naziv:{
        type: String,
        required: true
    },
    godina:{
        type: Number,
        required: true
    },
    mesec:{
        type: Number,
        required: true
    },
    dan:{
        type: Number, 
        required: true
    },
    trajanje:{
        type: Number, 
        required: true
    },
    predavaci:{
        type: [String],
        required: true
    }
}, {collection: 'dogadjaji'});

const dogadjajiModel = mongoose.model("Dogadjaj", dogadjajiSchema);

async function dohvatiDogadjaje(godina, mesec, dan) {
    godina = godina == '' ? { $ne: godina } : godina;
    mesec = mesec == '' ? { $ne: mesec } : mesec;
    dan = dan == '' ? { $ne: dan } : dan;

    const dogadjaji = await dogadjajiModel.find({ godina: godina, mesec: mesec, dan: dan }).sort({ godina: 1, mesec: 1, dan: 1 }).exec();
    return dogadjaji;
}

async function azurirajDogadjaj(id, naziv, godina, mesec, dan, trajanje) {
    const stariDogadjaj = await dogadjajiModel.find({_id : id}).exec();
    const predavaci = stariDogadjaj[0].predavaci;
    const noviDogadjaj = new dogadjajiModel({
        _id: id,
        naziv: naziv,
        godina: godina,
        mesec: mesec, 
        dan: dan,
        trajanje: trajanje, 
        predavaci: predavaci
    });

    await dogadjajiModel.updateOne({_id: id}, noviDogadjaj);

    const azuriraniDogadjaj = await dogadjajiModel.find({_id: id}, {predavaci: false}).exec();
    return azuriraniDogadjaj[0];
}

module.exports = {
    dohvatiDogadjaje,
    azurirajDogadjaj,
};
