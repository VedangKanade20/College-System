import mongoose from "mongoose";

// Batch Schema
const batchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      match: /^\d{4}-\d{2}$/, // e.g. 2023-25
    },
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program",
      required: true,
    },
    academicYear: {
      type: Object,
      default: function () {
        return {
          year1: ["sem1", "sem2"],
          year2: ["sem3", "sem4"],
        };
      },
    },
  },
  { timestamps: true }
);

const Batch = mongoose.model("Batch", batchSchema);
export default Batch;
