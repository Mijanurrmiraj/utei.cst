"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OfficeAdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("officeAdminLogin")) {
      router.push("/office-admin/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("officeAdminLogin");
    router.push("/office-admin/login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Office Admin Dashboard</h2>

      <ul>
        <li>✔ Add Students</li>
        <li>✔ Add Teachers</li>
        <li>✔ Add Results</li>
        <li>✔ Add Notices</li>
        <li>✔ Add Gallery</li>
      </ul>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
