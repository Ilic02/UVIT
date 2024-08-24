const mongoose = require('mongoose')

const knjigeSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:{
        type: String
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
}, {collection: "knjige"});

const knjigeModel = mongoose.model("Knjige",knjigeSchema);

async function dohvatiKnjige() {
    const knjige = await knjigeModel.find().exec();

    return knjige;
} 


async function unesiKnjigu(naslov, pisac, godina, strane) {
    const novaKnjiga = new knjigeModel({
        _id: new mongoose.Types.ObjectId,
        title: naslov,
        author: pisac, 
        pages: strane,
        year: godina
    });

    await novaKnjiga.save();
}

async function dohvatiKnjigu(id) {

    return await knjigeModel.find(id).exec();
} 

module.exports = {
    dohvatiKnjige, 
    unesiKnjigu,
    dohvatiKnjigu
};