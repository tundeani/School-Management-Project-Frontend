'use client';

import { FaChalkboardTeacher, FaUserGraduate, FaBookOpen, FaClipboardList, FaUsers, FaCogs } from 'react-icons/fa';

export default function FeaturesPage() {
  const features = [
    {
      title: 'Student Management',
      description: 'Track student records, attendance, and academic performance in one place.',
      icon: <FaUserGraduate className='w-10 h-10 text-green-600' />,
    },
    {
      title: 'Teacher Dashboard',
      description: 'Enable teachers to manage lessons, grades, and student interactions efficiently.',
      icon: <FaChalkboardTeacher className='w-10 h-10 text-green-600' />,
    },
    {
      title: 'Course Management',
      description: 'Create, update, and assign courses seamlessly for students and teachers.',
      icon: <FaBookOpen className='w-10 h-10 text-green-600' />,
    },
    {
      title: 'Exams & Grading',
      description: 'Automate exam creation, grading, and result publishing securely.',
      icon: <FaClipboardList className='w-10 h-10 text-green-600' />,
    },
    {
      title: 'Parent Portal',
      description: 'Keep parents informed with real-time updates on student progress and school events.',
      icon: <FaUsers className='w-10 h-10 text-green-600' />,
    },
    {
      title: 'Administration Panel',
      description: 'Manage school operations, staff, and reports with ease.',
      icon: <FaCogs className='w-10 h-10 text-green-600' />,
    },
  ];

  return (
    <main className='flex flex-col items-center justify-between min-h-[calc(100vh-112px)] px-6 pt-6 pb-4 bg-gray-100 text-center'>
      {/* Features Heading */}
      <div className="text-center">
        <h1 className='text-4xl font-bold text-green-600 mb-4'>Our Features</h1>
        <p className='text-lg text-gray-700 max-w-2xl leading-relaxed mx-auto'>
          Our School Management System simplifies operations and enhances learning experiences.
        </p>
      </div>

      {/* Features Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mt-8'>
        {features.map((feature, index) => (
          <div key={index} className='flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition'>
            {feature.icon}
            <h3 className='text-xl font-semibold text-gray-900 mt-4'>{feature.title}</h3>
            <p className='text-gray-700 mt-2 text-center'>{feature.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
