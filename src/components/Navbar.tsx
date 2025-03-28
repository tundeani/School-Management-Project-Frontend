"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import clsx from "clsx";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Detect scroll to add shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Logout
  const handleLogout = () => {
    logout(); // Logout from AuthContext
    localStorage.clear(); // Clear local storage
    document.cookie.split(";").forEach((cookie) => {
      document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/");
    }); // Clear cookies
    router.replace("/auth/login"); // Redirect to login page
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full h-[112px] flex items-center justify-between px-6 lg:px-12 bg-white text-gray-900 border-b border-gray-300 transition-all z-50",
        { "shadow-lg": isScrolled }
      )}
    >
      {/* Left Side (Logo & Mobile Menu) */}
      <div className="flex items-center space-x-4">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)} // ✅ Toggle mobile menu
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
        >
          <FiMenu size={24} />
        </button>

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          School Management
        </Link>
      </div>

      {/* Center (Navigation Links) */}
      <nav className="hidden lg:flex space-x-6">
        <Link href="/about" className="text-gray-700 hover:text-green-600 transition">
          About
        </Link>
        <Link href="/features" className="text-gray-700 hover:text-green-600 transition">
          Features
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-green-600 transition">
          Contact
        </Link>
      </nav>

      {/* Right Side (User Actions) */}
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="hidden sm:block font-medium">{user.name}</span>
            <Button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded-lg"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link
              href="/auth/login"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Login
            </Link>
            <Button
              onClick={() => (window.location.href = "/auth/register")}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 text-white rounded-lg"
            >
              Register
            </Button>
          </>
        )}
      </div>

      {/* Mobile Dropdown Menu (Small Screens) */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-300 lg:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="/about" className="text-gray-700 hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>
              Features
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            {user ? (
              <Button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded-lg"
              >
                Logout
              </Button>
            ) : (
              <>
                <Link href="/auth/login" className="text-gray-700 hover:text-green-600 transition" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
                <Button
                  onClick={() => (window.location.href = "/auth/register")}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 text-white rounded-lg"
                >
                  Register
                </Button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
