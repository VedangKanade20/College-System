"use client";

import { useState, useRef } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { IconUpload, IconTrash } from "@tabler/icons-react";

export default function AssessmentPlanManagementPage() {
  const [excelData, setExcelData] = useState([]);
  const fileInputRef = useRef(null); // Ref to reset the file input

  // Function to handle file upload and parse Excel data
  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
        blankrows: false, //  line is crucial
        defval: "", // fill empty cells with blank string instead of undefined
      });
      setExcelData(json);
    };

    reader.readAsArrayBuffer(file);
  };

  //   Function to handle clearing the uploaded data
  const handleClear = () => {
    setExcelData([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input value
    }
  };

  // Function to handle PDF download
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Check if there is data
    if (excelData.length === 0) return;

    // First row as header
    const headers = excelData[0];

    // Rest as rows
    const rows = excelData
      .slice(1)
      .filter((row) => row.some((cell) => cell !== undefined && cell !== ""));

    autoTable(doc, {
      head: [headers],
      body: rows,
      styles: { fontSize: 8 },
      margin: { top: 20 },
    });

    doc.save("assessment-plan.pdf");
    console.log("PDF downloaded successfully");
  };

  return (
    <section className="space-y-6">
      {/* Top bar */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start gap-2 mb-5">
          <h1 className="text-xl font-semibold text-primary">
            Assessment Plan Management
          </h1>
          <p className="text-gray text-sm">
            Track, manage, and update your lecture plans seamlessly.
          </p>
        </div>

        {/* Hidden file input */}
        <div className="flex gap-4">
          <div className="relative">
            <input
              ref={fileInputRef}
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <button className="flex items-center gap-2 bg-button-background px-4 py-2 rounded hover:bg-hover-button-background text-white transition-all duration-75 ease-in-out cursor-pointer text-sm">
              <IconUpload size={18} />
              Upload Assessment Excel
            </button>
          </div>
          <button
            onClick={handleClear}
            className="flex items-center gap-2 bg-button-background px-4 py-2 rounded hover:bg-hover-button-background text-white transition-all duration-75 ease-in-out cursor-pointer text-sm"
          >
            <IconTrash size={18} />
            Clear
          </button>
        </div>
      </div>

      {/* Display Excel Data */}
      {excelData.length > 0 && (
        <div className="overflow-x-auto border rounded">
          <table className="min-w-full text-left border">
            <thead className="bg-gray-100">
              <tr>
                {excelData[0].map((col, idx) => (
                  <th
                    key={idx}
                    className="px-4 py-2 border text-sm font-medium"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t">
                  {row.map((cell, colIndex) => (
                    <td key={colIndex} className="px-4 py-2 text-sm border">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pdf button */}
      <div className="flex justify-end">
        <button
          onClick={handleDownloadPDF}
          className="flex items-center gap-2 bg-button-background px-4 py-2 rounded hover:bg-hover-button-background text-white transition-all duration-75 ease-in-out cursor-pointer text-sm"
        >
          Convert to PDF
        </button>
      </div>
    </section>
  );
}
