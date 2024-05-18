const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    indeks:{
        type: String,
        required: true
    },
    ime:{
        type: String,
        required: true
    },
    prezime:{
        type: String,
        required: true
    },
    smer:{
        type: String,
        required: true
    }
}, {collection: "studenti"});

const studentModel = mongoose.model("Student", studentSchema);

// Za 4. zadatak
async function dohvatiInfoStudenta(indeks) {
    const info  = await studentModel.findOne({indeks: indeks})

    if(info.length === 0)
        console.log("Nema nista (student)");

    return info;
}

module.exports = {
    dohvatiInfoStudenta
};
