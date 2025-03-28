'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function CoursesPage() {
  return (
    <ProtectedPage allowedRoles={['admin', 'teacher', 'student']}>
      <div>
        <h1>Courses</h1>
        <p>Manage and view courses</p>
      </div>
    </ProtectedPage>
  );
}
