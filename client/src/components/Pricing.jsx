

// import React from "react";
// import { FaCheck, FaTimes } from "react-icons/fa";
// import {
//   Briefcase,
//   UtensilsCrossed,
//   FileText,
//   ShieldCheck,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";


// const Pricing = () => {
//   const navigate = useNavigate();

//   const plans = [
//     {
//       name: "Basic Launch",
//       price: 7000,
//       features: [
//         "Limited Account Handling",
//         "Basic Swiggy & Zomato Setup",
//         "Optional GST Registration",
//         "Optional FSSAI Registration",
//         "Up to 5 team members",
//         "Email Support",
//         "Standard Reporting",
//         "Limited Integrations",
//       ],
//     },
//     {
//       name: "Growth Pro",
//       price: 10000,
//       features: [
//         "Dedicated Account Handling",
//         "Full Swiggy & Zomato Setup & Optimization",
//         "GST Registration Included",
//         "FSSAI Registration Included",
//         "Up to 25 team members",
//         "Priority Email & Chat Support",
//         "Advanced Reporting & Analytics",
//         "Enhanced Integrations",
//       ],
//       highlighted: true,
//       servicesIncluded: [
//         {
//           title: "Account Handling",
//           icon: <Briefcase className="h-5 w-5 text-indigo-500 mr-2" />,
//         },
//         {
//           title: "Swiggy & Zomato Setup",
//           icon: <UtensilsCrossed className="h-5 w-5 text-orange-500 mr-2" />,
//         },
//         {
//           title: "GST Assistance",
//           icon: <FileText className="h-5 w-5 text-emerald-500 mr-2" />,
//         },
//         {
//           title: "FSSAI Assistance",
//           icon: <ShieldCheck className="h-5 w-5 text-blue-500 mr-2" />,
//         },
//       ],
//     },
//     {
//       name: "Enterprise Scale",
//       price: 12000,
//       features: [
//         "Comprehensive Account Handling & Reporting",
//         "Advanced Swiggy & Zomato Management & Growth Strategies",
//         "Complete GST Management (Registration & Filing)",
//         "Priority FSSAI Compliance & Renewals",
//         "Unlimited team members",
//         "24/7 Premium Support & Dedicated Manager",
//         "Customizable Reporting & BI Tools",
//         "Unlimited Integrations & API Access",
//       ],
//     },
//   ];

//   const maxFeatures = Math.max(...plans.map((plan) => plan.features.length));

//   const updatedPlans = plans.map((plan) => ({
//     ...plan,
//     features: [
//       ...plan.features,
//       ...Array(maxFeatures - plan.features.length).fill("unavailable"),
//     ],
//   }));

//   return (
//     <div id="services" className="bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-extrabold text-indigo-700 sm:text-4xl">
//             Scale Your F&B Business with Our Expert Plans
//           </h2>
//           <p className="mt-3 text-lg text-gray-600">
//             Choose a plan tailored to your growth and operational needs.
//           </p>
//           <p className="mt-1 text-sm text-gray-500">
//             All prices are approximate and exclude applicable taxes.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {updatedPlans.map((plan, index) => (
//             <div
//               key={index}
//               className={`flex flex-col rounded-lg shadow-md overflow-hidden ${
//                 plan.highlighted
//                   ? "bg-indigo-600 text-white shadow-lg"
//                   : "bg-white text-gray-800 hover:shadow-xl transition-shadow duration-300"
//               }`}
//             >
//               <div className="px-6 py-8 flex-grow flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold text-left mb-4">
//                     {plan.name}
//                   </h3>
//                   <div className="text-center mb-6">
//                     <div className="flex items-center justify-center">
//                       <span className="text-2xl font-bold">
//                         ₹{plan.price.toLocaleString("en-IN")}
//                       </span>
//                       <span className="ml-1 text-sm text-gray-500 dark:text-gray-300">
//                         /month
//                       </span>
//                     </div>
//                   </div>

