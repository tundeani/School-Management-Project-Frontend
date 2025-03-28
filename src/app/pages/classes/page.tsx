'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function ClassesPage() {
  return (
    <ProtectedPage allowedRoles={['admin', 'teacher', 'student']}>
      <div>
        <h1>Classes</h1>
        <p>Manage and view classes</p>
      </div>
    </ProtectedPage>
  );
}
