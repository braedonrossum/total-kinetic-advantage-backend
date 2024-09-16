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
            description:
                "A barbell exercise that targets the chest muscles, primarily the pectoralis major.",
            instructions:
                "Lie on a bench with feet flat on the floor. Grip the barbell slightly wider than shoulder-width. Lower the barbell to your chest and then press it back up.",
        },
        {
            name: "Push-up",
            body_part_id: 1,
            difficulty: "Beginner",
            exercise_type: "Strength",
            description:
                "A bodyweight exercise that engages the chest, triceps, and shoulders.",
            instructions:
                "Start in a plank position with hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push back up.",
        },
        {
            name: "Incline Bench Press",
            body_part_id: 1,
            difficulty: "Intermediate",
            exercise_type: "Gain Muscle",
            description:
                "A variation of the bench press performed on an inclined bench to target the upper chest.",
            instructions:
                "Set the bench to a 30-45 degree incline. Grip the barbell slightly wider than shoulder-width, lower it to your chest, then press it back up.",
        },
        {
            name: "Chest Fly",
            body_part_id: 1,
            difficulty: "Intermediate",
            exercise_type: "Gain Muscle",
            description:
                "An isolation exercise that targets the chest muscles.",
            instructions:
                "Lie on a bench with a dumbbell in each hand. With elbows slightly bent, lower the weights to the sides, then bring them back together in a hugging motion.",
        },
        {
            name: "Decline Push-up",
            body_part_id: 1,
            difficulty: "Beginner",
            exercise_type: "Fat Loss",
            description:
                "A variation of the push-up where the feet are elevated, targeting the upper chest more intensely.",
            instructions:
                "Place your feet on an elevated surface and your hands on the ground. Lower your body until your chest is close to the floor, then push back up.",
        },

        // Legs exercises
        {
            name: "Squat",
            body_part_id: 2,
            difficulty: "Beginner",
            exercise_type: "Strength",
            description:
                "A foundational lower body exercise that works the quads, hamstrings, and glutes.",
            instructions:
                "Stand with feet shoulder-width apart. Lower your body by bending your knees and hips until your thighs are parallel to the ground. Push through your heels to return to the starting position.",
        },
        {
            name: "Lunges",
            body_part_id: 2,
            difficulty: "Intermediate",
            exercise_type: "Strength",
            description:
                "A unilateral lower body exercise that targets the quads, hamstrings, and glutes.",
            instructions:
                "Step forward with one leg and lower your hips until both knees are bent at a 90-degree angle. Push back to the starting position and repeat on the other side.",
        },
        {
            name: "Jump Squats",
            body_part_id: 2,
            difficulty: "Advanced",
            exercise_type: "Fat Loss",
            description:
                "A plyometric variation of the squat that incorporates explosive movement to increase power and burn calories.",
            instructions:
                "Perform a regular squat, but as you come up, explode into a jump. Land softly and immediately go into the next squat.",
        },
        {
            name: "Leg Press",
            body_part_id: 2,
            difficulty: "Intermediate",
            exercise_type: "Gain Muscle",
            description:
                "A machine-based exercise that targets the quads, hamstrings, and glutes.",
            instructions:
                "Sit on the leg press machine with feet shoulder-width apart on the platform. Push the platform away by extending your legs, then return slowly to the starting position.",
        },
        {
            name: "Bulgarian Split Squat",
            body_part_id: 2,
            difficulty: "Advanced",
            exercise_type: "Gain Muscle",
            description:
                "A single-leg squat variation that emphasizes the quads and glutes while also improving balance.",
            instructions:
                "Place one foot on a bench behind you. Lower your body by bending the front knee until the thigh is parallel to the ground, then press through the front heel to return to the starting position.",
        },

        // Arms exercises
        {
            name: "Bicep Curls",
            body_part_id: 3,
            difficulty: "Beginner",
            exercise_type: "Strength",
            description: "An isolation exercise targeting the biceps.",
            instructions:
                "Stand with feet shoulder-width apart and hold a dumbbell in each hand. Curl the weights towards your shoulders, then lower them back down.",
        },
        {
            name: "Tricep Dips",
            body_part_id: 3,
            difficulty: "Intermediate",
            exercise_type: "Strength",
            description:
                "An exercise that targets the triceps using body weight.",
            instructions:
                "Place your hands on a bench behind you with fingers facing forward. Lower your body by bending your elbows, then press back up to the starting position.",
        },
        {
            name: "Concentration Curl",
            body_part_id: 3,
            difficulty: "Intermediate",
            exercise_type: "Gain Muscle",
            description:
                "A bicep curl variation performed while seated, isolating the biceps.",
            instructions:
                "Sit on a bench and rest your elbow on the inside of your thigh. Curl the dumbbell towards your shoulder, then lower it back down.",
        },
        {
            name: "Overhead Tricep Extension",
            body_part_id: 3,
            difficulty: "Intermediate",
            exercise_type: "Gain Muscle",
            description:
                "An exercise targeting the triceps by extending the arms overhead.",
            instructions:
                "Hold a dumbbell or barbell overhead with both hands. Lower the weight behind your head by bending your elbows, then extend your arms back to the starting position.",
        },
        {
            name: "Battle Ropes",
            body_part_id: 3,
            difficulty: "Advanced",
            exercise_type: "Fat Loss",
            description:
                "A high-intensity exercise using heavy ropes to improve cardiovascular fitness and burn fat.",
            instructions:
                "Hold the ends of the ropes with both hands and create waves by rapidly moving your arms up and down. Maintain a strong, athletic stance throughout.",
        },
        // Back exercises
        {
            name: "Pull-up",
            body_part_id: 4,
            difficulty: "Intermediate",
            exercise_type: "Strength",
            description:
                "A bodyweight exercise that primarily targets the lats and biceps.",
            instructions:
                "Hang from a bar with palms facing away. Pull your body up until your chin is over the bar, then lower yourself down.",
        },
        {
            name: "Deadlift",
            body_part_id: 4,
            difficulty: "Advanced",
            exercise_type: "Strength",
            description:
                "A compound lift that targets the entire posterior chain, including the back and legs.",
            instructions:
                "Stand with feet shoulder-width apart. Hinge at the hips to grasp the barbell, keeping your back flat. Lift the barbell by extending your hips and knees.",
        },
        {
            name: "Bent-over Row",
            body_part_id: 4,
            difficulty: "Intermediate",
            exercise_type: "Gain Muscle",
            description: "An exercise that targets the upper back and lats.",
            instructions:
                "Hinge at the hips and hold a barbell with a shoulder-width grip. Pull the barbell towards your torso, squeezing your shoulder blades together, then lower it back down.",
        },
        {
            name: "Lat Pulldown",
            body_part_id: 4,
            difficulty: "Beginner",
            exercise_type: "Strength",
            description: "A machine-based exercise that targets the lats.",
            instructions:
                "Sit at a lat pulldown machine and grasp the bar with an overhand grip. Pull the bar down towards your chest, then return to the starting position.",
        },
        {
            name: "Face Pull",
            body_part_id: 4,
            difficulty: "Intermediate",
            exercise_type: "Strength",
            description:
                "An exercise that targets the rear delts and upper back.",
            instructions:
                "Attach a rope to a cable machine. Pull the rope towards your face, leading with your elbows and squeezing your shoulder blades.",
        },

        // Core exercises
        {
            name: "Plank",
            body_part_id: 5,
            difficulty: "Beginner",
            exercise_type: "Strength",
            description: "A static exercise that targets the core muscles.",
            instructions:
                "Hold a plank position on your forearms and toes, keeping your body in a straight line from head to heels.",
        },
        {
            name: "Russian Twist",
            body_part_id: 5,
            difficulty: "Intermediate",
            exercise_type: "Fat Loss",
            description: "A rotational exercise that targets the obliques.",
            instructions:
                "Sit on the floor with knees bent and feet off the ground. Twist your torso to each side, touching the ground beside your hips.",
        },
        {
            name: "Mountain Climbers",
            body_part_id: 5,
            difficulty: "Beginner",
            exercise_type: "Fat Loss",
            description:
                "A high-intensity exercise that engages the entire core.",
            instructions:
                "Start in a plank position. Drive one knee towards your chest, then switch legs in a running motion.",
        },
        {
            name: "Leg Raise",
            body_part_id: 5,
            difficulty: "Intermediate",
            exercise_type: "Strength",
            description: "An exercise that targets the lower abs.",
            instructions:
                "Lie on your back with legs extended. Lift your legs until they are perpendicular to the ground, then lower them back down.",
        },
        {
            name: "Bicycle Crunch",
            body_part_id: 5,
            difficulty: "Intermediate",
            exercise_type: "Fat Loss",
            description:
                "A dynamic exercise that targets the abs and obliques.",
            instructions:
                "Lie on your back with hands behind your head. Bring one knee and the opposite elbow together in a cycling motion.",
        },

        // Shoulders exercises
        {
            name: "Overhead Press",
            body_part_id: 6,
            difficulty: "Intermediate",
            exercise_type: "Strength",
            description:
                "A compound lift that targets the shoulders and triceps.",
            instructions:
                "Stand with feet shoulder-width apart, holding a barbell at shoulder height. Press the barbell overhead until your arms are fully extended, then lower it back down.",
        },
        {
            name: "Lateral Raise",
            body_part_id: 6,
            difficulty: "Beginner",
            exercise_type: "Strength",
            description:
                "An isolation exercise that targets the side deltoids.",
            instructions:
                "Stand with a dumbbell in each hand. Raise the dumbbells out to the sides until your arms are parallel to the ground, then lower them back down.",
        },
        {
            name: "Front Raise",
            body_part_id: 6,
            difficulty: "Beginner",
            exercise_type: "Gain Muscle",
            description: "An isolation exercise that targets the front delts.",
            instructions:
                "Hold a dumbbell in each hand with palms facing your thighs. Lift the weights in front of you until your arms are parallel to the ground, then lower them back down.",
        },
        {
            name: "Arnold Press",
            body_part_id: 6,
            difficulty: "Intermediate",
            exercise_type: "Gain Muscle",
            description:
                "A shoulder press variation that targets the front and side deltoids.",
            instructions:
                "Start with dumbbells at shoulder height with palms facing you. Press the dumbbells overhead while rotating your palms away from you.",
        },
        {
            name: "Shrugs",
            body_part_id: 6,
            difficulty: "Beginner",
            exercise_type: "Strength",
            description:
                "An exercise that targets the upper traps and shoulders.",
            instructions:
                "Hold a dumbbell in each hand at your sides. Shrug your shoulders up towards your ears, then lower them back down.",
        },

        // Glutes exercises
        {
            name: "Hip Thrust",
            body_part_id: 7,
            difficulty: "Intermediate",
            exercise_type: "Gain Muscle",
            description: "An exercise that targets the glutes and hamstrings.",
            instructions:
                "Sit with your upper back against a bench and a barbell across your hips. Drive through your heels to lift your hips, then lower back down.",
        },
        {
            name: "Glute Bridge",
            body_part_id: 7,
            difficulty: "Beginner",
            exercise_type: "Strength",
            description: "A bodyweight exercise that targets the glutes.",
            instructions:
                "Lie on your back with knees bent and feet flat on the ground. Lift your hips by squeezing your glutes, then lower back down.",
        },
        {
            name: "Step-ups",
            body_part_id: 7,
            difficulty: "Intermediate",
            exercise_type: "Strength",
            description: "An exercise that targets the glutes and quads.",
            instructions:
                "Stand in front of a bench or step. Step up with one foot and drive through your heel to lift your body onto the step, then lower back down.",
        },
        {
            name: "Kickback",
            body_part_id: 7,
            difficulty: "Beginner",
            exercise_type: "Strength",
            description: "An isolation exercise that targets the glutes.",
            instructions:
                "Start on all fours. Extend one leg back and up while squeezing the glute, then return to the starting position.",
        },
        {
            name: "Sumo Deadlift",
            body_part_id: 7,
            difficulty: "Advanced",
            exercise_type: "Strength",
            description:
                "A deadlift variation that emphasizes the glutes and inner thighs.",
            instructions:
                "Stand with a wide stance and grip the barbell with both hands inside your legs. Keep your chest up and back flat. Push through your heels to lift the barbell by extending your hips and knees, then lower it back down with control.",
        },
    ]);
}
