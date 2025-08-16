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

      {/* Course Outcomes Table Skeleton */}
      <div className="bg-white border rounded-lg shadow-sm p-5 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
          <div className="h-5 w-40 bg-gray-200 rounded"></div>
        </div>

        <table className="w-full border-collapse border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2 text-left">Sr. No.</th>
              <th className="border px-3 py-2 text-left">Course Outcome</th>
              <th className="border px-3 py-2 text-left">Bloom's Level</th>
              <th className="border px-3 py-2 text-center w-12">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array(2)
              .fill()
              .map((_, i) => (
                <tr key={i}>
                  <td className="border px-3 py-2">
                    <div className="h-4 w-12 bg-gray-200 rounded mx-auto"></div>
                  </td>
                  <td className="border px-3 py-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                  </td>
                  <td className="border px-3 py-2">
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </td>
                  <td className="border px-3 py-2 text-center">
                    <div className="h-4 w-4 bg-gray-200 rounded mx-auto"></div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Syllabus Details Table Skeleton */}
      <div className="bg-white border rounded-lg shadow-sm p-5 mt-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
          <div className="h-5 w-44 bg-gray-200 rounded"></div>
        </div>

        <table className="w-full border-collapse border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">Mod No.</th>
              <th className="border px-3 py-2">Detailed Contents</th>
              <th className="border px-3 py-2">Hours</th>
              <th className="border px-3 py-2">CO No.</th>
              <th className="border px-3 py-2">Ref No.</th>
              <th className="border px-3 py-2 w-12 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array(2)
              .fill()
              .map((_, i) => (
                <tr key={i}>
                  <td className="border px-3 py-2">
                    <div className="h-4 w-12 bg-gray-200 rounded mx-auto"></div>
                  </td>
                  <td className="border px-3 py-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded mt-2"></div>
                  </td>
                  <td className="border px-3 py-2">
                    <div className="h-4 w-10 bg-gray-200 rounded mx-auto"></div>
                  </td>
                  <td className="border px-3 py-2">
                    <div className="h-4 w-12 bg-gray-200 rounded mx-auto"></div>
                  </td>
                  <td className="border px-3 py-2">
                    <div className="h-4 w-12 bg-gray-200 rounded mx-auto"></div>
                  </td>
                  <td className="border px-3 py-2 text-center">
                    <div className="h-4 w-4 bg-gray-200 rounded mx-auto"></div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
