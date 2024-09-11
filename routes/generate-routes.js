import express from "express";
import { generateProgram } from "../controllers/generate-controller.js";

const router = express.Router();

router.route("/").post(generateProgram);

export default router;