//                   {plan.highlighted && plan.servicesIncluded && (
//                     <div className="mb-6">
//                       <h4 className="text-lg font-semibold mb-2 text-left">
//                         Core Services Included:
//                       </h4>
//                       <ul className="list-none space-y-2">
//                         {plan.servicesIncluded.map((service) => (
//                           <li key={service.title} className="flex items-start">
//                             {service.icon}
//                             <span>{service.title}</span>
//                           </li>
//                         ))}
//                       </ul>
//                       <hr className="my-4 border-gray-300 dark:border-gray-700" />
//                     </div>
//                   )}

//                   <ul className="list-none space-y-3">
//                     {plan.features.map((feature, i) => (
//                       <li key={i} className="flex items-start">
//                         {feature === "unavailable" ? (
//                           <FaTimes className="w-5 h-5 mr-2 text-gray-400" />
//                         ) : (
//                           <FaCheck
//                             className={`w-5 h-5 mr-2 ${
//                               plan.highlighted
//                                 ? "text-indigo-200"
//                                 : "text-indigo-500"
//                             }`}
//                           />
//                         )}
//                         <span>
//                           {feature === "unavailable"
//                             ? "Not Available"
//                             : feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="mt-8 text-center">
//                   <button
//                     onClick={() => navigate(`/checkout/1}`)}
//                     className={`w-full py-3 rounded-md font-semibold ${
//                       plan.highlighted
//                         ? "bg-white text-indigo-600 hover:bg-indigo-100"
//                         : "bg-indigo-500 text-white hover:bg-indigo-700"
//                     } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
//                   >
//                     Get Started
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-12 text-center text-sm text-gray-500">
//           <p>
//             Need a custom plan?{" "}
//             <a
//               href="https://wa.me/919311330885"
//               target="_blank"
//               className="font-semibold text-indigo-600 hover:underline"
//               rel="noopener noreferrer"
//             >
//               Contact us
//             </a>
//             .
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;





// import React, { useEffect, useState } from "react";
// import { FaCheck, FaTimes } from "react-icons/fa";
// import {
//   Briefcase,
//   UtensilsCrossed,
//   FileText,
//   ShieldCheck,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Pricing = () => {
//   const navigate = useNavigate();
//   const [plans, setPlans] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/plan/all")
//       .then((res) => res.json())
//       .then((data) => setPlans(data));
//   }, []);

//   const maxFeatures = Math.max(...plans.map((plan) => plan.features.length));
//   const updatedPlans = plans.map((plan) => ({
//     ...plan,
//     features: [
//       ...plan.features,
//       ...Array(maxFeatures - plan.features.length).fill("unavailable"),
//     ],
//   }));

//   return (
//     <div id="services" className="bg-[#0f172a] py-16 text-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-extrabold text-indigo-400 sm:text-4xl">
//             Scale Your F&B Business with Our Expert Plans
//           </h2>
//           <p className="mt-3 text-lg text-gray-300">
//             Choose a plan tailored to your growth and operational needs.
//           </p>
//           <p className="mt-1 text-sm text-gray-400">
//             All prices are approximate and exclude applicable taxes.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {updatedPlans.map((plan, index) => (
//             <div
//               key={index}
//               className={`flex flex-col rounded-xl overflow-hidden border border-gray-700 shadow-lg transition duration-300 ${
//                 plan.highlighted ? "bg-[#1e293b]" : "bg-[#1e293b]"
//               }`}
//             >
//               <div className="px-6 py-8 flex-grow flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold text-left mb-4">
//                     {plan.name}
//                   </h3>
//                   <div className="text-center mb-6">
//                     <div className="flex items-center justify-center">
//                       <span className="text-2xl font-bold text-white">
//                         ₹{plan.price.toLocaleString("en-IN")}
//                       </span>
//                       <span className="ml-1 text-sm text-gray-400">
//                         /month
//                       </span>
//                     </div>
//                   </div>

//                   {plan.highlighted && plan.servicesIncluded && (
//                     <div className="mb-6">
//                       <h4 className="text-lg font-semibold mb-2 text-left">
//                         Core Services Included:
//                       </h4>
//                       <ul className="list-none space-y-2">
//                         {plan.servicesIncluded.map((service) => (
//                           <li key={service.title} className="flex items-start">
//                             {service.icon}
//                             <span>{service.title}</span>
//                           </li>
//                         ))}
//                       </ul>
//                       <hr className="my-4 border-gray-600" />
//                     </div>
//                   )}

