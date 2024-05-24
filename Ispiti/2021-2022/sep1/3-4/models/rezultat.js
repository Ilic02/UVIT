const mongoose = require('mongoose');

const rezultatiSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:{
        type: String,
    },
    password:{
        type: String,
    },
    poeni:{
        type: Number,
    },
    pitanja:[mongoose.Schema.Types.ObjectId]
}, {collection: "rezultati"});

const rezultatiModel = mongoose.model("Rezultat", rezultatiSchema);

// 3. zadatak
async function dohvatiRezultate(username, password){
    return await rezultatiModel.find({username:username, password:password}).sort({poeni:-1}).exec();
}

module.exports = {
    dohvatiRezultate
};
