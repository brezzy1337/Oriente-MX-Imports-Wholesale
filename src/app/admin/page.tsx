'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import EmployeeSignIn from '@/components/forms/EmployeeSignIn';

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  // If user is authenticated and has proper role, redirect to dashboard
  if(status === 'authenticated') {
    router.push('/dashboard');
  }

  // If not authenticated or doesn't have proper role, show sign in
  return <EmployeeSignIn />;
}
