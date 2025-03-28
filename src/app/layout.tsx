import type { Metadata } from "next";
import "../styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "School Management System",
  description: "A modern school management platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <AuthProvider>
          {/* ✅ Ensure ClientLayout wraps content properly */}
          <ClientLayout>
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow p-6 mt-[80px]">{children}</div> 
            </div>
          </ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
