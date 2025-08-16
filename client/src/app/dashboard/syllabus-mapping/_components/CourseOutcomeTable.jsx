import { IconBookFilled } from "@tabler/icons-react";

export default function CourseOutComeTable({ selectedSubject }) {
  return (
    <>
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
            </tr>
          </thead>
          <tbody>
            {selectedSubject?.syllabus?.CO?.map((co) => (
              <tr key={co?._id}>
                <td className="border px-3 py-2">{co?.name}</td>
                <td className="border px-3 py-2">{co?.description}</td>
                <td className="border px-3 py-2">{co?.bloomsLevel}</td>
              </tr>
            ))}
            {selectedSubject?.syllabus?.CO?.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="border px-3 py-2 text-center text-gray-500"
                >
                  No Course Outcomes defined
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
