import { Router } from "express";
import {
  addSubjectToSemester,
  addSyllabusToSubject,
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

semesterRouter.post(
  "/:semesterId/subjects/:subjectCode/syllabus",
  verifyJWT,
  addSyllabusToSubject
);

export default semesterRouter;
