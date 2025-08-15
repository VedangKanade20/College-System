import { Router } from "express";
import {
  addSubjectToSemester,
  createSemester,
  getFacultySubjectsForSyllabus,
} from "../controllers/semesterController.js";
import { verifyJWT } from "../middlewares/userMiddleware.js";

const semesterRouter = Router();

semesterRouter.post("/create-semester", createSemester);
semesterRouter.post("/:semesterId/subjects", addSubjectToSemester);
semesterRouter.get(
  "/program/:programId/batch/:batchId/semester/:semName/subjects",
  verifyJWT,
  getFacultySubjectsForSyllabus
);

export default semesterRouter;
