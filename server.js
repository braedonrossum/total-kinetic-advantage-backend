import express from "express";
import cors from "cors";
import body_router from "./routes/body-routes.js";
import exercise_router from "./routes/exercise-routes.js";
import generate_router from "./routes/generate-routes.js"
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8081;
const CORS_ORIGIN = process.env.CORS_ORIGIN;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.route("/").get((_req, res) => {
    return res.json({ message: "This is the root route" });
});

app.use("/api/body", body_router);
app.use("/api/exercises", exercise_router);
app.use("/api/generate", generate_router);



app.listen(PORT, () => {
    console.log(`App running on PORT: http://localhost:${PORT}/`);
});
