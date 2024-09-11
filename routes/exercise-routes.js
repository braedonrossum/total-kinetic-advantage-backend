import express from "express";
import { getAllExercises, getExerciseById } from "../controllers/exercise-controller.js";

const router = express.Router();

router.route("/").get(getAllExercises);
router.route("/:id").get(getExerciseById);


export default router;