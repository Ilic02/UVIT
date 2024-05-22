const mongoose = require('mongoose')

const turniriSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    igrac1:{
        type: String,
        required: true
    },
    igrac2:{
        type: String,
        required: true
    },
    poeni1:{
        type: String,
        required: true
    },
    poeni2:{
        type: String,
        required: true
    },
    vreme:{
        type: String
    },
    turnir:{
        type: String
    }
}, {collection:"turniri"});

const turniriModel = mongoose.model("Turniri", turniriSchema);

async function dohvatiIgreZaTurnir(turnir) {
    return await turniriModel.find({turnir:turnir}).exec();
} 


async function dohvatiTurnire() {
    let lst = await turniriModel.find({}, {turnir: true}).sort({turnir:1}).exec();
    let ret = [];

    for(el of lst){
        if(ret.length == 0)
            ret.push(el.turnir);
        else if(ret[ret.length - 1] != el.turnir)
            ret.push(el.turnir);
    }

    return ret;
}

async function unesiTurnir(igrac1, igrac2, poeni1, poeni2, vreme, turnir) {
    let newEl = new turniriModel();
    newEl._id = new mongoose.Types.ObjectId;
    newEl.igrac1 = igrac1;
    newEl.igrac2 = igrac2;
    newEl.poeni1 = poeni1;
    newEl.poeni2 = poeni2;
    newEl.vreme = vreme;
    newEl.turnir = turnir;

    await newEl.save();
} 

module.exports = {
    dohvatiTurnire,
    dohvatiIgreZaTurnir,
    unesiTurnir
};