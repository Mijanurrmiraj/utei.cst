"use client";
import { useEffect, useState } from "react";

export default function TeacherDashboard() {
  const [roll, setRoll] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [results, setResults] = useState([]);

  // Load data safely
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("results") || "[]");
    setResults(Array.isArray(data) ? data : []);
  }, []);

  const saveResults = (data) => {
    localStorage.setItem("results", JSON.stringify(data));
    setResults([...data]);
  };

  // ✅ ADD RESULT (THIS WAS MISSING PROPERLY)
  const addResult = () => {
    if (!roll || !name || !subject || !marks) {
      alert("সব ফিল্ড পূরণ করো");
      return;
    }

    const existing = [...results];
    const studentIndex = existing.findIndex(
      (s) => s.roll === roll
    );

    if (studentIndex !== -1) {
      // Existing student → add subject
      existing[studentIndex].subjects.push({
        subject,
        marks,
      });
    } else {
      // New student
      existing.push({
        roll,
        name,
        subjects: [{ subject, marks }],
      });
    }

    saveResults(existing);

    // Clear inputs
    setSubject("");
    setMarks("");
  };

  const deleteSubject = (roll, index) => {
    const updated = results.map((r) => {
      if (r.roll === roll) {
        r.subjects.splice(index, 1);
      }
      return r;
    });
    saveResults(updated);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Teacher Dashboard
      </h1>

      {/* ADD FORM */}
      <div className="border p-4 rounded mb-6">
        <input
          placeholder="Roll"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <input
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <button
          onClick={addResult}
          className="bg-green-700 text-white px-4 py-2 rounded w-full"
        >
          Add Result
        </button>
      </div>

      {/* RESULT LIST */}
      {results.map((student, i) => (
        <div key={i} className="border p-4 mb-4 rounded">
          <h2 className="font-semibold mb-2">
            Roll: {student.roll} | {student.name}
          </h2>

          {student.subjects.map((s, idx) => (
            <div
              key={idx}
              className="flex justify-between border-b py-1"
            >
              <span>
                {s.subject} — {s.marks}
              </span>
              <button
                onClick={() =>
                  deleteSubject(student.roll, idx)
                }
                className="text-red-600"
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
