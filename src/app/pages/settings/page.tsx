'use client';

import ProtectedPage from '@/components/ProtectedPage';

export default function SettingsPage() {
  return (
    <ProtectedPage allowedRoles={['admin']}>
      <div>
        <h1>Settings</h1>
        <p>Configure system settings</p>
      </div>
    </ProtectedPage>
  );
}
