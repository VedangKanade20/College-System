import Batch from "../models/batchModel.js";

// Create Batch - POST request
export const createBatch = async (req, res) => {
  try {
    const { name, programId } = req.body;

    // Done in client
    // 1. Validate required fields
    // if (!name || !programId) {
    //   return res.status(400).json({ success: false, message: "Name and programId are required" });
    // }

    // 2. Check name format (e.g. "2023-25")
    // const batchNameRegex = /^\d{4}-\d{2}$/;
    // if (!batchNameRegex.test(name)) {
    //   return res.status(400).json({ success: false, message: "Invalid batch name format. Example: 2023-25" });
    // }

    // 3. Check if program exists
    // const programExists = await Program.findById(programId);
    // if (!programExists) {
    //   return res.status(404).json({ success: false, message: "Program not found" });
    // }

    // 4. Create batch
    const batch = await Batch.create({
      name,
      program: programId, // reference to program
    });

    res.status(201).json({
      success: true,
      message: "Batch created successfully",
      batch,
    });
  } catch (error) {
    console.error("Error creating batch:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

// Get all batches - GET request
export const getAllBatches = async (req, res) => {
  try {
    const batches = await Batch.find();

    if (!batches) {
      return res.status(404).json({
        success: false,
        message: "batch does not exist",
      });
    }
    res.status(200).json({
      success: true,
      message: "Batches fetched successfully",
      batches,
    });
  } catch (error) {
    console.error("Error fetching batches:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching batches",
      error: error.message,
    });
  }
};

// Get a batch by id - GET request
export const getBatchDetails = async (req, res) => {
  try {
    const { batchId } = req.params;

    const batch = await Batch.findById(batchId);
    if (!batch) {
      return res.status(404).json({
        success: false,
        message: "Batch not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Batch fetched successfully",
      batch,
    });
  } catch (error) {
    console.error("Error fetching batch:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching batch",
      error: error.message,
    });
  }
};
