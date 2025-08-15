import { Router } from "express";
import {
  addSubjectToSemester,
  addSyllabusToSubject,
  createSemester,
  getAllSemesters,
  getFacultySubjectsForSyllabus,
  getSemesterDetails,
} from "../controllers/semesterController.js";
import { verifyJWT } from "../middlewares/userMiddleware.js";

const semesterRouter = Router();

semesterRouter.post("/create-semester", createSemester);
semesterRouter.get("/get-all-semesters", getAllSemesters);
semesterRouter.get("/:semesterId", getSemesterDetails);
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