//                   <ul className="list-none space-y-3">
//                     {plan.features.map((feature, i) => (
//                       <li key={i} className="flex items-start">
//                         {feature === "unavailable" ? (
//                           <FaTimes className="w-5 h-5 mr-2 text-gray-500" />
//                         ) : (
//                           <FaCheck className="w-5 h-5 mr-2 text-green-400" />
//                         )}
//                         <span>
//                           {feature === "unavailable" ? "Not Available" : feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="mt-8 text-center">
//                   <button
//                     onClick={() => navigate(`/checkout/${plan._id}`)}
//                     className="w-full py-3 rounded-md font-semibold bg-indigo-500 hover:bg-indigo-600 text-white"
//                   >
//                     Get Started
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-12 text-center text-sm text-gray-400">
//           <p>
//             Need a custom plan?{' '}
//             <a
//               href="https://wa.me/919311330885"
//               target="_blank"
//               className="font-semibold text-indigo-400 hover:underline"
//               rel="noopener noreferrer"
//             >
//               Contact us
//             </a>
//             .
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;






































// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Pricing = () => {
//   const navigate = useNavigate();
//   const [plans, setPlans] = useState([]);

//  useEffect(() => {
//   fetch("http://localhost:5000/api/plan/all")
//     .then(res => res.json())
//     .then(data => {
//       if (Array.isArray(data)) {
//         setPlans(data);
//       } else {
//         console.error("API did not return an array:", data);
//         setPlans([]);
//       }
//     })
//     .catch((err) => {
//       console.error("Failed to fetch plans", err);
//     });
// }, []);


//   return (
//     <div className="py-10">
//       <h2 className="text-2xl font-bold text-center mb-6">Pricing Plans</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
//         {plans.map((plan) => (
//           <div key={plan._id} className="bg-white shadow p-6 rounded-lg">
//             <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
//             <p className="text-indigo-600 text-xl font-bold mb-4">₹{plan.price}</p>
//             <ul className="list-disc pl-5 mb-4">
//               {plan.features.map((f, i) => <li key={i}>{f}</li>)}
//             </ul>
//             <button
//               onClick={() => navigate(`/checkout/${plan._id}`)}
//               className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 w-full"
//             >
//               Get Started
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pricing;
























// import React, { useEffect, useState } from "react";
// import { FaCheck, FaTimes } from "react-icons/fa";
// import {
//   Briefcase,
//   UtensilsCrossed,
//   FileText,
//   ShieldCheck,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Pricing = () => {
//   const navigate = useNavigate();
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/plan/all")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           console.log("✅ Plans loaded:", data);
//           setPlans(data);
//         } else {
//           console.error("❌ Invalid response (not array):", data);
//           setPlans([]);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("❌ Fetch error:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p className="text-center py-10">Loading plans...</p>;
//   if (plans.length === 0) return <p className="text-center py-10 text-red-600">No plans available.</p>;

//   const maxFeatures = Math.max(...plans.map((plan) => plan.features.length));

//   const updatedPlans = plans.map((plan) => ({
//     ...plan,
//     features: [
//       ...plan.features,
//       ...Array(maxFeatures - plan.features.length).fill("unavailable"),
//     ],
//   }));

//   return (
//     <div id="services" className="bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-extrabold text-indigo-700 sm:text-4xl">
//             Scale Your F&B Business with Our Expert Plans
//           </h2>
//           <p className="mt-3 text-lg text-gray-600">
//             Choose a plan tailored to your growth and operational needs.
//           </p>
//           <p className="mt-1 text-sm text-gray-500">
//             All prices are approximate and exclude applicable taxes.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {updatedPlans.map((plan, index) => (
//             <div
//               key={plan._id || index}
//               className={`flex flex-col rounded-lg shadow-md overflow-hidden ${
//                 plan.highlighted
//                   ? "bg-indigo-600 text-white shadow-lg"
//                   : "bg-white text-gray-800 hover:shadow-xl transition-shadow duration-300"
//               }`}
//             >
//               <div className="px-6 py-8 flex-grow flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold text-left mb-4">
//                     {plan.name}
//                   </h3>
//                   <div className="text-center mb-6">
//                     <div className="flex items-center justify-center">
//                       <span className="text-2xl font-bold">
//                         ₹{plan.price.toLocaleString("en-IN")}
//                       </span>
//                       <span className="ml-1 text-sm text-gray-500 dark:text-gray-300">
//                         /month
//                       </span>
//                     </div>
//                   </div>

