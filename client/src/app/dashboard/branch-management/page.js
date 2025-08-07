import React from "react";

const initialBranches = [
  { name: "MCA First Year", code: "00000" },
  { name: "MCA Second Year", code: "00000" },
  { name: "MMS First Year", code: "00000" },
  { name: "MMS Second Year", code: "-000000" },
];

export default function BranchManagement() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-gray-700 font-semibold text-xl">
          Branch Management
        </h2>
        <button className="bg-button-background text-white px-5 py-2 rounded-md font-medium hover:bg-hover-button-background transition cursor-pointer">
          + Add Branch
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white text-left text-sm">
          <thead>
            <tr className="bg-gray-100 border">
              <th className="px-4 py-3 border-r font-medium text-gray-700">
                Name
              </th>
              <th className="px-4 py-3 border-r font-medium text-gray-700">
                Code
              </th>
              <th className="px-4 py-3 border-r font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {initialBranches.map((branch, idx) => (
              <tr key={idx} className="border border-gray-200">
                <td className="px-4 border-r py-3">{branch.name}</td>
                <td className="px-4 border-r py-3">{branch.code}</td>
                <td className="px-4 border-r py-3">
                  <span
                    className="text-indigo-500 cursor-pointer mr-4 hover:underline"
                    // onClick={() => handleEdit(idx)}
                  >
                    Edit
                  </span>
                  <span
                    className="text-red-500 cursor-pointer hover:underline"
                    // onClick={() => handleDelete(idx)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
