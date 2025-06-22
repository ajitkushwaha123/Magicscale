// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import fssaiImg from '../../../assets/zomato3.png';
// import fssaiImg from "../../../assets/fssai.png";
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
// import FssaiFAQ from './FssaiFAQ';
// import FssaiWhatYouGet from './FssaiWhatYouGet';

// const FssaiLicenseCourse = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-green-50 text-gray-900 min-h-screen py-10 px-4 sm:px-6 md:px-16 font-[Poppins]">
//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//         {/* ✅ Left Section */}
//         <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//           <p className="text-sm text-green-700">Legal Services {'>'} FSSAI License</p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             Get Your FSSAI License with Expert Guidance
//           </h1>

//           <p className="text-base sm:text-lg text-gray-700">
//             Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
//           </p>

//           {/* ✅ Highlight Section */}
//           <div className="bg-green-100 text-green-900 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//             <div className="flex items-start gap-3">
//               <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Expert Service
//               </div>
//               <p className="text-sm">
//                 Fast processing, consultation, and 100% document support.
//                 <span className="ml-2 underline cursor-pointer hover:text-green-700">See License Plans</span>
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-2 text-sm">
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold text-yellow-500">4.9</span> ★
//                 <span className="text-gray-600 hidden sm:inline">(190+ reviews)</span>
//               </div>
//               <div className="text-gray-600 sm:border-l sm:border-gray-400 sm:pl-4">
//                 <span className="font-semibold">500+</span> licenses issued
//               </div>
//             </div>
//           </div>

//           <p className="text-sm text-gray-500">
//             Powered by <span className="text-green-700 font-semibold">MagicScale Legal Team</span>
//           </p>
//           <p className="text-sm text-gray-500">Last updated 06/2025 • Hindi & English</p>

//           {/* ✅ Features Section */}
//           <div className="mt-10">
//             <FssaiWhatYouGet />

//             <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[{
//                 icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />,
//                 title: "Online Filing & Tracking",
//                 desc: "Get real-time updates and license status from our dashboard."
//               },
//               {
//                 icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
//                 title: "All Docs Managed",
//                 desc: "We handle your forms, photos, ID proofs, and declarations."
//               },
//               {
//                 icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
//                 title: "PAN India Service",
//                 desc: "Apply from anywhere — all states & cities covered."
//               },
//               {
//                 icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
//                 title: "Quick & Hassle-Free",
//                 desc: "End-to-end support for new, renew, and modification cases."
//               }].map((item, idx) => (
//                 <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className="text-sm text-gray-600">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <FssaiFAQ />
//         </div>

//         {/* ✅ Right: Sticky Checkout Bar */}
//         <div className="w-full md:w-[34%]">
//           <div className="md:sticky md:top-20 mt-10 md:mt-0">
//             <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto md:mx-0">
//               <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover" />
//               <h2 className="text-3xl font-bold mb-1">₹999</h2>
//               <p className="text-sm text-gray-600 mb-3">Complete FSSAI License Assistance</p>

//               <button
//                 onClick={() => navigate('/checkout/fssai')}
//                 className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 Go to Cart
//               </button>

//               <button
//                 onClick={() => navigate('/checkout/fssai')}
//                 className="w-full border mt-2 border-green-600 text-green-700 py-2 rounded-lg hover:bg-green-50"
//               >
//                 Buy Now
//               </button>

//               <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

//               <ul className="text-sm mt-5 text-gray-700 space-y-2">
//                 <li>✔ Basic, State, or Central license</li>
//                 <li>✔ All form submissions handled</li>
//                 <li>✔ Phone and WhatsApp support</li>
//                 <li>✔ Fastest approval process</li>
//               </ul>

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

// export default FssaiLicenseCourse;










// // ✅ Fully updated FSSAI License page with dropdown, dynamic price, floating checkout
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import fssaiImg from '../../../assets/fssai.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
// import FssaiFAQ from './FssaiFAQ';
// import FssaiWhatYouGet from './FssaiWhatYouGet';

// const plans = [
//   { label: 'FSSAI Registration - 1 Year', price: 999 },
//   { label: 'FSSAI Registration - 3 Years', price: 1499 },
//   { label: 'FSSAI Registration - 5 Years', price: 1999 },
//   { label: 'FSSAI State License - 1 Year', price: 1299 },
//   { label: 'FSSAI Central License - 1 Year', price: 1999 },
// ];

// const FssaiLicenseCourse = () => {
//   const navigate = useNavigate();
//   const [selectedPlan, setSelectedPlan] = useState(plans[0]);
//   const [quantity, setQuantity] = useState(1);

//   const totalPrice = selectedPlan.price * quantity;

//   return (

