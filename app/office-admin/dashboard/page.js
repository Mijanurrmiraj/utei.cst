"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OfficeAdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const admin = localStorage.getItem("officeAdmin");
    if (!admin) {
      router.push("/office-admin/login");
    }
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="bg-green-700 text-white p-4 rounded-xl flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Office Admin Dashboard</h2>
          <p className="text-sm opacity-90">
            Student • Result • Gallery • Notice
          </p>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("officeAdmin");
            router.push("/office-admin/login");
          }}
          className="bg-white text-green-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="bg-white p-4 rounded shadow text-center">
          Students
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          Results
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          Gallery
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          Notices
        </div>
      </div>
    </div>
  );
}
