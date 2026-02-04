"use client";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">
        Teacher Dashboard
      </h1>

      <div className="space-y-3">
        <Link
          href="/teacher/add-result"
          className="block bg-green-700 text-white p-3 rounded text-center"
        >
          ➕ Add Student Result
        </Link>

        <Link
          href="/result"
          className="block bg-gray-700 text-white p-3 rounded text-center"
        >
          🔍 View Public Result Page
        </Link>
      </div>
    </div>
  );
}
