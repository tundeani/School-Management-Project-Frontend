'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function ProgressPage() {
  return (
    <ProtectedPage allowedRoles={['admin', 'teacher', 'parent', 'student']}>
      <div>
        <h1>Progress</h1>
        <p>View student progress</p>
      </div>
    </ProtectedPage>
  );
}