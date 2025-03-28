'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function FinancePage() {
  return (
    <ProtectedPage allowedRoles={['admin']}>
      <div>
        <h1>Finance</h1>
        <p>Manage school finances</p>
      </div>
    </ProtectedPage>
  );
}
