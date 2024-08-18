const { IncomingMessage } = require('http');
const mongoose = require('mongoose');

const recipesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    meal:{
        type: String
    },
    image:{
        type: String
    },
    ingredients:{
        type: [String]
    },
    preparation:{
        type: String
    }
}, {collection: "recipes"});

const recipesModel = mongoose.model("Food", recipesSchema);

async function getAllRecipes(){
    const recipes = await recipesModel.find().exec();

    return recipes;
}

async function searchRecipes(search){

}

async function addNewRecipe(name, image, steps, ingredients){
    const newRecipe = new recipesModel({
        _id: new mongoose.Types.ObjectId,
        meal: name,
        image: image,
        ingredients: ingredients,
        preparation: steps
    });

    await newRecipe.save();

    const test = await recipesModel.find({}).exec();
    console.log(test);
}

module.exports = {
    getAllRecipes,
    searchRecipes,
    addNewRecipe
};
