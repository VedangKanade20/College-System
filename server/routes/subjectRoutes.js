import express from "express";
import {
  getFacultySubjects,
  getSubjectDetails,
} from "../controllers/subjectController.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

// get all subjects of logged-in faculty
router.get("/faculty", verifyToken, getFacultySubjects);

// get all details of a single subject by ID
router.get("/:id", verifyToken, getSubjectDetails);

export default router;
