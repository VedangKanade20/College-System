import mongoose from "mongoose";

const programOutcomeSchema = new mongoose.Schema(
  {
    poCode: {
      type: String,
      required: true,
    }, // PO1, PO2...
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ProgramOutcome = mongoose.model("ProgramOutcome", programOutcomeSchema);
export default ProgramOutcome;
