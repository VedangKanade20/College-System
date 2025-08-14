import { Router } from "express";
import { createBatch } from "../controllers/batchController.js";

const batchRouter = Router();

batchRouter.post("/create-batch", createBatch);

export default batchRouter;
