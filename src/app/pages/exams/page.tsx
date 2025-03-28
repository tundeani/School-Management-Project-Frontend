'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function ExamsPage() {
  return (
    <ProtectedPage allowedRoles={['admin', 'teacher', 'student']}>
      <div>
        <h1>Exams</h1>
        <p>Manage and view exams</p>
      </div>
    </ProtectedPage>
  );
}
