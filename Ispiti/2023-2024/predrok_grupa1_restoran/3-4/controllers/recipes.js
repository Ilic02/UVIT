const recipesModel = require('../models/recipes');
async function showAllRecipes(req, res, next) {
    try{
        res.render("pocetna.ejs", {recipes: await recipesModel.getAllRecipes()});
    }catch(err){
        next(err);
    }
}

async function searchRecipes(req, res, next) {
    try{
 
    }catch(err){
        next(err);
    }
}

async function addNewRecipe(req, res, next) {
    try{
        let data = req.body;
        let recipe = data.recipe;
        let image = data.image;
        let preparation = data.preparation;
        let ingredients = data.ingredients;

        console.log(recipe, image, preparation, ingredients);

        await recipesModel.addNewRecipe(recipe, image, preparation, ingredients);
    }catch(err){
        next(err);
    }
}

module.exports = {
    showAllRecipes,
    searchRecipes,
    addNewRecipe	
};
