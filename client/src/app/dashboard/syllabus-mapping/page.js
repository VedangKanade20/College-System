"use client";

import { useState } from "react";
import { IconBookFilled, IconCircleDashedCheck } from "@tabler/icons-react";

const allocatedSubjects = ["ADVANCED JAVA", "DATA STRUCTURE"];

export default function SyllabusMappingPage() {
  const [semester, setSemester] = useState("Sem I");
  const [subject, setSubject] = useState("ADVANCED JAVA");

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

      {/* Filters */}
      <div className="flex flex-col gap-11 my-10 bg-white rounded px-12 py-5">
        <div className="flex gap-12 items-end">
          {/* Select program */}
          <div>
            <label className="block">Select Program</label>
            <select className="mt-1 block rounded border-gray border px-5 text-gray py-2 shadow-sm focus:ring-button-background focus:border-button-background text-sm">
              <option>B.Tech</option>
              <option>BCA</option>
              <option>MCA</option>
            </select>
          </div>

          {/* Academic year */}
          <div>
            <label className="block">Academic Year</label>
            <select className="mt-1 block rounded border-gray border px-5 text-gray py-2 shadow-sm focus:ring-button-background focus:border-button-background text-sm">
              <option>2023-24</option>
              <option>2024-25</option>
              <option>2025-26</option>
            </select>
          </div>

          {/* Done button */}
          <button className="bg-button-background px-5 py-2 text-white rounded-md hover:bg-hover-button-background transition-all duration-75 ease-in cursor-pointer">
            Done
          </button>
        </div>

        {/* Semester Buttons */}
        <div className="flex gap-3">
          {["Sem I", "Sem II", "Sem III", "Sem IV"].map((sem) => (
            <button
              key={sem}
              onClick={() => setSemester(sem)}
              className={`px-4 py-1 rounded cursor-pointer shadow border text-sm ${
                semester === sem
                  ? "bg-button-background text-white"
                  : "border-secondary-button-background bg-secondary-button-background text-gray-700"
              }`}
            >
              {sem}
            </button>
          ))}
        </div>
      </div>

      {/* Allocated Subjects */}
      <div className="flex flex-col gap-4 mt-4">
        <p className="font-medium">Allocated Subject</p>

        <div className="flex gap-5">
          {allocatedSubjects.map((subj) => (
            <button
              key={subj}
              onClick={() => setSubject(subj)}
              className={`px-4 py-2 cursor-pointer rounded-md font-medium border ${
                subject === subj
                  ? "bg-indigo-100 text-indigo-700 border-indigo-600"
                  : "text-gray-700 bg-secondary-button-background border-secondary-button-background"
              }`}
            >
              {subj}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4">
        <button className="text-indigo-600 border-b-2 border-indigo-600 pb-1">
          Theory
        </button>
        <button className="text-gray-500 hover:text-indigo-600">Lab</button>
      </div>

      {/* Syllabus Section */}
      <div className="bg-white border rounded-lg shadow-sm p-5 space-y-4">
        <h2 className="text-lg font-medium text-primary flex items-center gap-1">
          <IconBookFilled />
          <span>Syllabus (Theory)</span>
        </h2>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Unit 1:</strong> Introduction to Advanced Java – JVM, JRE,
            JDK, Classloaders, Garbage Collection, Exception Handling,
            Assertions.
          </p>
          <p>
            <strong>Unit 2:</strong> Concurrency – Threads, Executors, Thread
            Pools, Callables & Futures, Synchronizers (CountDownLatch,
            CyclicBarrier, Phaser, Exchanger).
          </p>
          <p>
            <strong>Unit 3:</strong> Sockets, ServerSockets, UDP TCP, URL,
            URLConnection, HTTP Client API.
          </p>
          <p>
            <strong>Unit 4:</strong> Database Connectivity (JDBC) – Drivers,
            Connection, Statement, ResultSet, PreparedStatement,
            CallableStatement, Batch Updates, Transactions.
          </p>
          <p>
            <strong>Unit 5:</strong> Web Technologies – Servlets, JSP, MVC
            Architecture, Filters, Listeners, Session Management.
          </p>
        </div>
      </div>

      {/* Course Outcomes */}
      <div className="space-y-2 bg-white border rounded-lg shadow-sm p-5">
        <h3 className="text-lg font-medium text-primary">
          Course Outcomes (Theory)
        </h3>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded text-primary font-medium text-sm flex items-center gap-3.5">
          <span className="text-green-400">
            {" "}
            <IconCircleDashedCheck stroke={2} />
          </span>
          <p>
            CO1: Understand the core concepts of Advanced Java and its runtime
            environment.
          </p>
        </div>
      </div>
    </section>
  );
}
