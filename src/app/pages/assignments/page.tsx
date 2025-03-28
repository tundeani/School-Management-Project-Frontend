'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function AssignmentsPage() {
  return (
    <ProtectedPage allowedRoles={['admin', 'teacher', 'student']}>
      <div>
        <h1>Assignments</h1>
        <p>Manage and submit assignments</p>
      </div>
    </ProtectedPage>
  );
}