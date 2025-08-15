import mongoose from "mongoose";
/* 
{
  "semName": 1,
  "batchId": "689f4166a26713088dc5d07b",
  "subjects":[
    {
      "name": "Advanced DSA Lab",
      "subjectCode": 123456,
      "facultyId": "689baba00c43fb617066ba90",
      "syllabus" :{
        "modules": [
          {
          "moduleNo": 1,
          "detailcontents": "Trees",
          "hours": 5,
          "refNo": "1,3,4"
          },
          {
          "moduleNo": 2,
          "detailcontents": "Dynamic Programing",
          "hours": 7,
          "refNo": "1,2,4"
          }
        ],
        
        "CO":[
          {
            "name": "CO1",
            "description": "blah blah",
            "bloomsLevel": "Applying"
          },
          {
            "name": "CO2",
            "description": "blah blah",
            "bloomsLevel": "Understanding"
          },
          {
            "name": "CO3",
            "description": "blah blah",
            "bloomsLevel": "Evaluating"
          }
        ],
        "lessonPlan" :[
          {
            "date": "24 august",
            "div": "A",
            "topicTobeCov": "Do this",
            "coveredTopic": "Nahi kiya ja",
            "remark": "i was not well"
          },
          {
            "date": "24 august",
            "div": "A",
            "topicTobeCov": "Do this",
            "coveredTopic": "Nahi kiya ja",
            "remark": "i was not well"
          }
        ],

        "assessmentPlan":{}
        
      }
    }
  ]
}
*/
const semesterSchema = new mongoose.Schema(
  {
    semName: {
      type: Number,
      required: true,
    },
    batchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Batch",
      required: true,
    },
    subjects: {
      type: [
        {
          name: { type: String, required: true },
          subjectCode: { type: Number, required: true, unique: true },
          facultyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Faculty",
            required: true,
          },
          syllabus: {
            modules: [
              {
                moduleNo: Number,
                detailcontents: String,
                hours: Number,
                refNo: String,
              },
            ],
            CO: [
              {
                name: String,
                description: String,
                bloomsLevel: String,
              },
            ],
            lessonPlan: [
              {
                date: String,
                div: { type: String }, // Removed enum to match your example
                topicTobeCov: String,
                coveredTopic: String,
                remark: String,
              },
            ],
            assessmentPlan: {
              type: Object,
              default: {},
            },
          },
        },
      ],
      validate: {
        validator: (v) => v.length > 0,
        message: "Subjects array cannot be empty",
      },
      required: true,
    },
  },
  { timestamps: true }
);

const Semester = mongoose.model("Semester", semesterSchema);
export default Semester;