//     <div className="bg-green-50 text-gray-900 min-h-screen py-10 px-4 sm:px-6 md:px-16 font-[Poppins]">
//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//         {/* ✅ Left Section */}
//         <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//           <p className="text-sm text-green-700">Legal Services {'>'} FSSAI License</p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             Get Your FSSAI License with Expert Guidance
//           </h1>

//           <p className="text-base sm:text-lg text-gray-700">
//             Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
//           </p>

//           {/* ✅ Highlight Section */}
//           <div className="bg-green-100 text-green-900 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//             <div className="flex items-start gap-3">
//               <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Expert Service
//               </div>
//               <p className="text-sm">
//                 Fast processing, consultation, and 100% document support.
//                 <span className="ml-2 underline cursor-pointer hover:text-green-700">See License Plans</span>
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-2 text-sm">
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold text-yellow-500">4.9</span> ★
//                 <span className="text-gray-600 hidden sm:inline">(190+ reviews)</span>
//               </div>
//               <div className="text-gray-600 sm:border-l sm:border-gray-400 sm:pl-4">
//                 <span className="font-semibold">500+</span> licenses issued
//               </div>
//             </div>
//           </div>

//           <p className="text-sm text-gray-500">
//             Powered by <span className="text-green-700 font-semibold">MagicScale Legal Team</span>
//           </p>
//           <p className="text-sm text-gray-500">Last updated 06/2025 • Hindi & English</p>

//           {/* ✅ Plan Selector */}
//           <div className="bg-white border rounded-lg shadow p-4 space-y-3">
//             <label className="block text-sm font-medium text-gray-700">Select License Plan</label>
//             <select
//               value={selectedPlan.label}
//               onChange={(e) => {
//                 const selected = plans.find((p) => p.label === e.target.value);
//                 setSelectedPlan(selected);
//               }}
//               className="w-full border rounded px-3 py-2 text-sm"
//             >
//               {plans.map((plan) => (
//                 <option key={plan.label} value={plan.label}>{plan.label}</option>
//               ))}
//             </select>

//             <div className="flex items-center gap-2">
//               <label className="text-sm font-medium">Quantity:</label>
//               <input
//                 type="number"
//                 value={quantity}
//                 min={1}
//                 onChange={(e) => setQuantity(Number(e.target.value))}
//                 className="w-20 px-2 py-1 border rounded"
//               />
//             </div>
//           </div>

//           <FssaiWhatYouGet />

//           <h3 className="text-2xl font-semibold mb-6 mt-10">Why Choose Us?</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[{
//               icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />,
//               title: "Online Filing & Tracking",
//               desc: "Get real-time updates and license status from our dashboard."
//             }, {
//               icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />,
//               title: "All Docs Managed",
//               desc: "We handle your forms, photos, ID proofs, and declarations."
//             }, {
//               icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />,
//               title: "PAN India Service",
//               desc: "Apply from anywhere — all states & cities covered."
//             }, {
//               icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />,
//               title: "Quick & Hassle-Free",
//               desc: "End-to-end support for new, renew, and modification cases."
//             }].map((item, idx) => (
//               <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                 {item.icon}
//                 <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                 <p className="text-sm text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>

//           <FssaiFAQ />
//         </div>

//         {/* ✅ Right Floating Checkout */}
//         <div className="w-full md:w-[34%] md:sticky md:top-20 z-40">
//           <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto md:mx-0 fixed bottom-0 left-0 right-0 md:static z-50 border-t md:border-none">
//             <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover hidden md:block" />
//             <h2 className="text-2xl font-bold mb-1 md:text-3xl">₹{totalPrice}</h2>
//             <p className="text-sm text-gray-600 mb-3 truncate">{selectedPlan.label}</p>

//             <button
//               onClick={() => navigate('/checkout/fssai')}
//               className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//             >
//               Go to Cart
//             </button>

//             <button
//               onClick={() => navigate('/checkout/fssai')}
//               className="w-full border mt-2 border-green-600 text-green-700 py-2 rounded-lg hover:bg-green-50"
//             >
//               Buy Now
//             </button>

//             <p className="text-xs text-gray-500 text-center mt-2 hidden md:block">30-Day Money-Back Guarantee</p>

//             <ul className="text-sm mt-5 text-gray-700 space-y-2 hidden md:block">
//               <li>✔ Basic, State, or Central license</li>
//               <li>✔ All form submissions handled</li>
//               <li>✔ Phone and WhatsApp support</li>
//               <li>✔ Fastest approval process</li>
//             </ul>

//             <div className="mt-6 hidden md:block">
//               <label className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
//               <input
//                 type="text"
//                 placeholder="Enter coupon code"
//                 className="w-full border px-3 py-2 rounded text-sm mb-2"
//               />
//               <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//                 Apply Coupon
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FssaiLicenseCourse;















// // ✅ Fully updated FSSAI License page with dropdown, dynamic price, floating checkout
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import fssaiImg from '../../../assets/fssai.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
// import FssaiFAQ from './FssaiFAQ';
// import FssaiWhatYouGet from './FssaiWhatYouGet';

