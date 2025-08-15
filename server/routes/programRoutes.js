import { Router } from "express";
import {
  createProgram,
  getPrograms,
  programDetail,
} from "../controllers/programController.js";

const programRouter = Router();

programRouter.post("/create-program", createProgram);
programRouter.get("/get-programs", getPrograms);
programRouter.get("/:programId", programDetail);

export default programRouter;
