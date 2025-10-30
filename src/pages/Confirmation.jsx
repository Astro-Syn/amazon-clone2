import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Confirmation() {
  const { state } = useLocation();
  const total = state?.total ?? 0;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md bg-white p-8 rounded shadow text-center">
        <h2 className="text-2xl font-bold mb-2">Payment Successful</h2>
        <p className="mb-4">Thank you for your order.</p>
        <p className="mb-4 font-semibold">Amount paid: ${total.toFixed(2)}</p>
        <Link to="/" className="inline-block bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
