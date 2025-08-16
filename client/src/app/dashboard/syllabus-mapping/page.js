"use client";

import { useState } from "react";
import SubjectAllocation from "./_components/SubjectAllocation";
import Skeleton from "./_components/Skeleton";

export default function SyllabusMappingPage() {
  const [semester, setSemester] = useState("Sem I");

  return (
    <section className="space-y-6">
      {/* Heading */}
      <div className="flex flex-col items-start justify-center gap-2 mb-5">
        <h1 className="text-xl font-semibold text-primary">
          Subject & Syllabus Mapping
        </h1>
        <p className="text-sm text-gray">
          Manage and view subject-wise syllabus and course outcomes.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-11 my-10 bg-white rounded px-12 py-5">
        <div className="flex gap-12 items-end">
          {/* Select program */}
          <div>
            <label className="block">Select Program</label>
            <select className="mt-1 block rounded border-gray border px-5 text-gray py-2 shadow-sm focus:ring-button-background focus:border-button-background text-sm">
              <option>MCA</option>
            </select>
          </div>

          {/* Academic year */}
          <div>
            <label className="block">Academic Year</label>
            <select className="mt-1 block rounded border-gray border px-5 text-gray py-2 shadow-sm focus:ring-button-background focus:border-button-background text-sm">
              <option>2023-25</option>
              <option>2024-26</option>
              <option>2025-27</option>
            </select>
          </div>

          {/* Done button */}
          <button className="bg-button-background px-5 py-2 text-white rounded-md hover:bg-hover-button-background transition-all duration-75 ease-in cursor-pointer">
            Done
          </button>
        </div>

        {/* Semester Buttons */}
        <div className="flex gap-3">
          {["Sem I", "Sem II", "Sem III", "Sem IV"].map((sem) => (
            <button
              key={sem}
              onClick={() => setSemester(sem)}
              className={`px-4 py-1 rounded cursor-pointer shadow border text-sm ${
                semester === sem
                  ? "bg-button-background text-white"
                  : "border-secondary-button-background bg-secondary-button-background text-gray-700"
              }`}
            >
              {sem}
            </button>
          ))}
        </div>
      </div>

      <SubjectAllocation />
      {/* <Skeleton /> */}
    </section>
  );
}
