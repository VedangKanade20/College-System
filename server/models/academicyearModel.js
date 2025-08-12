import mongoose from "mongoose";

const academicYearSchema = new mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true 
    }, // e.g. "2024-2025"
    startYear: { 
        type: Number, 
        required: true 
    }, // e.g. 2024
    endYear: { 
        type: Number, 
        required: true 
    }, // e.g. 2025
  },
  { timestamps: true }
);

const AcademicYear = mongoose.model("AcademicYear", academicYearSchema);
export default AcademicYear;
