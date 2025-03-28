import { FaHome, FaUser, FaBook } from "react-icons/fa";
import { IconType } from "react-icons"; // Import the correct type

interface MenuItem {
  href: string;
  label: string;
  icon: IconType;
}

const menuItems: Record<string, MenuItem[]> = {
  admin: [
    { href: "/dashboard", label: "Dashboard", icon: FaHome },
    { href: "/users", label: "Users", icon: FaUser },
    { href: "/reports", label: "Reports", icon: FaBook },
  ],
  teacher: [
    { href: "/dashboard", label: "Dashboard", icon: FaHome },
    { href: "/assignments", label: "Assignments", icon: FaBook },
  ],
};

export default menuItems;
