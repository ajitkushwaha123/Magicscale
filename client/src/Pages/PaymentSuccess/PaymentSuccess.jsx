import React from "react";
import { useSearchParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md">
        <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-4">
          Thank you for your purchase. Your payment was completed successfully.
        </p>
        {orderId && (
          <p className="text-gray-500 text-sm">
            Order ID: <span className="font-mono">{orderId}</span>
          </p>
        )}
        <a
          href="/"
          className="mt-6 inline-block px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
