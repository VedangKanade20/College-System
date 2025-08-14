import Program from "../models/programModel.js";

// function to create the program
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
