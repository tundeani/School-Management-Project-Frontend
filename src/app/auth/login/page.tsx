"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");
  
      // Store token & user data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      
      // 🆕 Store token in cookies for middleware
      Cookies.set("token", data.token, { expires: 1 }); // Expires in 1 day
  
      console.log("✅ Login successful:", data);
  
      // Extract user role
      const role = data.user?.role?.toLowerCase();
      console.log("🧐 User role:", role);
  
      // Define dashboard routes for roles
      const dashboardRoutes: Record<string, string> = {
        admin: "/dashboard/admin",
        teacher: "/dashboard/teacher",
        student: "/dashboard/student",
        parent: "/dashboard/parent",
      };
  
      // Redirect user based on role
      const redirectTo = dashboardRoutes[role] || "/dashboard/profile";
      console.log("🔄 Redirecting to:", redirectTo);
  
      router.replace(redirectTo);
      setTimeout(() => (window.location.href = redirectTo), 500);
  
    } catch (error: any) {
      console.error("❌ Login Error:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)] bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-600">
          Login to Your Account
        </h2>

        {error && <p className="text-red-600 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">
            Login
          </Button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          <a href="/auth/forgot-password" className="text-green-600 hover:underline">
            Forgot Password?
          </a>
        </p>
      </div>
    </div>
  );
}
