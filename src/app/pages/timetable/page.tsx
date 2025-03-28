'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function TimetablePage() {
  return (
    <ProtectedPage allowedRoles={['admin', 'teacher', 'student']}>
      <div>
        <h1>Timetable</h1>
        <p>View class schedules</p>
      </div>
    </ProtectedPage>
  );
}