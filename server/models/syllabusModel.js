import mongoose from "mongoose";

const syllabusSchema = new mongoose.Schema(
  {
    units: [
      {
        unitNumber: Number,
        title: String,
        topics: String,
      },
    ],
  },
  { timestamps: true }
);

const Syllabus = mongoose.model("Syllabus", syllabusSchema);
export default Syllabus;
