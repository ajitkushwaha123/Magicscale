



import React from 'react';
import { useNavigate } from 'react-router-dom';
import zomatoImg from '../../../assets/zomato3.png';
import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
import ZomatoFAQ from './ZomatoFAQ';
import ZomatoWhatYouGet from './ZomatoWhatYouGet';
// import BusinessShiftProcess from './BusinessShiftProcess';

const ZomatoOnboardingCourse = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-50 text-gray-900 min-h-screen py-10 px-6 md:px-16 font-[Poppins]">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
        {/* ✅ Left Section */}
        <div className="md:w-[66%] md:pr-8 space-y-5">
          <p className="text-sm text-purple-600">Business & Marketing {'>'} Zomato</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Zomato Onboarding & Restaurant Launch A–Z
          </h1>

          <p className="text-lg text-gray-700 mt-4">
            This onboarding service is perfect for cloud kitchens, cafés, and food businesses. We’ll handle your registration, design, payments, and delivery setup — all in one place.
          </p>

          {/* ✅ Horizontal Highlight Bar */}
          <div className="bg-purple-100 text-purple-900 rounded-lg p-4 mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                Premium
              </div>
              <p className="text-sm sm:text-base">
                Access this premium onboarding service with expert setup, full documentation support, and fast-track approval.
                <span className="ml-2 underline cursor-pointer hover:text-purple-600">See Onboarding Plans</span>
              </p>
            </div>
            <div className="flex items-center text-sm sm:text-base gap-4 mt-2 md:mt-0">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-yellow-500">4.8</span>
                <span>★</span>
                <span className="text-gray-600 hidden sm:inline">(152 reviews)</span>
              </div>
              <div className="text-gray-600 border-l border-gray-400 pl-4">
                <span className="font-semibold">230+</span> onboarded
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Delivered by <span className="text-indigo-600 font-semibold">MagicScale Team</span>
          </p>
          <p className="text-sm text-gray-500">Last updated 06/2025 • Hindi & English</p>

          {/* ✅ Premium Features Section */}
          <div className="mt-16">
            <ZomatoWhatYouGet />
            <h3 className="text-2xl font-semibold mb-6">More reasons to onboard</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-5 text-center shadow">
                <FaTv className="mx-auto text-3xl mb-3 text-purple-500" />
                <h4 className="text-lg font-bold mb-1">Live Dashboard Access</h4>
                <p className="text-sm text-gray-600">Track orders, payments, and delivery status directly from your restaurant dashboard.</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center shadow">
                <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />
                <h4 className="text-lg font-bold mb-1">Menu Download Setup</h4>
                <p className="text-sm text-gray-600">Enable downloadable menu for quick share on WhatsApp or print for offline access.</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center shadow">
                <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />
                <h4 className="text-lg font-bold mb-1">Nationwide Coverage</h4>
                <p className="text-sm text-gray-600">We assist across India — metros, tier 2 cities, and even remote areas.</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center shadow">
                <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />
                <h4 className="text-lg font-bold mb-1">Multi-Outlet Support</h4>
                <p className="text-sm text-gray-600">Easily onboard multiple branches or cloud kitchens with our team’s coordination.</p>
              </div>
            </div>
          </div>
            {/* <BusinessShiftProcess /> */}
          <ZomatoFAQ />
         
        </div>

        {/* ✅ Right: Sticky Checkout Bar */}
        <div className="md:w-[34%] md:pl-4">
          <div className="sticky top-20">
            <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm">
              <img src={zomatoImg} alt="Zomato setup" className="rounded-md mb-4" />
              <h2 className="text-3xl font-bold mb-1">₹1,999</h2>
              <p className="text-sm text-gray-600 mb-3">Complete onboarding service</p>

              <button
               onClick={() => navigate('/checkout/zomato')}
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
              >
                Go to Cart
              </button>

              <button
               onClick={() => navigate('/checkout/zomato')}
                className="w-full border mt-2 border-purple-600 text-purple-700 py-2 rounded-lg hover:bg-purple-50"
              >
                Buy Now
              </button>

              <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

              {/* ✅ Features */}
              <ul className="text-sm mt-5 text-gray-700 space-y-2">
                <li>✔ Restaurant partner account setup</li>
                <li>✔ Logo, design, and branding materials</li>
                <li>✔ On-call and WhatsApp support</li>
                <li>✔ Fast-track listing service</li>
              </ul>

              {/* ✅ Coupon */}
              <div className="mt-6">
                <label className="text-sm font-medium text-gray-700 mb-1 block">Apply Coupon</label>
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="w-full border px-3 py-2 rounded text-sm mb-2"
                />
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZomatoOnboardingCourse;


