"use client";

import { UserContext } from "@/context/userContext";
import { useContext, useEffect, useState } from "react";

export default function Filters() {
  const { programBatchSemester, fetchAllocatedSubjectToFaculty } =
    useContext(UserContext);
  const [userFilterSelection, setUserFilterSelection] = useState({
    programId: "",
    batchId: "",
    semesterName: "",
  });

  // Set default values when programBatchSemester is loaded
  useEffect(() => {
    if (programBatchSemester) {
      setUserFilterSelection({
        programId: programBatchSemester?.program?.[0]?._id || "",
        batchId: programBatchSemester?.batch?.[0]?.batch_id || "",
        semesterName: programBatchSemester?.semester?.[0]?.name || "",
      });
    }
  }, [programBatchSemester]);

  //   console.log(programBatchSemester);

  // handle change for program & batch
  const handleChange = (key, value) => {
    setUserFilterSelection((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // handle semester click
  const handleSemesterClick = (sem) => {
    setUserFilterSelection((prev) => ({
      ...prev,
      semesterName: sem,
    }));
  };

  //   handle get the allocated subject to the faculty
  const handleAllocatedSubject = () => {
    fetchAllocatedSubjectToFaculty(
      userFilterSelection.programId,
      userFilterSelection.batchId,
      userFilterSelection.semesterName
    );
  };

  //   console.log(userFilterSelection);
  //   console.log(allocatedSubjects);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col gap-11 my-10 bg-white rounded px-12 py-5">
        <div className="flex gap-12 items-end">
          {/* Select program */}
          <div>
            <label className="block">Select Program</label>
            <select
              value={userFilterSelection.programId}
              onChange={(e) => handleChange("programId", e.target.value)}
              className="mt-1 block rounded border-gray border px-5 text-gray py-2 shadow-sm focus:ring-button-background focus:border-button-background text-sm"
            >
              {programBatchSemester?.program?.map((program) => {
                return (
                  <option key={program?._id} value={program?._id}>
                    {program?.name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Academic year */}
          <div>
            <label className="block">Academic Year</label>
            <select
              value={userFilterSelection.batchId}
              onChange={(e) => handleChange("batchId", e.target.value)}
              className="mt-1 block rounded border-gray border px-5 text-gray py-2 shadow-sm focus:ring-button-background focus:border-button-background text-sm"
            >
              {programBatchSemester?.batch?.map((batch) => {
                return (
                  <option key={batch?.batch_id} value={batch?.batch_id}>
                    {batch?.name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Done button */}
          <button
            onClick={handleAllocatedSubject}
            className="bg-button-background px-5 py-2 text-white rounded-md hover:bg-hover-button-background transition-all duration-75 ease-in cursor-pointer"
          >
            Done
          </button>
        </div>

        {/* Semester Buttons */}
        <div className="flex gap-3">
          {programBatchSemester?.semester?.map((sem) => (
            <button
              key={sem?.semester_id}
              onClick={() => handleSemesterClick(sem?.name)}
              className={`px-4 py-1 rounded cursor-pointer shadow border text-sm ${
                userFilterSelection.semesterName === sem?.name
                  ? "bg-button-background text-white"
                  : "border-secondary-button-background bg-secondary-button-background text-gray-700"
              }`}
            >
              Sem {sem?.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
