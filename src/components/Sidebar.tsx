"use client";

import menuItems from "@/config/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface SidebarProps {
  role: string;
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const pathname = usePathname();
  const menu = menuItems[role] || []; // ✅ Ensure menu is always an array

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-4 flex flex-col gap-4 shadow-lg">
      {/* ✅ Sidebar Title */}
      <h2 className="text-xl font-bold text-center mb-4">Dashboard</h2>

      {/* ✅ Show 'No Menu Available' if empty */}
      {menu.length === 0 ? (
        <p className="text-gray-400 text-center">No Menu Available</p>
      ) : (
        <div className="flex flex-col gap-2">
          {menu.map((item) => {
            const IconComponent: IconType = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-lg transition ${
                  pathname === item.href
                    ? "bg-green-700"
                    : "hover:bg-gray-800"
                }`}
              >
                <IconComponent className="w-5 h-5" /> {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
