import React from 'react';

const SwiggyFAQ = () => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-100 py-16 px-6 md:px-20 font-poppins">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <details className="group bg-white shadow-md rounded-lg p-5 cursor-pointer">
            <summary className="text-lg font-medium text-gray-800 group-open:text-orange-600">What documents are required?</summary>
            <p className="text-sm text-gray-600 mt-2">PAN, FSSAI, GST, bank details, and a few photos of your kitchen and food setup are required for Swiggy onboarding.</p>
          </details>

          <details className="group bg-white shadow-md rounded-lg p-5 cursor-pointer">
            <summary className="text-lg font-medium text-gray-800 group-open:text-orange-600">How long does onboarding take?</summary>
            <p className="text-sm text-gray-600 mt-2">Usually, the process takes 3–5 working days after all valid documents are submitted and verified.</p>
          </details>

          <details className="group bg-white shadow-md rounded-lg p-5 cursor-pointer">
            <summary className="text-lg font-medium text-gray-800 group-open:text-orange-600">Can I list my restaurant without a GST number?</summary>
            <p className="text-sm text-gray-600 mt-2">Yes, it’s possible under specific categories (like petty food businesses) where GST is not mandatory. We will help guide you accordingly.</p>
          </details>

          <details className="group bg-white shadow-md rounded-lg p-5 cursor-pointer">
            <summary className="text-lg font-medium text-gray-800 group-open:text-orange-600">Is this service available in all cities?</summary>
            <p className="text-sm text-gray-600 mt-2">Yes, our onboarding support is available PAN India, including metro, tier 2, and tier 3 cities.</p>
          </details>

          <details className="group bg-white shadow-md rounded-lg p-5 cursor-pointer">
            <summary className="text-lg font-medium text-gray-800 group-open:text-orange-600">Can you help with designing my menu and logo?</summary>
            <p className="text-sm text-gray-600 mt-2">Absolutely! We provide end-to-end design support including logo, banner, menu card, and even QR code generation.</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default SwiggyFAQ;