// const plans = [
//   { label: 'Instant FSSAI Central License - 1 Year', price: 2999, features: ['Instant Application Preparation', 'Instant Application Filing', '1 Year Central License', 'LEDGERS Platform'] },
//   { label: 'FSSAI State License - Manufacturer, Re labeler, Re packer - 5 Years', price: 3499, features: ['Application Preparation', 'Application Filing', '5 Years State License', 'LEDGERS Platform'] },
//   { label: 'FSSAI Registration - 1 Year', price: 999, features: ['Basic Application', 'Filing Support', '1 Year License'] },
//   { label: 'FSSAI Registration - 3 Years', price: 1499, features: ['Basic Application', 'Filing Support', '3 Year License'] },
//   { label: 'FSSAI Registration - 5 Years', price: 1999, features: ['Basic Application', 'Filing Support', '5 Year License'] },
//   { label: 'FSSAI State License - 1 Year', price: 1299, features: ['Application Prep', 'State License - 1 Year'] },
//   { label: 'FSSAI Central License - 1 Year', price: 1999, features: ['Central Filing', '1 Year License'] },
// ];

// const FssaiLicenseCourse = () => {
//   const navigate = useNavigate();
//   const [selectedPlan, setSelectedPlan] = useState(plans[0]);
//   const [quantity, setQuantity] = useState(1);
//   const totalPrice = selectedPlan.price * quantity;

//   return (
     
//     <div className="bg-green-50 text-gray-900 min-h-screen py-10 px-4 sm:px-6 md:px-16 font-[Poppins]">
//       <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//         {/* ✅ Left Section */}
//         <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//           <p className="text-sm text-green-700">Legal Services {'>'} FSSAI License</p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//             Get Your FSSAI License with Expert Guidance
//           </h1>

//           <p className="text-base sm:text-lg text-gray-700">
//             Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
//           </p>

//           {/* ✅ Highlight Section */}
//           <div className="bg-green-100 text-green-900 rounded-lg p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//             <div className="flex items-start gap-3">
//               <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
//                 Expert Service
//               </div>
//               <p className="text-sm">
//                 Fast processing, consultation, and 100% document support.
//                 <span className="ml-2 underline cursor-pointer hover:text-green-700">See License Plans</span>
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-2 text-sm">
//               <div className="flex items-center gap-1">
//                 <span className="font-semibold text-yellow-500">4.9</span> ★
//                 <span className="text-gray-600 hidden sm:inline">(190+ reviews)</span>
//               </div>
//               <div className="text-gray-600 sm:border-l sm:border-gray-400 sm:pl-4">
//                 <span className="font-semibold">500+</span> licenses issued
//               </div>
//             </div>
//           </div>

//           <p className="text-sm text-gray-500">
//             Powered by <span className="text-green-700 font-semibold">MagicScale Legal Team</span>
//           </p>
//           <p className="text-sm text-gray-500">Last updated 06/2025 • Hindi & English</p>

//           {/* ✅ Plan Selector */}
//           <div className="bg-white border rounded-lg shadow p-4 space-y-3 sticky top-16 z-30">
//             <label className="block text-sm font-medium text-gray-700">Select License Plan</label>
//             <select
//               value={selectedPlan.label}
//               onChange={(e) => {
//                 const selected = plans.find((p) => p.label === e.target.value);
//                 setSelectedPlan(selected);
//               }}
//               className="w-full border rounded px-3 py-2 text-sm"
//             >
//               {plans.map((plan) => (
//                 <option key={plan.label} value={plan.label}>{plan.label}</option>
//               ))}
//             </select>

//             <div className="flex items-center gap-2">
//               <label className="text-sm font-medium">Quantity:</label>
//               <input
//                 type="number"
//                 value={quantity}
//                 min={1}
//                 onChange={(e) => setQuantity(Number(e.target.value))}
//                 className="w-20 px-2 py-1 border rounded"
//               />
//             </div>

//             {/* Exclusive Offer Summary */}
//             <div className="bg-green-100 rounded p-4 mt-4">
//               <h3 className="font-semibold text-green-800 mb-2">2 Exclusive Offers</h3>
//               <ul className="list-disc pl-4 text-sm text-green-700 space-y-1">
//                 {selectedPlan.features.map((feat, idx) => (
//                   <li key={idx}>{feat}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <FssaiWhatYouGet />

//           <h3 className="text-2xl font-semibold mb-6 mt-10">Why Choose Us?</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[{
//               icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />, title: "Online Filing & Tracking", desc: "Get real-time updates and license status from our dashboard."
//             }, {
//               icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />, title: "All Docs Managed", desc: "We handle your forms, photos, ID proofs, and declarations."
//             }, {
//               icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />, title: "PAN India Service", desc: "Apply from anywhere — all states & cities covered."
//             }, {
//               icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />, title: "Quick & Hassle-Free", desc: "End-to-end support for new, renew, and modification cases."
//             }].map((item, idx) => (
//               <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                 {item.icon}
//                 <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                 <p className="text-sm text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>

