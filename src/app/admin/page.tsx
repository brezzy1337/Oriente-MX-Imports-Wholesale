'use client';

import { useState } from 'react';
import EmployeeSignIn from '@/components/forms/EmployeeSignIn';
import EmployeeSignUp from '@/components/forms/EmployeeSignUp';

export default function AdminPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setIsSignIn(true)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              isSignIn
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              !isSignIn
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Sign Up
          </button>
        </div>
        {isSignIn ? <EmployeeSignIn /> : <EmployeeSignUp />}
      </div>
    </div>
  );
}