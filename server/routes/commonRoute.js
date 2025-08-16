import express from "express";
import { getProgramBatchSemester } from "../controllers/commonController.js";

const commonRouter = express.Router();

commonRouter.get("/get-program-batch-semester", getProgramBatchSemester);

export default commonRouter;
