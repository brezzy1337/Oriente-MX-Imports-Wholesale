'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import EmployeeSignIn from '@/components/forms/EmployeeSignIn';

export default function AdminPage() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: false,
    onUnauthenticated() {
      return <EmployeeSignIn />;
    },
  });

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (session) {
    router.push('/admin/dashboard');
    return null;
  }

  return <EmployeeSignIn />;
}
