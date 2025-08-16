"use client";

import { UserContext } from "@/context/userContext";
import { Suspense, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import CourseOutComeTable from "./CourseOutcomeTable";
import SyllabusDetailsTable from "./SyllabusDetailsTable";
import Skeleton from "./Skeleton";

export default function SubjectAllocation() {
  const { allocatedSubjects } = useContext(UserContext);

  // Track the selected subject
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Toast if API fails
  useEffect(() => {
    if (
      allocatedSubjects &&
      !allocatedSubjects.success &&
      allocatedSubjects.message
    ) {
      toast.info(allocatedSubjects?.message);
    }
  }, [allocatedSubjects]);

  // Default to first subject on load
  useEffect(() => {
    if (allocatedSubjects?.subjects?.length > 0) {
      setSelectedSubject(allocatedSubjects.subjects[0]);
    }
  }, [allocatedSubjects]);

  if (
    allocatedSubjects &&
    !allocatedSubjects.success &&
    allocatedSubjects.message
  )
    return;

  return (
    <>
      {/* <Suspense fallback={<Skeleton />}>
            </Suspense> */}
      {/* Allocated Subjects */}
      <div className="flex flex-col gap-4 mt-4">
        <p className="font-medium">Allocated Subject</p>
        <div className="flex gap-5">
          {allocatedSubjects?.subjects?.map((subj) => (
            <button
              key={subj?._id}
              onClick={() => setSelectedSubject(subj)}
              className={`px-4 py-2 cursor-pointer rounded-md font-medium border ${
                selectedSubject?._id === subj?._id
                  ? "bg-indigo-100 text-indigo-700 border-indigo-600"
                  : "text-gray-700 bg-secondary-button-background border-secondary-button-background"
              }`}
            >
              {subj?.name} ({subj?.subjectCode})
            </button>
          ))}
        </div>
      </div>

      {selectedSubject && (
        <>
          {/* Course Outcomes Table */}
          <CourseOutComeTable selectedSubject={selectedSubject} />

          {/* Syllabus Details Table */}
          <SyllabusDetailsTable selectedSubject={selectedSubject} />
        </>
      )}
    </>
  );
}