//           <FssaiFAQ />
//         </div>

//         {/* ✅ Right Floating Checkout */}
//         <div className="w-full md:w-[34%] sticky bottom-0 md:top-20 z-40">
//           <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto md:mx-0">
//             <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover" />
//             <h2 className="text-3xl font-bold mb-1">₹{totalPrice}</h2>
//             <p className="text-sm text-gray-600 mb-3">{selectedPlan.label}</p>

//             <button
//               onClick={() => navigate('/checkout/fssai')}
//               className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//             >
//               Go to Cart
//             </button>

//             <button
//               onClick={() => navigate('/checkout/fssai')}
//               className="w-full border mt-2 border-green-600 text-green-700 py-2 rounded-lg hover:bg-green-50"
//             >
//               Buy Now
//             </button>

//             <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

//             <ul className="text-sm mt-5 text-gray-700 space-y-2">
//               {selectedPlan.features.map((feat, idx) => (
//                 <li key={idx}>✔ {feat}</li>
//               ))}
//             </ul>

//             <div className="mt-6">
//               <label className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
//               <input
//                 type="text"
//                 placeholder="Enter coupon code"
//                 className="w-full border px-3 py-2 rounded text-sm mb-2"
//               />
//               <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//                 Apply Coupon
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FssaiLicenseCourse;





// // ✅ Fully updated FSSAI License page with dynamic price, floating and responsive checkout bar
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import fssaiImg from '../../../assets/fssai.png';
// import bannerImg from '../../../assets/Bannerfssai.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
// import FssaiFAQ from './FssaiFAQ';
// import FssaiWhatYouGet from './FssaiWhatYouGet';

// const plans = [
//   { label: 'Instant FSSAI Central License - 1 Year', price: 2999, features: ['Instant Application Preparation', 'Instant Application Filing', '1 Year Central License', 'LEDGERS Platform'] },
//   { label: 'FSSAI State License - Manufacturer, Re labeler, Re packer - 5 Years', price: 3499, features: ['Application Preparation', 'Application Filing', '5 Years State License', 'LEDGERS Platform'] },
//   { label: 'FSSAI Registration - 1 Year', price: 999, features: ['Basic Application', 'Filing Support', '1 Year License'] },
//   { label: 'FSSAI Registration - 3 Years', price: 1499, features: ['Basic Application', 'Filing Support', '3 Year License'] },
//   { label: 'FSSAI Registration - 5 Years', price: 1999, features: ['Basic Application', 'Filing Support', '5 Year License'] },
//   { label: 'FSSAI State License - 1 Year', price: 1299, features: ['Application Prep', 'State License - 1 Year'] },
//   { label: 'FSSAI Central License - 1 Year', price: 1999, features: ['Central Filing', '1 Year License'] },
// ];

// const FssaiLicenseCourse = () => {
//   const navigate = useNavigate();
//   const [selectedPlan, setSelectedPlan] = useState(plans[0]);
//   const [quantity, setQuantity] = useState(1);
//   const totalPrice = selectedPlan.price * quantity;
//   const originalPos = useRef(null);

//   // Floating behavior on scroll (desktop)
//   useEffect(() => {
//     const checkout = document.getElementById('floating-checkout');
//     if (!checkout) return;
//     originalPos.current = checkout.offsetTop;

//     const handleScroll = () => {
//       const scrollY = window.scrollY || window.pageYOffset;
//       if (scrollY + 100 >= originalPos.current) {
//         checkout.classList.add('md:fixed', 'md:top-6');
//       } else {
//         checkout.classList.remove('md:fixed', 'md:top-6');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="bg-green-50 text-gray-900 min-h-screen pb-40 relative font-[Poppins]">
//       {/* ✅ Top Banner - Enlarged */}
//       <div className="w-full h-[300px] sm:h-[400px] md:h-[480px] overflow-hidden mb-6">
//         <img src={bannerImg} alt="Banner" className="w-full h-full object-cover object-center" />
//       </div>

//       <div className="px-4 sm:px-6 md:px-16">
//         <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//           {/* ✅ Left Section */}
//           <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//             <p className="text-sm text-green-700">Legal Services {'>'} FSSAI License</p>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//               Get Your FSSAI License with Expert Guidance
//             </h1>

//             <p className="text-base sm:text-lg text-gray-700">
//               Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
//             </p>

