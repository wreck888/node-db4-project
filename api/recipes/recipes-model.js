const db= require("../../data/db-config")

function getRecipes() {
    return db('recipes')
}

async function getRecipeById(recipe_id)  {
    const recipe = await db("recipes")
    .where("recipe_id", recipe_id)
        return recipe;
}

module.exports ={
    getRecipeById
} 