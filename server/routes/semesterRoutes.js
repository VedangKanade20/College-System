import { Router } from "express";
import {
  addSubjectToSemester,
  createSemester,
} from "../controllers/semesterController.js";

const semesterRouter = Router();

semesterRouter.post("/create-semester", createSemester);
semesterRouter.post("/:semesterId/subjects", addSubjectToSemester);

export default semesterRouter;
