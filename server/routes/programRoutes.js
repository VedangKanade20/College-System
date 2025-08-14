import { Router } from "express";
import { createProgram } from "../controllers/programController.js";

const programRouter = Router();

programRouter.post("/create-program", createProgram);

export default programRouter;
