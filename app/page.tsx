// app/page.tsx
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Dashboard App</h1>
      <div className="flex space-x-4">
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Go to Dashboard
        </Link>
        <Link
          href="/settings"
          className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700"
        >
          Go to Settings
        </Link>
      </div>
    </main>
  );
}
