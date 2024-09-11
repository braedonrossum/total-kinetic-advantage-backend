import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration.development);

export async function generateProgram(req, res) {
    const { frequency, fitnessLevel, exerciseType } = req.body;

    try {
        // Query to fetch exercises based on user input
        const exercises = await knex("exercises")
            .where("difficulty", fitnessLevel)
            .andWhere("exercise_type", exerciseType)
            .select("name", "body_part_id");

        // Logic to generate a program based on frequency
        const program = generateExerciseProgram(exercises, frequency);

        res.json(program);
    } catch (error) {
        console.error("Error generating program:", error);
        res.status(500).send("Error generating program");
    }
}

// Rename the program logic function to avoid conflict
function generateExerciseProgram(exercises, frequency) {
    // If frequency is higher than available exercises, return all of them
    if (frequency > exercises.length) {
        return exercises;
    }

    // Select a random subset of exercises based on frequency
    const selectedExercises = [];
    const availableExercises = [...exercises]; // Clone the exercises array

    for (let i = 0; i < frequency; i++) {
        // Randomly select an exercise and remove it from the available list
        const randomIndex = Math.floor(Math.random() * availableExercises.length);
        selectedExercises.push(availableExercises[randomIndex]);
        availableExercises.splice(randomIndex, 1); // Remove selected exercise
    }

    return selectedExercises;
}

// export async function generateProgram(req, res) {
//     const { frequency, fitnessLevel, exerciseType } = req.body;
  
//     try {
//       // Query to fetch exercises based on user input
//       const exercises = await knex('exercises')
//         .where('difficulty', fitnessLevel)
//         .andWhere('exercise_type', exerciseType)
//         .select('name', 'body_part_id');
        
//       // Logic to generate a program based on frequency
//       const program = generateExerciseProgram(exercises, frequency);
      
//       res.json(program);
//     } catch (error) {
//       console.error('Error generating program:', error);
//       res.status(500).send('Error generating program');
//     }
//   }
  
//   // Helper function to shuffle an array
//   function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }
  
//   // Generate a program with unique groups of 3 exercises for each frequency
//   function generateExerciseProgram(exercises, frequency) {
//     // Shuffle the exercises to ensure randomness
//     let shuffledExercises = shuffleArray([...exercises]);
  
//     // Determine how many groups of 3 we need
//     const totalExercisesNeeded = frequency * 3;
  
//     // If we don't have enough exercises, repeat them but ensure uniqueness within each group
//     if (shuffledExercises.length < totalExercisesNeeded) {
//       const multiplier = Math.ceil(totalExercisesNeeded / shuffledExercises.length);
//       shuffledExercises = [...Array(multiplier).fill(shuffledExercises).flat()];
//     }
  
//     // Ensure each group contains unique exercises
//     const program = [];
//     for (let i = 0; i < frequency; i++) {
//       const group = shuffledExercises.slice(i * 3, i * 3 + 3);
      
//       // Check if we are running out of distinct exercises
//       if (group.length < 3) {
//         shuffledExercises = shuffleArray([...exercises]);
//         group.push(...shuffledExercises.slice(0, 3 - group.length)); // Fill remaining spots with new exercises
//       }
      
//       program.push(group);
//     }
  
//     return program;
//   }