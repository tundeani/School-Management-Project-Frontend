'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function ReportsPage() {
  return (
    <ProtectedPage allowedRoles={['admin', 'teacher', 'parent', 'student']}>
      <div>
        <h1>Reports</h1>
        <p>View and manage reports</p>
      </div>
    </ProtectedPage>
  );
}