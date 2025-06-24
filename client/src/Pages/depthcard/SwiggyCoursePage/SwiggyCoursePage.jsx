// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import swiggyImg from '../../../assets/zomato3.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
// import SwiggyFAQ from './SwiggyFAQ';
// import SwiggyWhatYouGet from './SwiggyWhatYouGet';

// const SwiggyOnboardingCourse = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-orange-50 text-gray-900 min-h-screen py-10 px-4 sm:px-6 md:px-16 font-[Poppins]">
//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//         {/* ✅ Left Section */}
//         <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//           <p className="text-sm text-orange-600">Business & Marketing {'>'} Swiggy</p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             Swiggy Onboarding & Restaurant Launch A–Z
//           </h1>

//           <p className="text-base sm:text-lg text-gray-700">
//             This onboarding service is perfect for cloud kitchens, cafés, and food businesses. We’ll handle your registration, design, payments, and delivery setup — all in one place.
//           </p>

//           {/* ✅ Highlight Section */}
//           <div className="bg-orange-100 text-orange-900 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//             <div className="flex items-start gap-3">
//               <div className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Premium
//               </div>
//               <p className="text-sm">
//                 Expert setup, full documentation support & fast-track approval.
//                 <span className="ml-2 underline cursor-pointer hover:text-orange-600">See Onboarding Plans</span>
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-2 text-sm">
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold text-yellow-500">4.8</span> ★
//                 <span className="text-gray-600 hidden sm:inline">(152 reviews)</span>
//               </div>
//               <div className="text-gray-600 sm:border-l sm:border-gray-400 sm:pl-4">
//                 <span className="font-semibold">230+</span> onboarded
//               </div>
//             </div>
//           </div>

//           <p className="text-sm text-gray-500">
//             Delivered by <span className="text-orange-600 font-semibold">MagicScale Team</span>
//           </p>
//           <p className="text-sm text-gray-500">Last updated 06/2025 • Hindi & English</p>

//           {/* ✅ Features Section */}
//           <div className="mt-10">
//             <SwiggyWhatYouGet />
//             <h3 className="text-2xl font-semibold mb-6">More reasons to onboard</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[{
//                 icon: <FaTv className="mx-auto text-3xl mb-3 text-orange-500" />,
//                 title: "Live Dashboard Access",
//                 desc: "Track orders, payments, and delivery status directly from your dashboard."
//               },
//               {
//                 icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
//                 title: "Menu Download Setup",
//                 desc: "Enable downloadable menu for WhatsApp or printing."
//               },
//               {
//                 icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
//                 title: "Nationwide Coverage",
//                 desc: "We assist across India — metros, tier 2 cities, and remote areas."
//               },
//               {
//                 icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
//                 title: "Multi-Outlet Support",
//                 desc: "Easily onboard multiple branches or cloud kitchens."
//               }].map((item, idx) => (
//                 <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className="text-sm text-gray-600">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <SwiggyFAQ />
//         </div>

//         {/* ✅ Right: Sticky Checkout Bar */}
//         <div className="w-full md:w-[34%]">
//           <div className="md:sticky md:top-20 mt-10 md:mt-0">
//             <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto md:mx-0">
//               <img src={swiggyImg} alt="Swiggy setup" className="rounded-md mb-4 w-full object-cover" />
//               <h2 className="text-3xl font-bold mb-1">₹1,999</h2>
//               <p className="text-sm text-gray-600 mb-3">Complete onboarding service</p>

//               <button
//                 onClick={() => navigate('/checkout/swiggy')}
//                 className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
//               >
//                 Go to Cart
//               </button>

//               <button
//                 onClick={() => navigate('/checkout/swiggy')}
//                 className="w-full border mt-2 border-orange-600 text-orange-700 py-2 rounded-lg hover:bg-orange-50"
//               >
//                 Buy Now
//               </button>

//               <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

//               {/* ✅ Features List */}
//               <ul className="text-sm mt-5 text-gray-700 space-y-2">
//                 <li>✔ Restaurant partner account setup</li>
//                 <li>✔ Logo, design, and branding materials</li>
//                 <li>✔ On-call and WhatsApp support</li>
//                 <li>✔ Fast-track listing service</li>
//               </ul>

//               {/* ✅ Coupon Section */}
//               <div className="mt-6">
//                 <label className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
//                 <input
//                   type="text"
//                   placeholder="Enter coupon code"
//                   className="w-full border px-3 py-2 rounded text-sm mb-2"
//                 />
//                 <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//                   Apply Coupon
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SwiggyOnboardingCourse;














