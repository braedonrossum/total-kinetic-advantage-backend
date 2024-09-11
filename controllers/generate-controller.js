import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration.development);

export async function generateProgram(req, res) {
    const { frequency, fitnessLevel, exerciseType } = req.body;

    try {
        if (!Number.isInteger(frequency) || frequency <= 0) {
            return res.status(400).send("Frequency must be a positive integer.");
        }

        const exercises = await knex("exercises")
            .where("difficulty", fitnessLevel)
            .andWhere("exercise_type", exerciseType)
            .select("name", "body_part_id");

        const program = generateExerciseProgram(exercises, frequency);

        res.json(program);
    } catch (error) {
        console.error("Error generating program:", error);
        res.status(500).send("Error generating program");
    }
}

function generateExerciseProgram(exercises, frequency) {
    const exercisesPerDay = 4;

    const totalExercisesNeeded = frequency * exercisesPerDay;

    if (exercises.length < totalExercisesNeeded) {
        throw new Error("Not enough exercises available to create a full program.");
    }

    const shuffledExercises = exercises.sort(() => Math.random() - 0.5);

    const program = [];

    for (let day = 0; day < frequency; day++) {
        const dayExercises = shuffledExercises.slice(day * exercisesPerDay, (day + 1) * exercisesPerDay);
        program.push({ day: day + 1, exercises: dayExercises });
    }

    return program;
}