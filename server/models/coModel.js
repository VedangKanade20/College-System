import mongoose from "mongoose";

const courseOutcomeSchema = new mongoose.Schema(
  {
    coCode: {
      type: String,
      required: true
    }, // e.g., CO1
    description: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const CourseOutcome = mongoose.model("CourseOutcome", courseOutcomeSchema);
export default CourseOutcome;
