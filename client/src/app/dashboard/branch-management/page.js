"use client";

import React, { useState } from "react";

const initialBranches = [
  { name: "MCA First Year", code: "00000" },
  { name: "MCA Second Year", code: "00000" },
  { name: "MMS First Year", code: "00000" },
  { name: "MMS Second Year", code: "-000000" },
];

export default function BranchManagement() {
  const [search, setSearch] = useState("");
  const [branches, setBranches] = useState(initialBranches);

  const filteredBranches = branches.filter((branch) =>
    branch.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "32px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#4B4B4B", fontWeight: 600 }}>Branch Management</h2>
        <button
          style={{
            background: "#6C63FF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "8px 20px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          + Add Branch
        </button>
      </div>
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "250px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
        }}
      >
        <thead>
          <tr style={{ background: "#F5F6FA", textAlign: "left" }}>
            <th style={{ padding: "12px", fontWeight: 500 }}>Name</th>
            <th style={{ padding: "12px", fontWeight: 500 }}>Code</th>
            <th style={{ padding: "12px", fontWeight: 500 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBranches.map((branch, idx) => (
            <tr key={idx} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "12px" }}>{branch.name}</td>
              <td style={{ padding: "12px" }}>{branch.code}</td>
              <td style={{ padding: "12px" }}>
                <span
                  style={{
                    color: "#6C63FF",
                    cursor: "pointer",
                    marginRight: "12px",
                  }}
                  // onClick={() => handleEdit(idx)}
                >
                  Edit
                </span>
                <span
                  style={{ color: "#E53935", cursor: "pointer" }}
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
  );
}