//                   {plan.highlighted && plan.servicesIncluded && (
//                     <div className="mb-6">
//                       <h4 className="text-lg font-semibold mb-2 text-left">
//                         Core Services Included:
//                       </h4>
//                       <ul className="list-none space-y-2">
//                         {plan.servicesIncluded.map((service) => (
//                           <li key={service.title} className="flex items-start">
//                             {service.icon}
//                             <span>{service.title}</span>
//                           </li>
//                         ))}
//                       </ul>
//                       <hr className="my-4 border-gray-300 dark:border-gray-700" />
//                     </div>
//                   )}

//                   <ul className="list-none space-y-3">
//                     {plan.features.map((feature, i) => (
//                       <li key={i} className="flex items-start">
//                         {feature === "unavailable" ? (
//                           <FaTimes className="w-5 h-5 mr-2 text-gray-400" />
//                         ) : (
//                           <FaCheck
//                             className={`w-5 h-5 mr-2 ${
//                               plan.highlighted
//                                 ? "text-indigo-200"
//                                 : "text-indigo-500"
//                             }`}
//                           />
//                         )}
//                         <span>
//                           {feature === "unavailable" ? "Not Available" : feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="mt-8 text-center">
//                   <button
//                     onClick={() => navigate(`/checkout/${plan._id}`)}
//                     className={`w-full py-3 rounded-md font-semibold ${
//                       plan.highlighted
//                         ? "bg-white text-indigo-600 hover:bg-indigo-100"
//                         : "bg-indigo-500 text-white hover:bg-indigo-700"
//                     } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
//                   >
//                     Get Started
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-12 text-center text-sm text-gray-500">
//           <p>
//             Need a custom plan?{" "}
//             <a
//               href="https://wa.me/919311330885"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="font-semibold text-indigo-600 hover:underline"
//             >
//               Contact us
//             </a>
//             .
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;

















// import React, { useState } from "react";
// import { FaCheck, FaTimes } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const planFeatures = [
//   "Menu Score Update",
//   "Dedicated Account Manager",
//   "Customer Review Management",
//   "Priority Support",
//   "Detail Weekly Report",
//   "Details Monthly Report",
//   "Discount Strategy",
//   "Competitor Analysis",
//   "SEO Friendly Content",
//   "Response To Review",
//   "Menu Optimization",
//   "Profile Enhancement",
//   "Weekly Consultant Calls",
//   "Marketing insights",
//   "Boosted Promotions",
//   "Zomato Ad Campaign Management",
//   "Festival Specific Promotions",
//   "Custom Campaign Ideas",
//   "Weekly Menu Insights",
//   "Target Audience Analysis",
//   "Analytics and Insights Dashboards",
//   "Personalized Growth Strategies",
//   "Daily Monitoring of Progress",
// ];

// const basicPlanFeatures = [
//   true, true, true, "Standard", true, true, true, true, true, false, true, false,
//   true, false, false, false, false, false, true, true, false, true
// ];

// const premiumPlanFeatures = [
//   true, true, true, "Fast", true, true, true, true, true, true, true, true,
//   true, true, true, true, true, true, true, true, true, true
// ];

// const Pricing = () => {
//   const navigate = useNavigate();
//   const [durations, setDurations] = useState({ basic: 1, premium: 1 });

//   const prices = {
//     basic: 7999,
//     premium: 9999,
//   };

//   const renderIcon = (value) => {
//     if (typeof value === "string") return <span className="text-sm font-medium text-purple-600">{value}</span>;
//     return value ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />;
//   };

