const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ime:{
        type: String, 
        required: true
    },
    prezime:{
        type: String,
        required: false
    },
    stanje:{
        type: Number,
        required: true,
        default: 0
    }
}, {collection: "accounts"});

const Model = mongoose.model("Account", Schema);

module.exports.getAccounts = async function () {
    return await Model.find().sort({ime:1}).exec();
};

module.exports.createAccount = async function (ime, prezime, stanje) {
    let newEl = new Model();
    newEl._id = new mongoose.Types.ObjectId;
    newEl.ime = ime;
    newEl.prezime = prezime;
    newEl.stanje = stanje;

    await newEl.save();
};

module.exports.executeTransaction = async function (_id, kolicina, tip) {
    
};