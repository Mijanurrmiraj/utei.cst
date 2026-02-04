"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OfficeAdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const admin = sessionStorage.getItem("officeAdmin");
    if (!admin) {
      router.push("/office-admin/login");
    }
  }, []);

  return (
    <div>
      <h1>Office Admin Dashboard</h1>
      <p>Welcome! You can manage students, teachers, results.</p>
    </div>
  );
}
