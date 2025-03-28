'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] bg-gray-100 text-center p-6">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-green-600">Welcome to the School Management System</h1>
        <p className="mt-4 text-gray-700 text-lg">
          A modern platform for managing school operations efficiently. Login to access your dashboard.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <Button 
            onClick={() => router.push('/auth/login')} 
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-400"
          >
            Login
          </Button>
          <Button 
            onClick={() => router.push('/auth/register')} 
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-400"
          >
            Register
          </Button>
        </div>
      </div>
    </main>
  );
}
