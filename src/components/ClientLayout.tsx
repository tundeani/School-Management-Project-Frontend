"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth(); // ✅ Now inside a client component
  const role = user?.role || "guest"; // ✅ Default to "guest" if no role

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 bg-gray-900 text-white">
        <Sidebar role={role} />
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <header className="bg-gray-900 text-white p-4 shadow-md">
        <Navbar toggleSidebar={() => {}} />

        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
