export default function Skeleton() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Allocated Subjects Skeleton */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="h-4 bg-gray-200 rounded w-40"></div>
        <div className="flex gap-5">
          <div className="h-9 w-32 bg-gray-200 rounded-md"></div>
          <div className="h-9 w-32 bg-gray-200 rounded-md"></div>
        </div>
      </div>

      {/* Syllabus Skeleton */}
      <div className="bg-white border rounded-lg shadow-sm p-5 space-y-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
          <div className="h-5 w-40 bg-gray-200 rounded"></div>
        </div>
        <div className="space-y-2">
          {Array(5)
            .fill()
            .map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
        </div>
      </div>

      {/* Course Outcomes Skeleton */}
      <div className="bg-white border rounded-lg shadow-sm p-5 space-y-4">
        <div className="h-5 w-52 bg-gray-200 rounded"></div>
        <div className="flex gap-3">
          <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
}
