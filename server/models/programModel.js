import mongoose from "mongoose";

const programSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }, // e.g. "MCA/mms"
    code: {
      type: String,
      required: true,
      unique: true,
    }, // e.g. "anyy"
  },
  { timestamps: true }
);

const Program = mongoose.model("Program", programSchema);
export default Program;
