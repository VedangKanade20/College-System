import { IconBookFilled, IconCircleDashedCheck } from "@tabler/icons-react";
import { useState } from "react";

export default function SubjectAllocation() {
  const [subject, setSubject] = useState("ADVANCED JAVA");
  const allocatedSubjects = ["ADVANCED JAVA", "DATA STRUCTURE"];
  return (
    <>
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
    </>
  );
}
