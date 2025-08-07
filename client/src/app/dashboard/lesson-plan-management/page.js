"use client";

import { useState } from "react";
import {
  IconEdit,
  IconTrash,
  IconUpload,
  IconFileTypePdf,
  IconPlus,
  IconCheck,
} from "@tabler/icons-react";

export default function LessonPlan() {
  const [lessonPlans, setLessonPlans] = useState([]);

  //   Method to handle toggle of edit
  const toggleEdit = (index) => {
    setLessonPlans((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, editing: !item.editing } : item
      )
    );
  };

  const handleChange = (index, field, value) => {
    setLessonPlans((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  //   method to delete the lessonPlan
  const deleteLesson = (index) => {
    setLessonPlans((prev) => prev.filter((_, i) => i !== index));
  };

  //   Method to add the new lessonPlan
  const addLesson = () => {
    setLessonPlans((prev) => [
      ...prev,
      {
        date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
        topic: "",
        division: "A",
        covered: false,
        editing: true,
      },
    ]);
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start gap-2 mb-5">
          <h1 className="text-xl font-semibold text-primary">Lesson Plan</h1>
          <p className="text-gray text-sm">
            Track, manage, and update your lecture plans seamlessly.
          </p>
        </div>
        <div className="flex gap-6">
          <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 text-sm">
            <IconUpload size={18} />
            Import Lesson Plan (PDF)
          </button>
          <button className="flex items-center gap-2 bg-button-background text-white px-4 py-2 rounded hover:bg-hover-button-background text-sm">
            <IconFileTypePdf size={18} />
            Export as PDF
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-6">
        {lessonPlans.map((lesson, index) => (
          <div
            key={index}
            className="bg-white shadow border rounded-lg p-4 space-y-4 relative"
          >
            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label className="text-sm text-gray-600">Date</label>
                <input
                  type="date"
                  value={lesson.date}
                  onChange={(e) => handleChange(index, "date", e.target.value)}
                  className="border rounded px-3 py-2 mt-1"
                  readOnly={!lesson.editing}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-sm text-gray-600">Division</label>
                <select
                  value={lesson.division}
                  onChange={(e) =>
                    handleChange(index, "division", e.target.value)
                  }
                  className="border rounded px-3 py-2 mt-1"
                  disabled={!lesson.editing}
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600">Topic</label>
              <input
                type="text"
                value={lesson.topic}
                onChange={(e) => handleChange(index, "topic", e.target.value)}
                className="border rounded px-3 py-2 mt-1"
                readOnly={!lesson.editing}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={lesson.covered}
                onChange={(e) =>
                  handleChange(index, "covered", e.target.checked)
                }
                disabled={!lesson.editing}
              />
              <label className="text-sm">Covered Topic</label>
            </div>

            <div className="absolute top-4 right-4 flex gap-3">
              <button onClick={() => toggleEdit(index)}>
                {lesson.editing ? (
                  <IconCheck
                    className="text-green-600 hover:text-green-800"
                    size={18}
                  />
                ) : (
                  <IconEdit
                    className="text-blue-500 hover:text-blue-700"
                    size={18}
                  />
                )}
              </button>
              <button onClick={() => deleteLesson(index)}>
                <IconTrash
                  className="text-red-400 hover:text-red-600"
                  size={18}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <button
        onClick={addLesson}
        className="fixed bottom-6 right-6 bg-button-background text-white p-4 rounded-full shadow hover:bg-hover-button-background"
      >
        <IconPlus size={24} />
      </button>
    </section>
  );
}
