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

// Add a new subject to a semester
export const addSubjectToSemester = async (req, res) => {
  try {
    const { semesterId } = req.params;
    const { name, subjectCode, facultyId, syllabus } = req.body;

    // Basic validation
    if (!name || !subjectCode || !facultyId) {
      return res.status(400).json({
        success: false,
        message: "name, subjectCode, and facultyId are required",
      });
    }

    // Find semester
    const semester = await Semester.findById(semesterId);
    if (!semester) {
      return res
        .status(404)
        .json({ success: false, message: "Semester not found" });
    }

    // Check for duplicate subjectCode in same semester
    const exists = semester.subjects.some(
      (sub) => sub.subjectCode === subjectCode
    );
    if (exists) {
      return res.status(400).json({
        success: false,
        message: `Subject code ${subjectCode} already exists in this semester`,
      });
    }

    // Add new subject
    semester.subjects.push({
      name,
      subjectCode,
      facultyId,
      syllabus: syllabus || {
        modules: [],
        CO: [],
        lessonPlan: [],
        assessmentPlan: {},
      },
    });

    await semester.save();

    res.status(200).json({
      success: true,
      message: "Subject added successfully",
      data: semester,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
