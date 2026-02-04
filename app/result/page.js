"use client";
import { useState } from "react";

export default function ResultPage() {
  const [roll, setRoll] = useState("");
  const [student, setStudent] = useState(null);

  const searchResult = () => {
    const data = JSON.parse(localStorage.getItem("results")) || [];
    const found = data.find((r) => r.roll === roll);
    setStudent(found || null);
  };

  const total =
    student?.subjects.reduce((sum, s) => sum + Number(s.marks), 0) || 0;

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4 text-center">
        Result
      </h1>

      <input
        placeholder="Enter Roll"
        className="w-full border p-2 mb-3"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />

      <button
        onClick={searchResult}
        className="bg-green-700 text-white w-full p-3 rounded mb-4"
      >
        Search Result
      </button>

      {!student && roll && (
        <p className="text-center text-gray-500">No result found</p>
      )}

      {student && (
        <div>
          <p className="font-semibold mb-2">
            Name: {student.name}
          </p>

          <table className="w-full border text-center">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Marks</th>
              </tr>
            </thead>
            <tbody>
              {student.subjects.map((s, i) => (
                <tr key={i}>
                  <td className="border p-2">{s.subject}</td>
                  <td className="border p-2">{s.marks}</td>
                </tr>
              ))}
              <tr className="font-bold bg-gray-100">
                <td className="border p-2">Total</td>
                <td className="border p-2">{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
