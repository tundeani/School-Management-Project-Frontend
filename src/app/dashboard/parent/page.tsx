"use client";
import RoleBasedRedirect from "@/components/RoleBasedRedirect";

export default function ParentDashboard() {
  return (
    <div className="p-6">
      <RoleBasedRedirect />
      <h1 className="text-2xl font-bold">Parent Dashboard</h1>
      <p>Access student progress and school updates.</p>
    </div>
  );
}
