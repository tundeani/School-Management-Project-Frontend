'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function NoticeBoardPage() {
  return (
    <ProtectedPage allowedRoles={['admin', 'teacher', 'parent', 'student']}>
      <div>
        <h1>Notice Board</h1>
        <p>View important announcements</p>
      </div>
    </ProtectedPage>
  );
}