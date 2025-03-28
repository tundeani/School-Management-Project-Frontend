'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function LibraryPage() {
  return (
    <ProtectedPage allowedRoles={['admin', 'teacher', 'student']}>
      <div>
        <h1>Library</h1>
        <p>Access the digital library</p>
      </div>
    </ProtectedPage>
  );
}