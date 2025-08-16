import Program from "../models/programModel.js";

// function to create the program - POST request
export const createProgram = async (req, res) => {
  try {
    const { name, code, PO } = req.body;

    const program = await Program.create({
      name,
      code,
      PO,
    });

    await program.save();

    res.status(201).json({
      success: true,
      message: "Program created successfully",
      program,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating program",
      error: error.message,
    });
  }
};

//Get all Programs - GET request
export const getPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json({
      success: true,
      message: "Programs fetched successfully",
      programs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching programs",
      error: error.message,
    });
  }
};

// Get a Program by id - GET request
export const programDetail = async (req, res) => {
  try {
    const { programId } = req.params;

    const program = await Program.findById(programId);
    if (!program) {
      return res.status(404).json({
        success: false,
        message: "Program not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Program fetched successfully",
      program,
    });
  } catch (error) {
    console.error("Error fetching program:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching program",
      error: error.message,
    });
  }
};