//   const handleStart = (plan, months) => {
//     navigate(`/checkout/${plan}?months=${months}`);
//   };

//   return (
//     <div className="relative bg-gradient-to-b from-white to-purple-50 py-16 px-4 overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <svg
//           className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 opacity-10 animate-pulse"
//           width="800"
//           height="800"
//           viewBox="0 0 800 800"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle cx="400" cy="400" r="300" fill="url(#purpleGradient)" />
//           <defs>
//             <radialGradient id="purpleGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(45) scale(800 800)">
//               <stop stopColor="#a78bfa" />
//               <stop offset="1" stopColor="#c4b5fd" stopOpacity="0.2" />
//             </radialGradient>
//           </defs>
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h2 className="text-4xl font-bold text-purple-700 mb-2">
//           Growth Plan for <span className="text-red-500">Zomato</span> & <span className="text-yellow-500">Swiggy</span>
//         </h2>
//         <p className="text-lg text-gray-600">
//           Choose the best plan to grow your restaurant's online presence.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//         {["Basic", "Premium"].map((planType, i) => {
//           const planKey = planType.toLowerCase();
//           const duration = durations[planKey];

//           return (
//             <div
//               key={planType}
//               className="relative bg-white shadow-xl rounded-2xl p-6 border border-purple-200 hover:shadow-2xl transition duration-300"
//             >
//               <div className="absolute -top-3 -right-3 bg-yellow-300 text-xs text-purple-900 font-bold px-3 py-1 rounded-full shadow">{planType === "Premium" ? "Best Value" : "Starter"}</div>
//               <h3 className="text-2xl font-bold text-purple-700 mb-1">
//                 {planType} Plan
//               </h3>
//               <p className="text-3xl font-extrabold text-purple-900 mb-2">
//                 ₹{prices[planKey].toLocaleString()} <span className="text-sm text-gray-500 font-medium"> /month</span>
//               </p>

//               <div className="mb-4 text-sm text-gray-600">
//                 <label htmlFor={`${planKey}-months`} className="block font-medium mb-1">
//                   Select Subscription Duration
//                 </label>
//                 <div className="relative">
//                   <select
//                     id={`${planKey}-months`}
//                     value={duration}
//                     onChange={(e) => setDurations({ ...durations, [planKey]: Number(e.target.value) })}
//                     className="w-full border border-purple-300 rounded px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-purple-400 focus:border-transparent appearance-none cursor-pointer"
//                   >
//                     {[1, 3, 6, 12].map((m) => (
//                       <option key={m} value={m}>{m} Month{m > 1 ? "s" : ""}</option>
//                     ))}
//                   </select>
//                   <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2 text-purple-500">
//                     ▼
//                   </div>
//                 </div>
//                 <p className="mt-3 text-lg text-purple-700 font-semibold">
//                   Total: ₹{(prices[planKey] * duration).toLocaleString("en-IN")}
//                 </p>
//               </div>

//               <div className="space-y-3 text-left">
//                 {planFeatures.map((feature, idx) => (
//                   <div key={idx} className="flex items-center space-x-3">
//                     {renderIcon(i === 0 ? basicPlanFeatures[idx] : premiumPlanFeatures[idx])}
//                     <span className="text-gray-700 text-sm">{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={() => handleStart(`plan-${planKey}`, duration)}
//                 className={`mt-6 w-full py-3 rounded-lg font-semibold text-white shadow-md transition-all duration-300 ${
//                   planType === "Basic"
//                     ? "bg-indigo-500 hover:bg-indigo-600"
//                     : "bg-purple-600 hover:bg-purple-700"
//                 }`}
//               >
//                 Get Started
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       <div className="mt-16 text-center text-sm text-gray-600 relative z-10">
//         Need a custom plan?{' '}
//         <a
//           href="https://wa.me/919311330885"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-purple-600 font-medium hover:underline"
//         >
//           Contact us
//         </a>
//         .
//       </div>
//     </div>
//   );
// };

// export default Pricing;











