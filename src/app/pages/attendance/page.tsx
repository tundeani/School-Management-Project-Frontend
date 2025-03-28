'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function AttendancePage() {
  return (
    <ProtectedPage allowedRoles={['admin', 'teacher', 'parent', 'student']}>
      <div>
        <h1>Attendance</h1>
        <p>Track and manage attendance</p>
      </div>
    </ProtectedPage>
  );
}