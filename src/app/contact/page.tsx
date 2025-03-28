// src/app/contact/page.tsx
"use client";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-[calc(100vh-160px)] px-6 pt-0 pb-4">
      {/* Contact Us Heading */}
      <div className="text-center m-0">
        <h1 className="text-4xl font-bold text-green-600 mb-2">Contact Us</h1>
        <p className="text-gray-700 text-lg max-w-md leading-relaxed">
          We'd love to hear from you! Kindly reach out.
        </p>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-md space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
        <textarea 
          placeholder="Your Message" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none" 
          rows={4}
        ></textarea>
        <button 
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Send Message
        </button>
      </form>

      {/* Email Contact */}
      <p className="text-gray-600">
        Or email us at{" "}
        <a href="mailto:info@school.com" className="text-green-600 font-semibold hover:underline">
          info@school.com
        </a>
      </p>
    </main>
  );
}