//             {/* ✅ Plan Selector */}
//             <div className="bg-white border rounded-lg shadow p-4 space-y-3">
//               <label className="block text-sm font-medium text-gray-700">Select License Plan</label>
//               <select
//                 value={selectedPlan.label}
//                 onChange={(e) => {
//                   const selected = plans.find((p) => p.label === e.target.value);
//                   setSelectedPlan(selected);
//                 }}
//                 className="w-full border rounded px-3 py-2 text-sm"
//               >
//                 {plans.map((plan) => (
//                   <option key={plan.label} value={plan.label}>{plan.label}</option>
//                 ))}
//               </select>

//               <div className="flex items-center gap-2">
//                 <label className="text-sm font-medium">Quantity:</label>
//                 <input
//                   type="number"
//                   value={quantity}
//                   min={1}
//                   onChange={(e) => setQuantity(Number(e.target.value))}
//                   className="w-20 px-2 py-1 border rounded"
//                 />
//               </div>

//               {/* Exclusive Offer Summary */}
//               <div className="bg-green-100 rounded p-4 mt-4">
//                 <h3 className="font-semibold text-green-800 mb-2">2 Exclusive Offers</h3>
//                 <ul className="list-disc pl-4 text-sm text-green-700 space-y-1">
//                   {selectedPlan.features.map((feat, idx) => (
//                     <li key={idx}>{feat}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <FssaiWhatYouGet />

//             <h3 className="text-2xl font-semibold mb-6 mt-10">Why Choose Us?</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[{
//                 icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />, title: "Online Filing & Tracking", desc: "Get real-time updates and license status from our dashboard."
//               }, {
//                 icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />, title: "All Docs Managed", desc: "We handle your forms, photos, ID proofs, and declarations."
//               }, {
//                 icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />, title: "PAN India Service", desc: "Apply from anywhere — all states & cities covered."
//               }, {
//                 icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />, title: "Quick & Hassle-Free", desc: "End-to-end support for new, renew, and modification cases."
//               }].map((item, idx) => (
//                 <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className="text-sm text-gray-600">{item.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <FssaiFAQ />
//           </div>

//           {/* ✅ Right Floating Checkout Bar */}
//           <div className="hidden md:block md:w-[34%]">
//             <div id="floating-checkout" className="transition-all duration-300">
//               <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm ml-auto">
//                 <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover h-40" />
//                 <h2 className="text-2xl font-bold mb-1">₹{totalPrice}</h2>
//                 <p className="text-sm text-gray-600 mb-3">{selectedPlan.label}</p>

//                 <button
//                   onClick={() => navigate('/checkout/fssai')}
//                   className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//                 >
//                   Go to Cart
//                 </button>

//                 <button
//                   onClick={() => navigate('/checkout/fssai')}
//                   className="w-full border mt-2 border-green-600 text-green-700 py-2 rounded-lg hover:bg-green-50"
//                 >
//                   Buy Now
//                 </button>

//                 <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

//                 <ul className="text-sm mt-5 text-gray-700 space-y-2">
//                   {selectedPlan.features.map((feat, idx) => (
//                     <li key={idx}>✔ {feat}</li>
//                   ))}
//                 </ul>

//                 <div className="mt-6">
//                   <label className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
//                   <input
//                     type="text"
//                     placeholder="Enter coupon code"
//                     className="w-full border px-3 py-2 rounded text-sm mb-2"
//                   />
//                   <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//                     Apply Coupon
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Mobile Bottom Floating Summary */}
//       <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white shadow-inner px-4 py-3 z-50 border-t flex items-center justify-between">
//         <div>
//           <h4 className="text-lg font-semibold">₹{totalPrice}</h4>
//           <p className="text-xs text-gray-600 truncate max-w-[180px]">{selectedPlan.label}</p>
//         </div>
//         <button
//           onClick={() => navigate('/checkout/fssai')}
//           className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FssaiLicenseCourse;














// ✅ Fully updated FSSAI License page with dynamic price, floating and responsive checkout bar
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import fssaiImg from '../../../assets/fssai.png';
import bannerImg from '../../../assets/Bannerfssai.png';
import categoryIcon from '../../../assets/fssai2.png';
import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
import FssaiFAQ from './FssaiFAQ';
import FssaiWhatYouGet from './FssaiWhatYouGet';
import SiteFooter from './SiteFooter';

const plans = [
  { label: 'Instant FSSAI Central License - 1 Year', price: 2999, features: ['Instant Application Preparation', 'Instant Application Filing', '1 Year Central License', 'LEDGERS Platform'] },
  { label: 'FSSAI State License - Manufacturer, Re labeler, Re packer - 5 Years', price: 3499, features: ['Application Preparation', 'Application Filing', '5 Years State License', 'LEDGERS Platform'] },
  { label: 'FSSAI Registration - 1 Year', price: 999, features: ['Basic Application', 'Filing Support', '1 Year License'] },
  { label: 'FSSAI Registration - 3 Years', price: 1499, features: ['Basic Application', 'Filing Support', '3 Year License'] },
  { label: 'FSSAI Registration - 5 Years', price: 1999, features: ['Basic Application', 'Filing Support', '5 Year License'] },
  { label: 'FSSAI State License - 1 Year', price: 1299, features: ['Application Prep', 'State License - 1 Year'] },
  { label: 'FSSAI Central License - 1 Year', price: 1999, features: ['Central Filing', '1 Year License'] },
];

