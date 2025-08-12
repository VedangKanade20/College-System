import mongoose from "mongoose";

const lessonPlanSchema = new mongoose.Schema(
  {
    date: { 
        type: Date, required: true 
    },
    division: { 
        type: String 
    }, // e.g., "A"
    topic: { 
        type: String 
    },
    coveredTopic: { 
        type: Boolean, default: false 
    },
    extradesc: { 
        type: String 
    },
  },
  { timestamps: true }
);

const LessonPlan = mongoose.model("LessonPlan", lessonPlanSchema);
export default LessonPlan;
