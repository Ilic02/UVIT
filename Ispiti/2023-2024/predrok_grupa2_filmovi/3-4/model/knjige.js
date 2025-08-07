const mongoose = require('mongoose')

const knjigeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:{
        type: String, 
        required: true
    },
    author:{
        type: String
    },
    pages:{
        type: Number
    },
    year:{
        type: Number
    },
    read:{
        type: Boolean,
        default: false
    }
}, {collection : "knjige"});

const knjigeModel = mongoose.model("Knjige", knjigeSchema);

async function dohvatiKnjige() {
    return await knjigeModel.find().exec();
} 


async function unesiKnjigu(naslov, pisac, godina, strane) {
    let newEl = new knjigeModel;
    newEl._id = new mongoose.Types.ObjectId;
    newEl.author = pisac;
    newEl.title = naslov;
    newEl.year = godina;
    newEl.pages = strane;
    newEl.read = false;


    await newEl.save();
}

async function dohvatiKnjigu(id) {
    return await knjigeModel.find({_id:id}).exec();
} 

module.exports = {
    dohvatiKnjige, 
    unesiKnjigu,
    dohvatiKnjigu
};