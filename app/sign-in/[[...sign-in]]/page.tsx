/** @format */
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 shadow-lg p-8 rounded-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          Welcome Back!
        </h2>
        <SignIn
          appearance={{
            elements: {
              card: 'shadow-lg rounded-lg',
              formFieldInput: 'dark:bg-gray-300 bg-gray-100',
              formFieldLabel: 'dark:text-gray-300 text-gray-800',
            },
          }}
        />
      </div>
    </div>
  );
}
