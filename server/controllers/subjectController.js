import Subject from "../models/subjectModel.js";
import Syllabus from "../models/syllabusModel.js";

// (Admin Only)
export const createSubject = async (req, res) => {
  try {
    const {
      name,
      code,
      type,
      facultyAssigned,
      academicYear,
      program,
      semester,
    } = req.body;

    const syllabusDoc = await Syllabus.create({ units: [] });

    const subject = await Subject.create({
      name,
      code,
      type,
      academicYear,
      program,
      semester,
      facultyAssigned,
      syllabus: [syllabusDoc._id],
      courseOutcomes: [],
      lessonPlans: [],
      assessmentPlans: [],
    });

    res.status(201).json({ message: "Subject created", subject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET /faculty/subjects
const getAssignedSubjects = async (req, res) => {
  try {
    const facultyId = req.user._id; // set by auth middleware

    const subjects = await Subject.find({ assignedFaculty: facultyId })
      .select("name code semester program") // minimal fields
      .lean();

    res.json({ success: true, subjects });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET /subject/:id/syllabus
const getSubjectSyllabus = async (req, res) => {
  try {
    const { id } = req.params;

    const subject = await Subject.findById(id)
      .select("name syllabus") // syllabus is stored as array/object in Subject schema
      .lean();

    if (!subject) {
      return res
        .status(404)
        .json({ success: false, message: "Subject not found" });
    }

    res.json({ success: true, syllabus: subject.syllabus });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
