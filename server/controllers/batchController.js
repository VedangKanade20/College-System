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
