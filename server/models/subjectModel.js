import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true 
    },
    code: { 
        type: String, 
        required: true, 
        unique: true 
    },

    // only theory or lab
    type: { 
        type: String, 
        enum: ["theory", "lab"], 
        required: true 
    },

    // optional at creation 
    academicYear: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AcademicYear",
      default: null,
    },
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program",
      default: null,
    },
    semester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Semester",
      default: null,
    },

    // assigned by admin (can be null until admin assigns)
    facultyAssigned: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // child documents (stored separately)
    courseOutcomes: [
      { type: mongoose.Schema.Types.ObjectId, ref: "CourseOutcome" },
    ],
    syllabus: [{ type: mongoose.Schema.Types.ObjectId, ref: "Syllabus" }],
    lessonPlans: [{ type: mongoose.Schema.Types.ObjectId, ref: "LessonPlan" }],
    assessmentPlans: [
      { type: mongoose.Schema.Types.ObjectId, ref: "AssessmentPlan" },
    ],
  },
  { timestamps: true }
);

const Subject = mongoose.model("Subject", subjectSchema);
export default Subject;
