"use client";
import RoleBasedRedirect from "@/components/RoleBasedRedirect";

export default function StudentDashboard() {
  return (
    <div className="p-6">
      <RoleBasedRedirect />
      <h1 className="text-2xl font-bold">Student Dashboard</h1>
      <p>View courses, attendance, and academic progress.</p>
    </div>
  );
}
