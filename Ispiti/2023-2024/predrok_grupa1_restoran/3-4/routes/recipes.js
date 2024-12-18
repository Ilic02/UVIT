const express = require("express");
const controller = require("../controllers/recipes");

const router = express.Router();

router.get("/", controller.showAllRecipes);
router.post("/search", controller.searchRecipes)
router.post("/new", controller.addNewRecipe);


module.exports = router;
