"use client";

import { IconBookFilled, IconTrash, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function SubjectAllocation() {
  const [subject, setSubject] = useState("ADVANCED JAVA");
  const allocatedSubjects = ["ADVANCED JAVA", "DATA STRUCTURE"];

  // State for Course Outcomes
  const [courseOutcomes, setCourseOutcomes] = useState([
    {
      id: "CO1",
      outcome: "Explain the Java platform, JVM, and basic syntax.",
      bloom: "Understanding",
    },
    {
      id: "CO2",
      outcome: "Apply OOP principles to design and implement Java classes.",
      bloom: "Applying",
    },
    {
      id: "CO3",
      outcome:
        "Create Java applications using classes, interfaces, and collections.",
      bloom: "Creating",
    },
    {
      id: "CO4",
      outcome: "Evaluate code quality and debug Java programs using tooling.",
      bloom: "Evaluating",
    },
  ]);

  // State for Syllabus Details
  const [syllabusDetails, setSyllabusDetails] = useState([
    {
      mod: "1.1",
      content:
        "Java ecosystem (JDK, JRE), IDE setup, JVM & JIT, first Java program walkthrough, CLI builds.",
      hours: "4",
      co: "CO1",
      ref: "R1",
    },
    {
      mod: "1.2",
      content:
        "Core syntax: variables, primitives/wrappers, operators, control flow, arrays; Java coding conventions and tooling.",
      hours: "3",
      co: "CO2",
      ref: "R2",
    },
    {
      mod: "1.3",
      content:
        "OOP in Java: classes/objects, methods, constructors, encapsulation, inheritance, polymorphism, interfaces, packages.",
      hours: "5",
      co: "CO3",
      ref: "R3",
    },
  ]);

  // Add new Course Outcome row
  const addCourseOutcome = () => {
    setCourseOutcomes([
      ...courseOutcomes,
      { id: `CO${courseOutcomes.length + 1}`, outcome: "", bloom: "" },
    ]);
  };

  // Delete Course Outcome row
  const deleteCourseOutcome = (index) => {
    const updated = [...courseOutcomes];
    updated.splice(index, 1);
    setCourseOutcomes(updated);
  };

  // Handle Course Outcome edit
  const updateCourseOutcome = (index, field, value) => {
    const updated = [...courseOutcomes];
    updated[index][field] = value;
    setCourseOutcomes(updated);
  };

  // Add new Syllabus row
  const addSyllabus = () => {
    setSyllabusDetails([
      ...syllabusDetails,
      {
        mod: `${syllabusDetails.length + 1}.x`,
        content: "",
        hours: "",
        co: "",
        ref: "",
      },
    ]);
  };

  // Delete Syllabus row
  const deleteSyllabus = (index) => {
    const updated = [...syllabusDetails];
    updated.splice(index, 1);
    setSyllabusDetails(updated);
  };

  // Handle Syllabus edit
  const updateSyllabus = (index, field, value) => {
    const updated = [...syllabusDetails];
    updated[index][field] = value;
    setSyllabusDetails(updated);
  };

  return (
    <>
      {/* Allocated Subjects */}
      <div className="flex flex-col gap-4 mt-4">
        <p className="font-medium">Allocated Subject</p>
        <div className="flex gap-5">
          {allocatedSubjects.map((subj) => (
            <button
              key={subj}
              onClick={() => setSubject(subj)}
              className={`px-4 py-2 cursor-pointer rounded-md font-medium border ${
                subject === subj
                  ? "bg-indigo-100 text-indigo-700 border-indigo-600"
                  : "text-gray-700 bg-secondary-button-background border-secondary-button-background"
              }`}
            >
              {subj}
            </button>
          ))}
        </div>
      </div>

      {/* Course Outcomes Table */}
      <div className="bg-white border rounded-lg shadow-sm p-5 mt-6">
        <h2 className="text-lg font-medium text-primary flex items-center gap-1 mb-3">
          <IconBookFilled />
          <span>Course Outcomes</span>
        </h2>

        <table className="w-full border-collapse border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2 text-left">Sr. No.</th>
              <th className="border px-3 py-2 text-left">Course Outcome</th>
              <th className="border px-3 py-2 text-left">Bloom's Level</th>
              <th className="border px-3 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {courseOutcomes.map((co, index) => (
              <tr key={index}>
                {/* Sr. No. editable */}
                <td className="border px-3 py-2 w-20">
                  <input
                    type="text"
                    value={co.id}
                    onChange={(e) =>
                      updateCourseOutcome(index, "id", e.target.value)
                    }
                    className="w-full border rounded uppercase px-2 py-1 text-center"
                  />
                </td>

                {/* Course Outcome */}
                <td className="border px-3 py-2">
                  <input
                    type="text"
                    value={co.outcome}
                    onChange={(e) =>
                      updateCourseOutcome(index, "outcome", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </td>

                {/* Bloom's Level */}
                <td className="border px-3 py-2">
                  <input
                    type="text"
                    value={co.bloom}
                    onChange={(e) =>
                      updateCourseOutcome(index, "bloom", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </td>

                {/* Action */}
                <td className="border px-3 py-2 text-center w-12">
                  <button
                    onClick={() => deleteCourseOutcome(index)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    <IconTrash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add row to the Course outcome */}
        <button
          onClick={addCourseOutcome}
          className="mt-3 flex items-center gap-1 cursor-pointer text-button-background"
        >
          <IconPlus size={18} /> Add Course Outcome
        </button>
      </div>

      {/* Syllabus Details Table */}
      <div className="bg-white border rounded-lg shadow-sm p-5 mt-6">
        <h2 className="text-lg font-medium text-primary flex items-center gap-1 mb-3">
          <IconBookFilled />
          <span>Syllabus Details</span>
        </h2>

        <table className="w-full border-collapse border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2 text-left">Mod No.</th>
              <th className="border px-3 py-2 text-left">Detailed Contents</th>
              <th className="border px-3 py-2 text-left">Hours</th>
              <th className="border px-3 py-2 text-left">CO No.</th>
              <th className="border px-3 py-2 text-left">Ref No.</th>
              <th className="border px-3 py-2 text-center w-12">Action</th>
            </tr>
          </thead>
          <tbody>
            {syllabusDetails.map((syllabus, index) => (
              <tr key={index}>
                {/* Module Number */}
                <td className="border px-3 py-2 w-20">
                  <input
                    type="text"
                    value={syllabus.mod}
                    onChange={(e) =>
                      updateSyllabus(index, "mod", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1"
                  />
                </td>

                {/* Detailed Contents */}
                <td className="border px-3 py-2">
                  <textarea
                    rows={3}
                    value={syllabus.content}
                    onChange={(e) =>
                      updateSyllabus(index, "content", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1 resize-y"
                  />
                </td>

                {/* Hours */}
                <td className="border px-3 py-2 w-16">
                  <input
                    type="number"
                    value={syllabus.hours}
                    onChange={(e) =>
                      updateSyllabus(index, "hours", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1 text-center"
                  />
                </td>

                {/* CO No. */}
                <td className="border px-3 py-2 w-20">
                  <input
                    type="text"
                    value={syllabus.co}
                    onChange={(e) =>
                      updateSyllabus(index, "co", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1 text-center"
                  />
                </td>

                {/* Ref No. */}
                <td className="border px-3 py-2 w-20">
                  <input
                    type="text"
                    value={syllabus.ref}
                    onChange={(e) =>
                      updateSyllabus(index, "ref", e.target.value)
                    }
                    className="w-full border rounded px-2 py-1 text-center"
                  />
                </td>
                <td className="border px-2 py-2 w-12 text-center">
                  <button
                    onClick={() => deleteSyllabus(index)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    <IconTrash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={addSyllabus}
          className="mt-3 flex items-center gap-1 cursor-pointer text-button-background"
        >
          <IconPlus size={18} /> Add Syllabus Row
        </button>
      </div>

      {/* Save changes */}
      <div className="flex justify-end">
        <button className="bg-button-background px-5 py-2 text-white rounded-md hover:bg-hover-button-background transition-all duration-75 ease-in cursor-pointer">
          Save
        </button>
      </div>
    </>
  );
}
