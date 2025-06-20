import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';


const ZomatoWhatYouGet = () => {
  return (
    <div className="bg-blue-150 text-gray-800 py-10 px-15 md:px-1 font-poppins">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* ✅ Header Section */}
        <div className="mb-6">

          <h2 className="text-3xl font-bold text-blue-1000 mb-2">What you'll get</h2>
          {/* <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">PAN/GST/FSSAI</span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium">Menu Design</span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">Delivery Activation</span>
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">WhatsApp Support</span>
          </div> */}
        </div>

        {/* ✅ Detailed List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Full Zomato Registration — PAN, GST, FSSAI setup assistance
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Menu Upload with categories, pricing, and dish images
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Restaurant Logo, Banner, QR Code, and Menu Card Design
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Payment Integration (Cashfree, Razorpay, UPI setup)
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Delivery Activation — Radius, Partner enablement & dashboard
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Listing Optimization — SEO, location tags, photo gallery
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              WhatsApp Support for document collection & live chat
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              Expert guidance to get faster Zomato approval
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ZomatoWhatYouGet;









// import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';

// const ZomatoWhatYouGet = () => {
//   return (
//     <div className="bg-blue-50 text-gray-800 py-16 px-6 md:px-5 font-poppins">
//       <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16">
//         {/* ✅ Header Section */}
//         <div className="mb-10">
//           <div className="text-sm text-gray-500 mb-2">Updated June 2025 • Hindi & English</div>
//           <h2 className="text-4xl font-bold text-blue-900 mb-4">What you'll get</h2>
//         </div>

//         {/* ✅ Detailed List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base md:text-lg">
//           <ul className="space-y-5">
//             <li className="flex items-start gap-4">
//               <FaCheckCircle className="text-green-500 mt-1 text-xl" />
//               Full Zomato Registration — PAN, GST, FSSAI setup assistance
//             </li>
//             <li className="flex items-start gap-4">
//               <FaCheckCircle className="text-green-500 mt-1 text-xl" />
//               Menu Upload with categories, pricing, and dish images
//             </li>
//             <li className="flex items-start gap-4">
//               <FaCheckCircle className="text-green-500 mt-1 text-xl" />
//               Restaurant Logo, Banner, QR Code, and Menu Card Design
//             </li>
//             <li className="flex items-start gap-4">
//               <FaCheckCircle className="text-green-500 mt-1 text-xl" />
//               Payment Integration (Cashfree, Razorpay, UPI setup)
//             </li>
//           </ul>
//           <ul className="space-y-5">
//             <li className="flex items-start gap-4">
//               <FaCheckCircle className="text-green-500 mt-1 text-xl" />
//               Delivery Activation — Radius, Partner enablement & dashboard
//             </li>
//             <li className="flex items-start gap-4">
//               <FaCheckCircle className="text-green-500 mt-1 text-xl" />
//               Listing Optimization — SEO, location tags, photo gallery
//             </li>
//             <li className="flex items-start gap-4">
//               <FaCheckCircle className="text-green-500 mt-1 text-xl" />
//               WhatsApp Support for document collection & live chat
//             </li>
//             <li className="flex items-start gap-4">
//               <FaCheckCircle className="text-green-500 mt-1 text-xl" />
//               Expert guidance to get faster Zomato approval
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ZomatoWhatYouGet;
