export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("exercises").del();

  // Inserts seed entries
  await knex("exercises").insert([
      // Chest exercises
      {
          name: "Bench Press",
          body_part_id: 1,
          difficulty: "Intermediate",
          exercise_type: "Strength",
          description: "A barbell exercise that targets the chest muscles, primarily the pectoralis major.",
          instructions: "Lie on a bench with feet flat on the floor. Grip the barbell slightly wider than shoulder-width. Lower the barbell to your chest and then press it back up."
      },
      {
          name: "Push-up",
          body_part_id: 1,
          difficulty: "Beginner",
          exercise_type: "Strength",
          description: "A bodyweight exercise that engages the chest, triceps, and shoulders.",
          instructions: "Start in a plank position with hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push back up."
      },
      {
          name: "Incline Bench Press",
          body_part_id: 1,
          difficulty: "Intermediate",
          exercise_type: "Gain Muscle",
          description: "A variation of the bench press performed on an inclined bench to target the upper chest.",
          instructions: "Set the bench to a 30-45 degree incline. Grip the barbell slightly wider than shoulder-width, lower it to your chest, then press it back up."
      },
      {
          name: "Chest Fly",
          body_part_id: 1,
          difficulty: "Intermediate",
          exercise_type: "Gain Muscle",
          description: "An isolation exercise that targets the chest muscles.",
          instructions: "Lie on a bench with a dumbbell in each hand. With elbows slightly bent, lower the weights to the sides, then bring them back together in a hugging motion."
      },
      {
          name: "Decline Push-up",
          body_part_id: 1,
          difficulty: "Beginner",
          exercise_type: "Fat Loss",
          description: "A variation of the push-up where the feet are elevated, targeting the upper chest more intensely.",
          instructions: "Place your feet on an elevated surface and your hands on the ground. Lower your body until your chest is close to the floor, then push back up."
      },

      // Legs exercises
      {
          name: "Squat",
          body_part_id: 2,
          difficulty: "Beginner",
          exercise_type: "Strength",
          description: "A foundational lower body exercise that works the quads, hamstrings, and glutes.",
          instructions: "Stand with feet shoulder-width apart. Lower your body by bending your knees and hips until your thighs are parallel to the ground. Push through your heels to return to the starting position."
      },
      {
          name: "Lunges",
          body_part_id: 2,
          difficulty: "Intermediate",
          exercise_type: "Strength",
          description: "A unilateral lower body exercise that targets the quads, hamstrings, and glutes.",
          instructions: "Step forward with one leg and lower your hips until both knees are bent at a 90-degree angle. Push back to the starting position and repeat on the other side."
      },
      {
          name: "Jump Squats",
          body_part_id: 2,
          difficulty: "Advanced",
          exercise_type: "Fat Loss",
          description: "A plyometric variation of the squat that incorporates explosive movement to increase power and burn calories.",
          instructions: "Perform a regular squat, but as you come up, explode into a jump. Land softly and immediately go into the next squat."
      },
      {
          name: "Leg Press",
          body_part_id: 2,
          difficulty: "Intermediate",
          exercise_type: "Gain Muscle",
          description: "A machine-based exercise that targets the quads, hamstrings, and glutes.",
          instructions: "Sit on the leg press machine with feet shoulder-width apart on the platform. Push the platform away by extending your legs, then return slowly to the starting position."
      },
      {
          name: "Bulgarian Split Squat",
          body_part_id: 2,
          difficulty: "Advanced",
          exercise_type: "Gain Muscle",
          description: "A single-leg squat variation that emphasizes the quads and glutes while also improving balance.",
          instructions: "Place one foot on a bench behind you. Lower your body by bending the front knee until the thigh is parallel to the ground, then press through the front heel to return to the starting position."
      },

      // Arms exercises
      {
          name: "Bicep Curls",
          body_part_id: 3,
          difficulty: "Beginner",
          exercise_type: "Strength",
          description: "An isolation exercise targeting the biceps.",
          instructions: "Stand with feet shoulder-width apart and hold a dumbbell in each hand. Curl the weights towards your shoulders, then lower them back down."
      },
      {
          name: "Tricep Dips",
          body_part_id: 3,
          difficulty: "Intermediate",
          exercise_type: "Strength",
          description: "An exercise that targets the triceps using body weight.",
          instructions: "Place your hands on a bench behind you with fingers facing forward. Lower your body by bending your elbows, then press back up to the starting position."
      },
      {
          name: "Concentration Curl",
          body_part_id: 3,
          difficulty: "Intermediate",
          exercise_type: "Gain Muscle",
          description: "A bicep curl variation performed while seated, isolating the biceps.",
          instructions: "Sit on a bench and rest your elbow on the inside of your thigh. Curl the dumbbell towards your shoulder, then lower it back down."
      },
      {
          name: "Overhead Tricep Extension",
          body_part_id: 3,
          difficulty: "Intermediate",
          exercise_type: "Gain Muscle",
          description: "An exercise targeting the triceps by extending the arms overhead.",
          instructions: "Hold a dumbbell or barbell overhead with both hands. Lower the weight behind your head by bending your elbows, then extend your arms back to the starting position."
      },
      {
          name: "Battle Ropes",
          body_part_id: 3,
          difficulty: "Advanced",
          exercise_type: "Fat Loss",
          description: "A high-intensity exercise using heavy ropes to improve cardiovascular fitness and burn fat.",
          instructions: "Hold the ends of the ropes with both hands and create waves by rapidly moving your arms up and down. Maintain a strong, athletic stance throughout."
      },

      // Add other exercises here...
  ]);
};