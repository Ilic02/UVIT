const recipesModel = require('../models/recipes');
async function showAllRecipes(req, res, next) {
    try{
        const recipes = await recipesModel.getAllRecipes();

        res.render('pocetna.ejs', {recipes});
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
        let name = data.name;
        let image = data.image;
        let steps = data.steps;
        let ingredients = data.ingredients;

        console.log(data)
        console.log(name)
        console.log(image)
        console.log(steps)
        console.log(ingredients)
        
        await recipesModel.addNewRecipe(name, image, steps, ingredients);
    }catch(err){
        next(err);
    }
}

module.exports = {
    showAllRecipes,
    searchRecipes,
    addNewRecipe	
};
