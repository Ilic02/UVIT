const mongoose = require('mongoose')

const letoviSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    from:{
        type: String
    },
    to:{
        type: String
    },
    direct:{
        type: String
    },
    duration:{
        type: Number
    },
    freeSpace:{
        type: Number
    },
    price:{
        type: Number
    },
    date:{
        type: String
    }
}, { collection : "letovi" });

const letoviModel = mongoose.model("Letovi", letoviSchema);

async function dohvatiLet(from, to, date) {
    return await letoviModel.find({from: from, to: to, date: date});
} 

module.exports = {
    dohvatiLet
};


