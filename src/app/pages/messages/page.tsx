'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function MessagesPage() {
  return (
    <ProtectedPage allowedRoles={['admin', 'teacher', 'parent', 'student']}>
      <div>
        <h1>Messages</h1>
        <p>Communicate with other users</p>
      </div>
    </ProtectedPage>
  );
}