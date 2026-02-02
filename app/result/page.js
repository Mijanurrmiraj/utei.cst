"use client";
import { useState } from "react";
import results from "@/data/results.json";

export default function ResultPage() {
  const [roll, setRoll] = useState("");
  const [data, setData] = useState(null);

  const searchResult = () => {
    const found = results.find(
      r => r.roll === roll && r.published === true
    );
    setData(found || "not-found");
  };

  return (
    <div className="max-w-xl mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Result</h1>

      <input
        type="text"
        placeholder="Enter Roll / Registration No"
        value={roll}
        onChange={e => setRoll(e.target.value)}
        className="border w-full p-3 rounded mb-4"
      />

      <button
        onClick={searchResult}
        className="bg-green-700 text-white px-6 py-2 rounded"
      >
        Search Result
      </button>

      {data === "not-found" && (
        <p className="text-red-600 mt-4">Result not found</p>
      )}

      {data && data !== "not-found" && (
        <div className="mt-6 text-left border p-4 rounded">
          <p><b>Name:</b> {data.name}</p>
          <p><b>Roll:</b> {data.roll}</p>
          <p><b>Session:</b> {data.session}</p>

          <table className="w-full mt-4 border">
            <thead>
              <tr className="bg-green-100">
                <th className="border p-2">Subject</th>
                <th className="border p-2">Theory</th>
                <th className="border p-2">Practical</th>
              </tr>
            </thead>
            <tbody>
              {data.subjects.map((s, i) => (
                <tr key={i}>
                  <td className="border p-2">{s.name}</td>
                  <td className="border p-2">{s.theory}</td>
                  <td className="border p-2">{s.practical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
