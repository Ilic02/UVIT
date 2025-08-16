const mongoose = require('mongoose')

const gradoviSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    city:{
        type: String
    },
    description:{
        type: String
    },
    questions:{
        type: [String]
    }
}, { collection : "gradovi" });

const gradoviModel = mongoose.model("Gradovi", gradoviSchema);

async function dohvatiInfo(city) {
    return await gradoviModel.find({city: city}, {description: 1, _id: 0});
} 

async function dohvatiPitanja(city){
}



module.exports = {
    dohvatiInfo,
    dohvatiPitanja
};


