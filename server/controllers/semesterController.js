import Semester from "../models/semesterModel.js";

// CREATE the semester
export const createSemester = async (req, res) => {
  try {
    const { semName, batchId, subjects } = req.body;
    const semester = new Semester({
      semName,
      batchId,
      subjects,
    });

    await semester.save();

    res.status(201).json({
      success: true,
      message: "Semester created successfully",
      data: semester,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
