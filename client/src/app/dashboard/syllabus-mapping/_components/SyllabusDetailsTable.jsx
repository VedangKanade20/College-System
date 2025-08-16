import { IconBookFilled } from "@tabler/icons-react";

export default function SyllabusDetailsTable({ selectedSubject }) {
  return (
    <>
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
              <th className="border px-3 py-2 text-left">Ref No.</th>
            </tr>
          </thead>
          <tbody>
            {selectedSubject?.syllabus?.modules?.map((syl) => (
              <tr key={syl?._id}>
                <td className="border px-3 py-2">{syl?.moduleNo}</td>
                <td className="border px-3 py-2">{syl?.detailcontents}</td>
                <td className="border px-3 py-2">{syl?.hours}</td>
                <td className="border px-3 py-2">{syl?.refNo}</td>
              </tr>
            ))}
            {selectedSubject?.syllabus?.modules?.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="border px-3 py-2 text-center text-gray-500"
                >
                  No syllabus added
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
