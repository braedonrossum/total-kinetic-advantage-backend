import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration.development);

export async function generateProgram(req, res) {
    const { frequency, fitnessLevel, exerciseType } = req.body;
    const frequencyNumber = Number(frequency)
        console.log(frequencyNumber, fitnessLevel, exerciseType)
    try {
        if (!Number.isInteger(frequencyNumber) || frequencyNumber <= 0) {
            return res.status(400).send("Frequency must be a positive integer.");
        }

        const exercises = await knex("exercises")
            .where("difficulty", "like", `%${fitnessLevel}%`)
            .andWhere("exercise_type", "like", `%${exerciseType}%`)
            .select("id", "name", "body_part_id","description", "instructions", "sets", "reps", "video");

        const program = generateExerciseProgram(exercises, frequencyNumber);

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