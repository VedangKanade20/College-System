import Program from "../models/programModel.js";
import Batch from "../models/batchModel.js";
import Semester from "../models/semesterModel.js";

/* 

filter ({} here) → what documents you want to find.

{} means "match everything" (i.e., return all documents).

projection → which fields you want to include (or exclude).

{ fieldName: 1 } means include this field.

{ fieldName: 0 } means exclude this field.

*/

export const getProgramBatchSemester = async (req, res) => {
  try {
    // Fetch all three (Program, Batch, Semester) parallel
    const [programs, batches, semesters] = await Promise.all([
      Program.find({}, { name: 1, _id: 1, code: 1 }),
      Batch.find({}, { name: 1, _id: 1 }),
      Semester.find({}, { _id: 1, semName: 1 }),
    ]);

    // response
    res.json({
      program: programs.map((p) => ({
        name: p.name,
        _id: p._id,
        programCode: p.code,
      })),
      batch: batches.map((b) => ({
        name: b.name,
        batch_id: b._id,
      })),
      semester: semesters.map((s) => ({
        name: s.semName,
        semester_id: s._id,
      })),
    });
  } catch (error) {
    console.error("Error fetching program/batch/semester:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};
