import SubjectAllocation from "./_components/SubjectAllocation";
import Skeleton from "./_components/Skeleton";
import Filters from "./_components/Filters";
import { Suspense } from "react";

export default function SyllabusMappingPage() {
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

      <Filters />

      <SubjectAllocation />
      {/* <Skeleton /> */}
    </section>
  );
}
