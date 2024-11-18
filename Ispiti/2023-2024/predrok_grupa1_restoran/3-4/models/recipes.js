const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    meal:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    ingredients:{
        type: [String], 
        required: true
    },
    preparation:{
        type: String,
        required: true
    }
}, {collection : "recipes"});

const model = mongoose.model("Food", Schema);

async function getAllRecipes(){
    return await model.find().exec();
}

async function searchRecipes(search){

}

async function addNewRecipe(recipe, image, preparation, ingredients){
    let newEl = new model();
    newEl._id = new mongoose.Types.ObjectId;
    newEl.meal = recipe;
    newEl.image = image;
    newEl.ingredients = ingredients;
    newEl.preparation = preparation;

    await newEl.save();
}

module.exports = {
    getAllRecipes,
    searchRecipes,
    addNewRecipe
};
