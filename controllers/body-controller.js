import initKnex from "knex";
import knexConfig from "../knexfile.js";
const knex = initKnex(knexConfig.development);

const getColumns = [
    "id",
    "name"
]

export async function getAllBody(req, res) {

    const query = knex("body_parts").select(getColumns);
    try {
        // Execute the query
        const data = await query;
        res.status(200).json(data);
    } catch (error) {
        // Handle any errors that occur during query execution
        res.status(500).json({ error: error.message });
    }
}

export async function getExercisesByBodyId(req, res) {
    try {
        const bodyId = req.params.id;

        const body = await knex("body_parts")
            .select("id")
            .where({ id: bodyId });

        if (body.length === 0) {
            return res.status(404).json({
                message: `Body part with ID ${bodyId} not found`,
            });
        }

        const exercises = await knex("exercises")
            .select(
                "exercises.id",
                "exercises.name",
                "exercises.difficulty",
                "exercises.exercise_type"
            )
            .where({ body_part_id: bodyId });

        res.status(200).json(exercises);
    } catch (err) {
        res.status(500).json({
            message: `Error retrieving exercises for body part: ${err}`,
        });
    }
}