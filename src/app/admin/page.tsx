import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation';
import EmployeeSignIn from '@/components/forms/EmployeeSignIn';

export default async function AdminPage() {

  const session = await getServerSession();

  if (!session) {
    return <EmployeeSignIn />
  }

  redirect('/admin/dashboard');
}