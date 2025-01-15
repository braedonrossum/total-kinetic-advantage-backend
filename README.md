# Total Kinetic Advantage - Backend

The **Total Kinetic Advantage** backend powers the application's API, providing the logic and data necessary for generating personalized fitness programs and managing the exercise library.

## Features

- **Dynamic Program Generation**: Generate tailored fitness programs based on user input (e.g., fitness level, frequency, and goals).
- **Exercise Library**: Access a curated database of exercises categorized by body part, difficulty, and type.
- **RESTful API**: Provides endpoints for exercises, programs, and user interactions.
- **Database Management**: MySQL database for efficient data storage and querying.
- **Scalable Architecture**: Built with modular and reusable components.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/braedonrossum/total-kinetic-advantage-backend.git
   cd total-kinetic-advantage-backend` 

2.  **Install Dependencies**:
    
    `npm install` 
    
3.  **Set Up Environment Variables**: Create a `.env` file in the root directory with the following:
    
    ```env
    PORT=5050
    DB_HOST=your-database-host
    DB_NAME=your-database-name
    DB_USER=your-database-user
    DB_PASSWORD=your-database-password`
    
4.  **Run Migrations**: Use Knex to set up the database schema:
      
    `npx knex migrate:latest` 
    
5.  **Seed the Database** (Optional): Populate the database with initial data:
    
    `npx knex seed:run` 
    
6.  **Start the Server**:
    
    `npm start` 
    
    The API will be available at `http://localhost:5050`.
    

## API Endpoints

### **Exercises**

-   `GET /api/exercises`: Retrieve all exercises.
-   `GET /api/exercises/:id`: Retrieve details for a specific exercise.

### **Programs**

-   `POST /api/programs`: Generate a fitness program based on user input.
    -   **Request Body**:
       
 ```json
        `{
          "fitnessLevel": "beginner",
          "frequency": 3,
          "goal": "strength"
        }` 
```

### **Body Parts**

-   `GET /api/body`: Retrieve a list of body parts and their associated exercises.

## Project Structure

`src/
├── controllers/        # Handles request logic
├── routes/             # Defines API endpoints
├── models/             # Database interaction logic
├── migrations/         # Database schema setup
├── seeds/              # Initial data population
└── app.js              # Main server file` 

## Technologies Used

-   **Node.js**: JavaScript runtime for building the server.
-   **Express**: Web framework for creating RESTful APIs.
-   **Knex.js**: SQL query builder for database interactions.
-   **MySQL**: Relational database for storing exercise and program data.
-   **dotenv**: Environment variable management.

## Scripts

-   `npm start`: Start the server.
-   `npm run dev`: Start the server in development mode with live reload.
-   `npx knex migrate:latest`: Run database migrations.
-   `npx knex seed:run`: Seed the database with initial data.

----------

For the frontend application, visit the [frontend repository](https://github.com/braedonrossum/total-kinetic-advantage-frontend).
