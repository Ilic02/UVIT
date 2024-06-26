const mongoose = require('mongoose');

const meteoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    grad:{
        type: String, 
        required: true
    },
    
    drzava:{
        type: String, 
        required: true
    },

    temperatura:{
        type: Number,
        required: true
    },

    datum:{
        type: Date, 
        required: true
    }
}, {collection: 'meteopodaci'});

const meteoModel = mongoose.model('Meteo', meteoSchema);

async function dohvatiStatistike() {
    const temps = await meteoModel.find().sort({grad:1}).exec();

    if(temps.length == 0){
        return;
    }

    const listaGradova = [];

    for(const temp of temps){
        if(listaGradova.length == 0){
            listaGradova.push(temp.grad);
        }
        else{
            if(listaGradova[listaGradova.length - 1] != temp.grad){
                listaGradova.push(temp.grad);
            }
        }
    }

    const statistike = [];

    for(const grad of listaGradova){
        const stats = await meteoModel.find({grad:grad}).exec();

        let max = stats[0].temperatura;
        let min = stats[0].temperatura;
        let sum = 0;

        for(const stat of stats){
            if(stat.temperatura > max){
                max = stat.temperatura;
            }
            if(stat.temperatura < min){
                min = stat.temperatura;
            }

            sum += stat.temperatura;
        }

        const avg = sum / stats.length;

        const statistika = {
            grad,
            drzava: stats[0].drzava,
            max,
            avg,
            min
        }
        statistike.push(statistika);
    }

    return statistike;
}

async function dohvatiPodatke(grad, sort) {
    let _sort;
    if(sort == "opadajuce"){
        _sort = -1;
    }
    else if(sort == "rastuce"){
        _sort = 1;
    }

    const podaci =  await meteoModel.find({grad:grad}).sort({datum:_sort}).exec();
    return podaci;
}

module.exports = {
    dohvatiStatistike,
    dohvatiPodatke,
};
