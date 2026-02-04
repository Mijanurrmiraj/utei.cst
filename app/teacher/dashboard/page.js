"use client";
import { useState, useEffect } from "react";

export default function TeacherDashboard() {
  const [results, setResults] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [newMarks, setNewMarks] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("results")) || [];
    setResults(data);
  }, []);

  const saveData = (data) => {
    localStorage.setItem("results", JSON.stringify(data));
    setResults([...data]);
  };

  const deleteSubject = (roll, index) => {
    const updated = results.map((r) => {
      if (r.roll === roll) {
        r.subjects.splice(index, 1);
      }
      return r;
    });
    saveData(updated);
  };

  const updateMarks = (roll, index) => {
    const updated = results.map((r) => {
      if (r.roll === roll) {
        r.subjects[index].marks = newMarks;
      }
      return r;
    });
    saveData(updated);
    setEditIndex(null);
    setNewMarks("");
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Teacher Dashboard
      </h1>

      {results.length === 0 && <p>No results added yet</p>}

      {results.map((student) => (
        <div
          key={student.roll}
          className="border rounded p-4 mb-6"
        >
          <h2 className="font-semibold mb-2">
            Roll: {student.roll} | Name: {student.name}
          </h2>

          <table className="w-full border text-center">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Marks</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {student.subjects.map((s, i) => (
                <tr key={i}>
                  <td className="border p-2">{s.subject}</td>
                  <td className="border p-2">
                    {editIndex === `${student.roll}-${i}` ? (
                      <input
                        value={newMarks}
                        onChange={(e) => setNewMarks(e.target.value)}
                        className="border p-1 w-20"
                      />
                    ) : (
                      s.marks
                    )}
                  </td>
                  <td className="border p-2 space-x-2">
                    {editIndex === `${student.roll}-${i}` ? (
                      <button
                        onClick={() =>
                          updateMarks(student.roll, i)
                        }
                        className="bg-blue-600 text-white px-2 py-1 rounded"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setEditIndex(`${student.roll}-${i}`);
                          setNewMarks(s.marks);
                        }}
                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                      >
                        Edit
                      </button>
                    )}

                    <button
                      onClick={() =>
                        deleteSubject(student.roll, i)
                      }
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
