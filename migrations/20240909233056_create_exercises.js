export function up(knex) {
    return knex.schema.createTable("exercises", function (table) {
        table.increments("id").primary();
        table.string("name").notNullable();
        table.integer("body_part_id").unsigned().notNullable();
        table.string("difficulty", ["Beginner", "Intermediate", "Advanced"]);
        table.string("exercise_type", ["Strength", "Fat Loss", "Gain Muscle"]);
        table.string("description").notNullable();
        table.text("instructions", "longtext").notNullable();
        table.integer("sets").notNullable();
        table.integer("reps").notNullable();
        table.string("video").notNullable()

        table
            .foreign("body_part_id")
            .references("id")
            .inTable("body_parts")
            .onDelete("CASCADE");
    });
}

export function down(knex) {
    return knex.schema.dropTable("exercises");
}
