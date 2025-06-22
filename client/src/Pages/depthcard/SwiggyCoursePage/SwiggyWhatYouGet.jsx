import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const SwiggyWhatYouGet = () => {
  const features = [
    {
      title: 'Full Registration Assistance',
      description:
        'PAN, GST, FSSAI setup along with end-to-end Swiggy onboarding support.',
    },
    {
      title: 'Menu & Branding Design',
      description:
        'Menu Upload, Logo, QR Code, Banner & Menu Card Design for a complete setup.',
    },
    {
      title: 'Payments & Delivery Setup',
      description:
        'Integration with Cashfree, Razorpay, UPI and delivery partner activation.',
    },
    {
      title: 'Listing & SEO Optimization',
      description:
        'Location tags, photo gallery and listing improvements for better visibility.',
    },
    {
      title: 'Live Support & Chat',
      description:
        'WhatsApp-based document collection, real-time support and coordination.',
    },
    {
      title: 'Approval Acceleration',
      description:
        'Expert guidance for smooth and fast Swiggy onboarding & restaurant go-live.',
    },
  ];

  return (
    <section className="bg-yellow-50 py-16 px-4 sm:px-6 lg:px-16 font-poppins">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
        {/* ✅ Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-orange-600 mb-4 tracking-tight leading-tight">
            What You'll Get with Swiggy Onboarding
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            End-to-end solutions crafted to launch your restaurant online with speed and precision
          </p>
        </div>

        {/* ✅ Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-yellow-100 hover:bg-yellow-200 transition-colors duration-300 rounded-xl p-6 text-left shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white p-2 rounded-full">
                  <FaCheckCircle className="text-lg" />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ Bottom Note */}
        <div className="mt-12 text-center text-sm text-gray-500">
          All services include personalized onboarding support and 24x7 assistance.
        </div>
      </div>
    </section>
  );
};

export default SwiggyWhatYouGet;
