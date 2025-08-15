import { Router } from "express";
import {
  createBatch,
  getAllBatches,
  getBatchDetails,
} from "../controllers/batchController.js";

const batchRouter = Router();

batchRouter.post("/create-batch", createBatch);
batchRouter.get("/get-batches", getAllBatches);
batchRouter.get("/:batchId", getBatchDetails);

export default batchRouter;
