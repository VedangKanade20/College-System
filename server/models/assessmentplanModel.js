import mongoose from "mongoose";

const assessmentPlanSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    details: {
      type: String,
    }, // notes
    excelData: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const AssessmentPlan = mongoose.model("AssessmentPlan", assessmentPlanSchema);
export default AssessmentPlan;
