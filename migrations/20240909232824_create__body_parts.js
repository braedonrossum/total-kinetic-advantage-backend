export function up(knex) {
    return knex.schema.createTable("body_parts", function (table) {
        table.increments("id").primary();
        table.string("name").notNullable();
    });
};

export function down(knex) {
    return knex.schema.dropTable("body_parts");
};
