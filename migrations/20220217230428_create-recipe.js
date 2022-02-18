exports.up = function(knex) {
    return knex.schema
    .createTable("recipes", tbl => {
        tbl.increments("recipe_id")
        tbl.string("recipe_name", 200)
            .notNullable()
            .unique()
    })
    .createTable("ingredients", tbl => {
        tbl.increments("ingredient_id")
        tbl.string("ingredient_name",200)
            .notNullable()
            .unique()
        tbl.string("unit_amount",50)
    })

    .createTable("steps", tbl => {
        tbl.increments("step_id")
        tbl.string("step_text", 200)
            .notNullable()
        tbl.integer("step_number")
            .notNullable()
        tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("recipe_id")
            .inTable("recipes")
    })
    
    .createTable("step_ingredients", tbl => {
        tbl.increments("step_ingredients_id")
        tbl.float("quantity")
            .notNullable()
        tbl.integer("step_id")
            .unsigned()
            .notNullable()
            .references("step_id")
            .inTable("steps")
        tbl.integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("ingredient_id")
            .inTable("ingredients")
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("step_ingredientss")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};