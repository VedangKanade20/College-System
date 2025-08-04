import { IconPlus } from "@tabler/icons-react";

export default function SubjectAllocation() {
  const tableData = [
    {
      faculty: "Dr. Sulakshana Vispute",
      subject: "Data Structures",
      semester: "Sem I - 2025",
    },
    {
      faculty: "Prof. Ganesh Bhagwat",
      subject: "Algorithms",
      semester: "Sem I - 2025",
    },
    {
      faculty: "Ms. Prachi",
      subject: "Operating Systems",
      semester: "Sem I - 2025",
    },
    {
      faculty: "Dr. Ruchi Gupta",
      subject: "Database Management",
      semester: "Sem I - 2025",
    },
  ];

  return (
    <section className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold text-primary">
          Subject Allocation
        </h1>
        <button className="flex items-center gap-2 bg-button-background text-white px-4 py-2 rounded text-sm cursor-pointer">
          <IconPlus size={16} />
          Assign New Subject
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded border">
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 font-medium border-b">
            <tr>
              <th className="px-4 py-2 border-r">Faculty</th>
              <th className="px-4 py-2 border-r">Subject</th>
              <th className="px-4 py-2 border-r">Semester</th>
              <th className="px-4 py-2 border-r">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-r">{row.faculty}</td>
                <td className="px-4 py-2 border-r">{row.subject}</td>
                <td className="px-4 py-2 border-r">{row.semester}</td>
                <td className="px-4 py-2 space-x-2 border-r">
                  <button className="text-blue-600 hover:underline cursor-pointer">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
