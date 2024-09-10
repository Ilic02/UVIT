const mongoose = require('mongoose')

const uceniciSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imePrezime:{
        type: String, 
        required: true
    },
    razred:{
        type: Number, 
        required: true
    },
    odeljenje:{
        type: Number,
        required: true
    },
    ocene:[{
        predmet: {
            type: String,
            required: true
        },
        ocena:{
            type: Number,
            required: true
        }
    }],
    putanjaSlike:{
        type: String, 
        required: true
    }
}, {collection: "ucenici"});

const uceniciModel = mongoose.model("Ucenik", uceniciSchema);

async function dohvatiOceneUcenika(imePrezime) {
	return await uceniciModel.find({imePrezime: imePrezime}).exec();
} 


async function dodajNovuOcenu(imePrezime, predmet, ocena){
    await uceniciModel.findOneAndUpdate(
        {imePrezime: imePrezime},
        {
            $push:{
                ocene:{
                    predmet: predmet,
                    ocena: ocena
                }
            }
        },
        {new: true, useFindAndModify: false}
    );
}



module.exports = {
    dohvatiOceneUcenika,
    dodajNovuOcenu
};
