const recipes = [
  {recipe_name: "Chicken a La Grilled"},
  {recipe_name: "The Chicken of Mr. Fettuccine Alfredo"},
  {recipe_name: "Pasta de Chicken Pesto"},
]

const ingredients = [
  {ingredient_name: "dough", unit_amount: "oz"},
  {ingredient_name: "sauce", unit_amount: "oz"},
  {ingredient_name: "pasta", unit_amount: "oz"},
  {ingredient_name: "cheese", unit_amount: "oz"},
  {ingredient_name: "chicken", unit_amount: "oz"},
  {ingredient_name: "pesto", unit_amount: "oz"},
]

const steps_ingredients = [
  // Chicken a La GrilledGrilled Chicken
  {step_id:3, ingredient_id:5, quantity:1},

  // The Chicken of Mr. Fettuccine Alfredo
  {step_id:5, ingredient_id:5, quantity:1},
  {step_id:6, ingredient_id:3, quantity:0.4},
  {step_id:7, ingredient_id:2, quantity:2},

  // Pasta de Chicken Pesto
  {step_id:9, ingredient_id:1, quantity:4},
  {step_id:10, ingredient_id:6, quantity:1},
  {step_id:11, ingredient_id:4, quantity:2},
  {step_id:12, ingredient_id:5, quantity:1},
]

const steps = [
  // Chicken a La Grilled
  {step_text:"Start Grill and Heat up to temperature", step_number:1, recipe_id:1},
  {step_text:"Add any seasonings", step_number:2, recipe_id:1},
  {step_text:"Cook chicken", step_number:3, recipe_id:1},

  // The Chicken of Mr. Fettuccine Alfredo
  {step_text:"Preheat oven to 400 degrees and cook water to boil", step_number:1, recipe_id:2},
  {step_text:"Cook chicken for 20 minutes", step_number:2, recipe_id:2},
  {step_text:"Cook pasta", step_number:3, recipe_id:2},
  {step_text:"sauce to pasta", step_number:4, recipe_id:2},
  {step_text:"add chicken and stir", step_number:5, recipe_id:2},

  // Pasta de Chicken Pesto
  {step_text:"Roll dough out to shape", step_number:1, recipe_id:3},
  {step_text:"add pesto sauce", step_number:2, recipe_id:3},
  {step_text:"add cheese", step_number:2, recipe_id:3},
  {step_text:"add chicken", step_number:2, recipe_id:3},
  {step_text:"Bake on 450 degrees for 20 minutes", step_number:2, recipe_id:3},
]

exports.seed = function(knex) {
 knex("recipes").insert(recipes)
 knex("ingredients").insert(ingredients)
 knex("steps").insert(steps)
 knex("step_ingredients").insert(step_ingredients)
}