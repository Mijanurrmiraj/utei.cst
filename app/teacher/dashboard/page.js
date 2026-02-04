"use client";
import { useEffect, useState } from "react";

export default function TeacherDashboard() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("results"));
      if (Array.isArray(data)) {
        setResults(data);
      } else {
        setResults([]);
      }
    } catch (err) {
      console.error("Invalid localStorage data");
      setResults([]);
    }
  }, []);

  const saveData = (data) => {
    localStorage.setItem("results", JSON.stringify(data));
    setResults([...data]);
  };

  const deleteSubject = (roll, index) => {
    const updated = results.map((r) => {
      if (r.roll === roll && Array.isArray(r.subjects)) {
        r.subjects.splice(index, 1);
      }
      return r;
    });
    saveData(updated);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Teacher Dashboard
      </h1>

      {results.length === 0 && (
        <p className="text-gray-600">
          No student results found.
        </p>
      )}

      {results.map((student, si) => (
        <div key={si} className="border p-4 mb-4 rounded">
          <h2 className="font-semibold mb-2">
            Roll: {student.roll} | Name: {student.name}
          </h2>

          {Array.isArray(student.subjects) &&
            student.subjects.map((s, i) => (
              <div
                key={i}
                className="flex justify-between border-b py-2"
              >
                <span>
                  {s.subject} — {s.marks}
                </span>
                <button
                  onClick={() =>
                    deleteSubject(student.roll, i)
                  }
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
