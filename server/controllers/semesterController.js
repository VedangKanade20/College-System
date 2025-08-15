import Batch from "../models/batchModel.js";
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

//get all semesters
export const getAllSemesters = async (req, res) => {
  try {
    const semesters = await Semester.find();
    res.status(200).json({
      success: true,
      data: semesters,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//semester details
export const getSemesterDetails = async (req, res) => {
  try {
    const { semesterId } = req.params;
    const semester = await Semester.findById(semesterId);
    if (!semester) {
      return res.status(404).json({
        success: false,
        message: "Semester not found",
      });
    }
    res.status(200).json({
      success: true,
      data: semester,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//middleware to be added
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

//dumyy data

/* 
{
      "name": "Digital Marketing Theory E-1",
      "subjectCode": 12543, 
      "facultyId": "689f378b8f860c2c68fa5f37",
    "syllabus" : [
    {
      "syllabus" :{
        "modules": [
          {
          "moduleNo": 1,
          "detailcontents": "Intro",
          "hours": 5,
          "refNo": "1,3,4"
          },
          {
          "moduleNo": 2,
          "detailcontents": "History",
          "hours": 7,
          "refNo": "1,2,4"
          }
        ]
      }
    }
  ]
}
*/

// Getting the faculty Subject for syllabus

export const getFacultySubjectsForSyllabus = async (req, res) => {
  try {
    const { programId, batchId, semName } = req.params;
    const facultyId = req.user._id; // Assuming you have authentication middleware

    // Validate batch belongs to program
    const batch = await Batch.findOne({ _id: batchId, program: programId });
    if (!batch) {
      return res
        .status(404)
        .json({ success: false, message: "Batch not found for this program" });
    }

    // Find semester with given semName and batch
    const semester = await Semester.findOne(
      { semName: Number(semName), batchId, "subjects.facultyId": facultyId },
      { "subjects.$": 1, semName: 1 }
    );

    if (!semester) {
      return res.status(404).json({
        success: false,
        message: "No subjects found for this faculty in the given semester",
      });
    }

    res.json({
      success: true,
      semName: semester.semName,
      subjects: semester.subjects,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Add subject to faculty for semester
export const addSyllabusToSubject = async (req, res) => {
  try {
    const { semesterId, subjectCode } = req.params;
    const facultyId = req.user._id; // from verifyJWT middleware
    const { modules, CO, lessonPlan, assessmentPlan } = req.body;

    // Find the semester and check if the subject is allocated to this faculty
    const semester = await Semester.findOne({
      _id: semesterId,
      "subjects.subjectCode": subjectCode,
      "subjects.facultyId": facultyId,
    });

    if (!semester) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to add syllabus for this subject",
      });
    }

    // Update the syllabus for that subject
    const subjectIndex = semester.subjects.findIndex(
      (sub) =>
        sub.subjectCode === Number(subjectCode) &&
        sub.facultyId.toString() === facultyId.toString()
    );

    semester.subjects[subjectIndex].syllabus = {
      modules: modules || [],
      CO: CO || [],
      lessonPlan: lessonPlan || [],
      assessmentPlan: assessmentPlan || {},
    };

    await semester.save();

    res.status(200).json({
      success: true,
      message: "Syllabus added/updated successfully",
      subject: semester.subjects[subjectIndex],
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
