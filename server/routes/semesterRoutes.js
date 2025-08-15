import { Router } from "express";
import { createSemester } from "../controllers/semesterController.js";

const semesterRouter = Router();

semesterRouter.post("/create-semester", createSemester);

export default semesterRouter;
