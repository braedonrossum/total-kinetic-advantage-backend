import express from "express";
import {
    getAllBody,
    getExercisesByBodyId,
} from "../controllers/body-controller.js";

const router = express.Router();

router.route("/").get(getAllBody);
router.route("/:id/exercises").get(getExercisesByBodyId);

export default router;
