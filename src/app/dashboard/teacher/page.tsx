"use client";
import RoleBasedRedirect from "@/components/RoleBasedRedirect";

export default function TeacherDashboard() {
  return (
    <div className="p-6">
      <RoleBasedRedirect />
      <h1 className="text-2xl font-bold">Teacher Dashboard</h1>
      <p>Access class schedules, assignments, and student reports.</p>
    </div>
  );
}
