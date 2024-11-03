import React, { useState } from 'react';

interface AgeVerificationProps {
  onVerify: () => void;
}

export default function AgeVerification({ onVerify }: AgeVerificationProps) {
  const [error, setError] = useState('');

  const handleVerify = () => {
    const verified = window.confirm('Are you 18 years or older?');
    if (verified) {
      onVerify();
    } else {
      setError('You must be 18 or older to view this content.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Age Verification Required
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Some content on this page requires age verification. 
          Please confirm that you are 18 years or older to continue.
        </p>
        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition"
          >
            Go Back
          </button>
          <button
            onClick={handleVerify}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Verify Age
          </button>
        </div>
      </div>
    </div>
  );
}