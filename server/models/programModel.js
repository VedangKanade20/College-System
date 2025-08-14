import mongoose from "mongoose";

const programSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: Number,
      required: true,
      unique: true,
    },
    PO: {
      type: [
        {
          name: {
            type: String,
            required: true,
          },
          description: {
            type: String,
            required: true, // note: "required", not "require"
          },
        },
      ],
      required: true,
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "PO array cannot be empty",
      },
    },
  },
  { timestamps: true }
);

const Program = mongoose.model("Program", programSchema);
export default Program;
