'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

interface ProtectedPageProps {
  allowedRoles: string[];
  children: ReactNode;
}

export default function ProtectedPage({ allowedRoles, children }: ProtectedPageProps) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/auth/login'); // Redirect to login if not logged in
      return;
    }

    const userRole = user.role?.toLowerCase();
    if (!allowedRoles.includes(userRole)) {
      router.replace(`/dashboard/${userRole}` || '/dashboard'); // Redirect unauthorized users
    }
  }, [user, router, allowedRoles]);

  return <>{children}</>;
}
