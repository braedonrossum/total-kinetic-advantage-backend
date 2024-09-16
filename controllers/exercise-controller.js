import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration.development);

const getColumns = [
    "name",
    "body_part_id",
    "difficulty",
    "exercise_type",
    "description",
    "instructions"
] 

export async function getAllExercises(req, res) {

    const query = knex("exercises").select(getColumns);
    try {
        // Execute the query
        const data = await query;
        res.status(200).json(data);
        console.log(data)
    } catch (error) {
        // Handle any errors that occur during query execution
        res.status(500).json({ error: error.message });
    }
}

export async function getExerciseById(req,res) {
    try {
        if (!req.params.id) {
            return res.status(400).json({
                message: `Please include id parameter`,
                requiredProperties: [`id`],
            });
        }
        const data = await knex
            .select(getColumns)
            .from("exercises")
            .where({ id: req.params.id })
            .first();
        if (!data) {
            return res.status(404).json({
                message: `Exercise ${req.params.id} not found`,
            });
        }
        return res.status(200).json(data);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: `Error retrieving Exercise ${req.params.id} Data`,
        });
    }
}