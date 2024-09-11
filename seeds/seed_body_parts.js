export async function seed(knex) {
    // Deletes ALL existing entries
    await knex("body_parts").del();

    // Inserts seed entries
    await knex("body_parts").insert([
        { name: "Chest" },
        { name: "Legs" },
        { name: "Arms" },
        { name: "Back" },
        { name: "Core" },
        { name: "Shoulders" },
        { name: "Glutes" },
    ]);
};
