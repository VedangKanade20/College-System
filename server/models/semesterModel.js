import mongoose from "mongoose";

const semesterSchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
    }, // e.g. 1, 2, 3...
    name: {
      type: String,
    }, // e.g. "Odd Semester"
  },
  { timestamps: true }
);

const Semester = mongoose.model("Semester", semesterSchema);
export default Semester;