const FssaiLicenseCourse = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [quantity, setQuantity] = useState(1);
  const totalPrice = selectedPlan.price * quantity;
  const originalPos = useRef(null);

  // Floating behavior on scroll (desktop)
  useEffect(() => {
    const checkout = document.getElementById('floating-checkout');
    if (!checkout) return;
    originalPos.current = checkout.offsetTop;

    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY + 100 >= originalPos.current) {
        checkout.classList.add('md:fixed', 'md:top-6');
      } else {
        checkout.classList.remove('md:fixed', 'md:top-6');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-green-50 text-gray-900 min-h-screen pb-40 relative font-[Poppins]">
      {/* ✅ Top Banner - Enlarged */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[480px] overflow-hidden mb-6">
        <img src={bannerImg} alt="Banner" className="w-full h-full object-cover object-center" />
      </div>

      <div className="px-4 sm:px-6 md:px-16">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
          {/* ✅ Left Section */}
          <div className="w-full md:w-[66%] space-y-6 md:pr-8">
            <div className="flex items-center gap-3 mb-2">
              <img src={categoryIcon} alt="Category Icon" className="w-10 h-10 object-contain" />
              <p className="text-sm text-green-700">Legal Services {'>'} FSSAI License</p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Get Your FSSAI License with Expert Guidance
            </h1>

            <p className="text-base sm:text-lg text-gray-700">
              Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
            </p>

            {/* ✅ Plan Selector and Image side-by-side */}
            <div className="flex flex-col md:flex-row bg-white border rounded-lg shadow p-4 gap-6">
              <div className="md:w-1/2 space-y-3">
                <label className="block text-sm font-medium text-gray-700">Select License Plan</label>
                <select
                  value={selectedPlan.label}
                  onChange={(e) => {
                    const selected = plans.find((p) => p.label === e.target.value);
                    setSelectedPlan(selected);
                  }}
                  className="w-full border rounded px-3 py-2 text-sm"
                >
                  {plans.map((plan) => (
                    <option key={plan.label} value={plan.label}>{plan.label}</option>
                  ))}
                </select>

                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium">Quantity:</label>
                  <input
                    type="number"
                    value={quantity}
                    min={1}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-20 px-2 py-1 border rounded"
                  />
                </div>

                <div className="bg-green-100 rounded p-4 mt-4">
                  <h3 className="font-semibold text-green-800 mb-2">2 Exclusive Offers</h3>
                  <ul className="list-disc pl-4 text-sm text-green-700 space-y-1">
                    {selectedPlan.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2">
                <img src={categoryIcon} alt="FSSAI Visual" className="w-full h-auto rounded-md" />
              </div>
            </div>

            <FssaiWhatYouGet />

            <h3 className="text-2xl font-semibold mb-6 mt-10">Why Choose Us?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />, title: "Online Filing & Tracking", desc: "Get real-time updates and license status from our dashboard."
              }, {
                icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />, title: "All Docs Managed", desc: "We handle your forms, photos, ID proofs, and declarations."
              }, {
                icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />, title: "PAN India Service", desc: "Apply from anywhere — all states & cities covered."
              }, {
                icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />, title: "Quick & Hassle-Free", desc: "End-to-end support for new, renew, and modification cases."
              }].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
                  {item.icon}
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <FssaiFAQ />
            <SiteFooter />
          </div>

          {/* ✅ Right Floating Checkout Bar */}
          <div className="hidden md:block md:w-[34%]">
            <div id="floating-checkout" className="transition-all duration-300">
              <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm ml-auto">
                <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover h-40" />
                <h2 className="text-2xl font-bold mb-1">₹{totalPrice}</h2>
                <p className="text-sm text-gray-600 mb-3">{selectedPlan.label}</p>

                <button
                  onClick={() => navigate('/checkout/fssai')}
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Go to Cart
                </button>

                <button
                  onClick={() => navigate('/checkout/fssai')}
                  className="w-full border mt-2 border-green-600 text-green-700 py-2 rounded-lg hover:bg-green-50"
                >
                  Buy Now
                </button>

                <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

                <ul className="text-sm mt-5 text-gray-700 space-y-2">
                  {selectedPlan.features.map((feat, idx) => (
                    <li key={idx}>✔ {feat}</li>
                  ))}
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

      {/* ✅ Mobile Bottom Floating Summary */}
      <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white shadow-inner px-4 py-3 z-50 border-t flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold">₹{totalPrice}</h4>
          <p className="text-xs text-gray-600 truncate max-w-[180px]">{selectedPlan.label}</p>
        </div>
        <button
          onClick={() => navigate('/checkout/fssai')}
          className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default FssaiLicenseCourse;















// // ✅ Fully updated FSSAI License page with dynamic price, floating and responsive checkout bar
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import fssaiImg from '../../../assets/fssai.png';
// import bannerImg from '../../../assets/Bannerfssai.png';
// import categoryIcon from '../../../assets/fssai2.png';
// import { FaTv, FaDownload, FaSatelliteDish, FaSmile } from 'react-icons/fa';
// import FssaiFAQ from './FssaiFAQ';
// import FssaiWhatYouGet from './FssaiWhatYouGet';
// import SiteFooter from './SiteFooter';

// const plans = [
//   { label: 'Instant FSSAI Central License - 1 Year', price: 2999, features: ['Instant Application Preparation', 'Instant Application Filing', '1 Year Central License', 'LEDGERS Platform'] },
//   { label: 'FSSAI State License - Manufacturer, Re labeler, Re packer - 5 Years', price: 3499, features: ['Application Preparation', 'Application Filing', '5 Years State License', 'LEDGERS Platform'] },
//   { label: 'FSSAI Registration - 1 Year', price: 999, features: ['Basic Application', 'Filing Support', '1 Year License'] },
//   { label: 'FSSAI Registration - 3 Years', price: 1499, features: ['Basic Application', 'Filing Support', '3 Year License'] },
//   { label: 'FSSAI Registration - 5 Years', price: 1999, features: ['Basic Application', 'Filing Support', '5 Year License'] },
//   { label: 'FSSAI State License - 1 Year', price: 1299, features: ['Application Prep', 'State License - 1 Year'] },
//   { label: 'FSSAI Central License - 1 Year', price: 1999, features: ['Central Filing', '1 Year License'] },
// ];

// const FssaiLicenseCourse = () => {
//   const navigate = useNavigate();
//   const [selectedPlan, setSelectedPlan] = useState(plans[0]);
//   const [quantity, setQuantity] = useState(1);
//   const totalPrice = selectedPlan.price * quantity;
//   const footerRef = useRef(null);
//   const checkoutRef = useRef(null);
//   const bannerRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!checkoutRef.current || !footerRef.current || !bannerRef.current) return;

//       const scrollY = window.scrollY || window.pageYOffset;
//       const footerTop = footerRef.current.getBoundingClientRect().top + scrollY;
//       const bannerBottom = bannerRef.current.getBoundingClientRect().bottom + scrollY;
//       const checkoutHeight = checkoutRef.current.offsetHeight;

//       if (scrollY + checkoutHeight + 80 >= footerTop) {
//         checkoutRef.current.classList.remove('md:fixed', 'md:top-6');
//         checkoutRef.current.style.position = 'absolute';
//         checkoutRef.current.style.top = `${footerTop - checkoutHeight - 100}px`;
//       } else if (scrollY + 80 <= bannerBottom) {
//         checkoutRef.current.classList.remove('md:fixed', 'md:top-6');
//         checkoutRef.current.style.position = 'absolute';
//         checkoutRef.current.style.top = `${bannerBottom}px`;
//       } else {
//         checkoutRef.current.classList.add('md:fixed', 'md:top-6');
//         checkoutRef.current.style.position = '';
//         checkoutRef.current.style.top = '';
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="bg-green-50 text-gray-900 min-h-screen pb-40 relative font-[Poppins]">
//       {/* ✅ Top Banner - Enlarged */}
//       <div ref={bannerRef} className="w-full h-[300px] sm:h-[400px] md:h-[480px] overflow-hidden mb-6">
//         <img src={bannerImg} alt="Banner" className="w-full h-full object-cover object-center" />
//       </div>

//       <div className="px-4 sm:px-6 md:px-16">
//         <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
//           {/* ✅ Left Section */}
//           <div className="w-full md:w-[66%] space-y-6 md:pr-8">
//             <div className="flex items-center gap-3 mb-2">
//               <img src={categoryIcon} alt="Category Icon" className="w-10 h-10 object-contain" />
//               <p className="text-sm text-green-700">Legal Services {'>'} FSSAI License</p>
//             </div>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//               Get Your FSSAI License with Expert Guidance
//             </h1>

//             <p className="text-base sm:text-lg text-gray-700">
//               Whether you're a home kitchen, café, cloud kitchen, or multi-outlet restaurant, we’ll help you apply, submit documents, and get your FSSAI Basic, State, or Central license smoothly.
//             </p>

//             {/* ✅ Plan Selector and Image side-by-side */}
//             <div className="flex flex-col md:flex-row bg-white border rounded-lg shadow p-4 gap-6">
//               <div className="md:w-1/2 space-y-3">
//                 <label className="block text-sm font-medium text-gray-700">Select License Plan</label>
//                 <select
//                   value={selectedPlan.label}
//                   onChange={(e) => {
//                     const selected = plans.find((p) => p.label === e.target.value);
//                     setSelectedPlan(selected);
//                   }}
//                   className="w-full border rounded px-3 py-2 text-sm"
//                 >
//                   {plans.map((plan) => (
//                     <option key={plan.label} value={plan.label}>{plan.label}</option>
//                   ))}
//                 </select>

//                 <div className="flex items-center gap-2">
//                   <label className="text-sm font-medium">Quantity:</label>
//                   <input
//                     type="number"
//                     value={quantity}
//                     min={1}
//                     onChange={(e) => setQuantity(Number(e.target.value))}
//                     className="w-20 px-2 py-1 border rounded"
//                   />
//                 </div>

//                 <div className="bg-green-100 rounded p-4 mt-4">
//                   <h3 className="font-semibold text-green-800 mb-2">2 Exclusive Offers</h3>
//                   <ul className="list-disc pl-4 text-sm text-green-700 space-y-1">
//                     {selectedPlan.features.map((feat, idx) => (
//                       <li key={idx}>{feat}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="md:w-1/2">
//                 <img src={categoryIcon} alt="FSSAI Visual" className="w-full h-auto rounded-md" />
//               </div>
//             </div>

//             <FssaiWhatYouGet />

//             <h3 className="text-2xl font-semibold mb-6 mt-10">Why Choose Us?</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[{
//                 icon: <FaTv className="mx-auto text-3xl mb-3 text-green-600" />, title: "Online Filing & Tracking", desc: "Get real-time updates and license status from our dashboard."
//               }, {
//                 icon: <FaDownload className="mx-auto text-3xl mb-3 text-pink-500" />, title: "All Docs Managed", desc: "We handle your forms, photos, ID proofs, and declarations."
//               }, {
//                 icon: <FaSatelliteDish className="mx-auto text-3xl mb-3 text-red-500" />, title: "PAN India Service", desc: "Apply from anywhere — all states & cities covered."
//               }, {
//                 icon: <FaSmile className="mx-auto text-3xl mb-3 text-pink-400" />, title: "Quick & Hassle-Free", desc: "End-to-end support for new, renew, and modification cases."
//               }].map((item, idx) => (
//                 <div key={idx} className="bg-white rounded-xl p-5 text-center shadow">
//                   {item.icon}
//                   <h4 className="text-lg font-bold mb-1">{item.title}</h4>
//                   <p className="text-sm text-gray-600">{item.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <FssaiFAQ />
//             <div ref={footerRef}><SiteFooter /></div>
//           </div>

//           {/* ✅ Right Floating Checkout Bar */}
//           <div className="hidden md:block md:w-[34%]">
//             <div ref={checkoutRef} id="floating-checkout" className="transition-all duration-300">
//               <div className="bg-white text-gray-900 rounded-xl shadow-lg p-5 w-full max-w-sm ml-auto">
//                 <img src={fssaiImg} alt="FSSAI License" className="rounded-md mb-4 w-full object-cover h-40" />
//                 <h2 className="text-2xl font-bold mb-1">₹{totalPrice}</h2>
//                 <p className="text-sm text-gray-600 mb-3">{selectedPlan.label}</p>

//                 <button
//                   onClick={() => navigate('/checkout/fssai')}
//                   className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//                 >
//                   Go to Cart
//                 </button>

//                 <button
//                   onClick={() => navigate('/checkout/fssai')}
//                   className="w-full border mt-2 border-green-600 text-green-700 py-2 rounded-lg hover:bg-green-50"
//                 >
//                   Buy Now
//                 </button>

//                 <p className="text-xs text-gray-500 text-center mt-2">30-Day Money-Back Guarantee</p>

//                 <ul className="text-sm mt-5 text-gray-700 space-y-2">
//                   {selectedPlan.features.map((feat, idx) => (
//                     <li key={idx}>✔ {feat}</li>
//                   ))}
//                 </ul>

//                 <div className="mt-6">
//                   <label className="text-sm font-medium text-gray-700 block mb-1">Apply Coupon</label>
//                   <input
//                     type="text"
//                     placeholder="Enter coupon code"
//                     className="w-full border px-3 py-2 rounded text-sm mb-2"
//                   />
//                   <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-semibold">
//                     Apply Coupon
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ✅ Mobile Bottom Floating Summary */}
//       <div className="fixed md:hidden bottom-0 left-0 right-0 bg-white shadow-inner px-4 py-3 z-50 border-t flex items-center justify-between">
//         <div>
//           <h4 className="text-lg font-semibold">₹{totalPrice}</h4>
//           <p className="text-xs text-gray-600 truncate max-w-[180px]">{selectedPlan.label}</p>
//         </div>
//         <button
//           onClick={() => navigate('/checkout/fssai')}
//           className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
//         >
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FssaiLicenseCourse;