import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const planFeatures = [
  "Menu Score Update",
  "Dedicated Account Manager",
  "Customer Review Management",
  "Priority Support",
  "Detail Weekly Report",
  "Details Monthly Report",
  "Discount Strategy",
  "Competitor Analysis",
  "SEO Friendly Content",
  "Response To Review",
  "Menu Optimization",
  "Profile Enhancement",
  "Weekly Consultant Calls",
  "Marketing insights",
  "Boosted Promotions",
  "Zomato Ad Campaign Management",
  "Festival Specific Promotions",
  "Custom Campaign Ideas",
  "Weekly Menu Insights",
  "Target Audience Analysis",
  "Analytics and Insights Dashboards",
  "Personalized Growth Strategies",
  "Daily Monitoring of Progress",
];

const basicPlanFeatures = [
  true, true, true, "Standard", true, true, true, true, true, false, true, false,
  true, false, false, false, false, false, true, true, false, true
];

const premiumPlanFeatures = [
  true, true, true, "Fast", true, true, true, true, true, true, true, true,
  true, true, true, true, true, true, true, true, true, true
];

const Pricing = () => {
  const navigate = useNavigate();
  const [durations, setDurations] = useState({ basic: 1, premium: 1 });

  const prices = {
    basic: 7999,
    premium: 9999,
  };

  const renderIcon = (value) => {
    if (typeof value === "string") return <span className="text-sm font-medium text-purple-600">{value}</span>;
    return value ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />;
  };

  const handleStart = (plan, months) => {
    navigate(`/checkout/${plan}?months=${months}`);
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-100 via-white to-purple-200 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/batthern.png')] opacity-10"></div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-3">
          Choose Your Growth Plan for <span className="text-red-500">Zomato</span> & <span className="text-yellow-500">Swiggy</span>
        </h2>
        <p className="text-lg text-gray-600">
          Supercharge your restaurant's online visibility and performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {["Basic", "Premium"].map((planType, i) => {
          const planKey = planType.toLowerCase();
          const duration = durations[planKey];

          return (
            <div
              key={planType}
              className="relative bg-white shadow-xl rounded-2xl p-8 border border-purple-200 hover:shadow-2xl transition duration-300 backdrop-blur-md"
            >
              <div className="absolute -top-4 -right-4 bg-yellow-300 text-xs text-purple-900 font-bold px-3 py-1 rounded-full shadow">
                {planType === "Premium" ? "Best Value" : "Starter"}
              </div>
              <h3 className="text-2xl font-bold text-purple-700 mb-1">
                {planType} Plan
              </h3>
              <p className="text-3xl font-extrabold text-purple-900 mb-4">
                ₹{prices[planKey].toLocaleString()} <span className="text-sm text-gray-500 font-medium"> /month</span>
              </p>

              <div className="mb-4">
                <label className="block font-medium text-sm text-gray-700 mb-2">
                  Subscription Duration
                </label>
                <div className="flex gap-2">
                  {[1, 3, 6, 12].map((m) => (
                    <button
                      key={m}
                      onClick={() => setDurations({ ...durations, [planKey]: m })}
                      className={`px-4 py-1 rounded-full text-sm font-medium border transition-all duration-200 ${
                        durations[planKey] === m
                          ? "bg-purple-600 text-white border-purple-700"
                          : "bg-white text-purple-700 border-purple-300 hover:bg-purple-50"
                      }`}
                    >
                      {m} mo
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-lg text-purple-700 font-semibold">
                  Total: ₹{(prices[planKey] * duration).toLocaleString("en-IN")}
                </p>
              </div>

              <div className="space-y-3 text-left mt-6">
                {planFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    {renderIcon(i === 0 ? basicPlanFeatures[idx] : premiumPlanFeatures[idx])}
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleStart(`plan-${planKey}`, duration)}
                className={`mt-8 w-full py-3 rounded-lg font-semibold text-white shadow-md transition-all duration-300 ${
                  planType === "Basic"
                    ? "bg-indigo-500 hover:bg-indigo-600"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                Get Started
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-20 text-center text-sm text-gray-600 relative z-10">
        Need a custom plan?{' '}
        <a
          href="https://wa.me/919311330885"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 font-medium hover:underline"
        >
          Contact us
        </a>
        .
      </div>
    </div>
  );
};

export default Pricing;
