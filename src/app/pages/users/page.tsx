'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function UsersPage() {
  return (
    <ProtectedPage allowedRoles={['admin']}>
      <div>
        <h1>Users</h1>
        <p>Manage all users</p>
      </div>
    </ProtectedPage>
  );
}