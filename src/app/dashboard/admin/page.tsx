// src/app/dashboard/admin/page.tsx
"use client";

import RoleBasedRedirect from "@/components/RoleBasedRedirect";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <RoleBasedRedirect /> {/* ✅ Ensures only admins stay here */}
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>Manage school operations, users, and settings.</p>
    </div>
  );
}
