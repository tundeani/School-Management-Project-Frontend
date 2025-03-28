// src/app/about/page.tsx
"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto pt-6 pb-2 px-6 text-center flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-600 mb-6">About Our School Management System</h1>
      <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
        Our platform helps schools manage operations efficiently, providing tools for students, teachers, and administrators.
      </p>

      <section className="mt-10 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          To simplify school management with technology-driven solutions.
        </p>
      </section>

      <section className="mt-10 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-900">Key Features</h2>
        <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 text-center">
          <li>Student & Teacher Management</li>
          <li>Automated Attendance</li>
          <li>Parent Engagement</li>
        </ul>
      </section>
    </main>
  );
}