import React from 'react';
import { useNavigate } from 'react-router-dom';
import swiggyImg from '../../../assets/zomato3.png';
import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
import SwiggyFAQ from './SwiggyFAQ';
import SwiggyWhatYouGet from './SwiggyWhatYouGet';
import DocumentsRequired from './DocumentsRequired';

const SwiggyOnboardingCourse = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-orange-50 text-gray-900 min-h-screen pb-32 relative font-[Poppins]">
      <div className="px-4 sm:px-6 md:px-16">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
          {/* ✅ Left Section */}
          <div className="w-full md:w-[66%] space-y-6 md:pr-8">
            <p className="text-sm text-orange-600">Business & Marketing {'>'} Swiggy</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Swiggy Onboarding & Restaurant Launch A–Z
            </h1>

            <p className="text-base sm:text-lg text-gray-700">
              This onboarding service is perfect for cloud kitchens, cafés, and food businesses. We’ll handle your registration, design, payments, and delivery setup — all in one place.
            </p>

            {/* ✅ Highlight Section */}
            <div className="bg-orange-100 text-orange-900 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Premium
                </div>
                <p className="text-sm">
                  Expert setup, full documentation support & fast-track approval.
                  <span className="ml-2 underline cursor-pointer hover:text-orange-600">See Onboarding Plans</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-yellow-500">4.8</span> ★
                  <span className="text-gray-600 hidden sm:inline">(152 reviews)</span>
                </div>
                <div className="text-gray-600 sm:border-l sm:border-gray-400 sm:pl-4">
                  <span className="font-semibold">230+</span> onboarded
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Delivered by <span className="text-orange-600 font-semibold">MagicScale Team</span>
            </p>
            <p className="text-sm text-gray-500">Last updated 06/2025 • Hindi & English</p>

            <div className="mt-10">
            <DocumentsRequired/>
              <SwiggyWhatYouGet />
              <h3 className="text-2xl font-semibold mb-6">More reasons to onboard</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[{
                  icon: <FaTv className="mx-auto text-3xl mb-3 text-orange-500" />,
                  title: "Live Dashboard Access",
                  desc: "Track orders, payments, and delivery status directly from your dashboard."
                },
                {
                  icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
                  title: "Menu Download Setup",
                  desc: "Enable downloadable menu for WhatsApp or printing."
                },
                {
                  icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
                  title: "Nationwide Coverage",
                  desc: "We assist across India — metros, tier 2 cities, and remote areas."
                },
                {
                  icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
                  title: "Multi-Outlet Support",
                  desc: "Easily onboard multiple branches or cloud kitchens."
                }].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
                    {item.icon}
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <SwiggyFAQ />
          </div>

          {/* ✅ Right Sticky Checkout (Desktop) */}
          <div className="hidden md:block md:w-[34%]">
            <div className="sticky top-20">
              <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm ml-auto">
                <img src={swiggyImg} alt="Swiggy setup" className="rounded-md mb-4 w-full object-cover h-40" />
                <h2 className="text-3xl font-bold mb-1">₹1,999</h2>
                <p className="text-sm text-gray-600 mb-3">Complete onboarding service</p>

                <button
                  onClick={() => navigate('/checkout/swiggy')}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
                >
                  Go to Cart
                </button>

                <button
                  onClick={() => navigate('/checkout/swiggy')}
                  className="w-full border mt-2 border-orange-600 text-orange-700 py-2 rounded-lg hover:bg-orange-50"
                >
                  Buy Now
                </button>

                <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

                <ul className="text-sm mt-5 text-gray-700 space-y-2">
                  <li>✔ Restaurant partner account setup</li>
                  <li>✔ Logo, design, and branding materials</li>
                  <li>✔ On-call and WhatsApp support</li>
                  <li>✔ Fast-track listing service</li>
                </ul>

                <div className="mt-6">
                  <label className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
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

      {/* ✅ Mobile Floating Summary Bar */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white shadow-inner px-4 py-3 z-50 border-t flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold">₹1,999</h4>
          <p className="text-xs text-gray-600 truncate max-w-[180px]">Complete onboarding service</p>
        </div>
        <button
          onClick={() => navigate('/checkout/swiggy')}
          className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SwiggyOnboardingCourse;
