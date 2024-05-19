const mongoose = require('mongoose');

const planSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  mesec:{
    type: String,
    required: true
  },
  dogadjaj:{
    type: String,
    required: true
  },
  datum:{
    type: Date,
    required: true
  },
  celodnevna_aktivnost:{
    type: Boolean,
    default: false
  }
}, {collection: "planovi"});

const planModel = mongoose.model("Planovi", planSchema);


async function dohvatiMeseceIzPlanera() {
  const planovi = await planModel.find().sort({datum:1}).exec();

  let meseci = [];
  for(let plan of planovi){
    if(meseci.length == 0)
      meseci.push(plan.mesec);
    else if(meseci[meseci.length - 1] != plan.mesec)
      meseci.push(plan.mesec);
  }

  return meseci;
} 

async function dohvatiPlanoveZaMesec(mesec) {
  return await planModel.find({mesec: mesec}).sort({datum:1}).exec();
}

async function obrisiDogadjaj(id) {
  await planModel.deleteOne({_id: id}).exec();
} 

module.exports = {
  dohvatiMeseceIzPlanera,
  dohvatiPlanoveZaMesec,
  obrisiDogadjaj
};
