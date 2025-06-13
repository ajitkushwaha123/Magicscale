

// //corect file 
// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const planData = {
//   "plan-basic": {
//     name: "Basic Growth Plan",
//     price: 7999,
//     features: [
//       "Menu Score Update",
//       "Customer Review Management",
//       "Weekly Consultant Calls",
//       "Menu Optimization",
//       "Basic Promotion Strategy",
//     ],
//     badge: "Recommended for Startups",
//   },
//   "plan-premium": {
//     name: "Premium Growth Plan",
//     price: 9999,
//     features: [
//       "All Basic Features",
//       "Dedicated Account Manager",
//       "Festival-Specific Promotions",
//       "Zomato & Swiggy Ad Campaigns",
//       "Advanced Analytics Dashboard",
//     ],
//     badge: "Best for Growing Brands",
//   },
// };

// const discountMap = {
//   1: 0,
//   3: 5,
//   6: 10,
//   12: 20,
// };

// const Checkout = () => {
//   const { id } = useParams();
//   const [duration, setDuration] = useState(12);

//   const plan = planData[id];
//   if (!plan) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-600">
//         Invalid plan selected.
//       </div>
//     );
//   }

//   const discount = discountMap[duration];
//   const monthlyPrice = plan.price - (plan.price * discount) / 100;
//   const totalPrice = monthlyPrice * duration;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-10 px-4">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
//         {/* 🎯 Left Section: Plan Info */}
//         <div className="md:col-span-2 bg-white shadow-xl rounded-3xl p-8">
//           {/* 🎨 Timeline Progress */}
//           <div className="flex justify-between text-sm mb-8 text-gray-500">
//             <div className="text-indigo-600 font-bold">1. Choose Plan</div>
//             <div className="font-bold text-indigo-700">2. Checkout</div>
//             <div className="text-gray-400">3. Payment</div>
//           </div>

//           {/* 🎨 Gradient Plan Header */}
//           <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-2xl p-6 mb-8">
//             <h2 className="text-3xl font-bold">{plan.name}</h2>
//             <p className="text-sm mt-2">{plan.badge}</p>
//             <p className="mt-4 text-2xl font-semibold">₹{plan.price}</p>
//           </div>

//           {/* Features List */}
//           <h3 className="text-xl font-semibold mb-4 text-gray-800">What You’ll Get</h3>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {plan.features.map((feature, index) => (
//               <motion.li
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="flex items-center bg-gray-100 p-4 rounded-xl"
//               >
//                 <FaCheckCircle className="text-green-500 mr-2" />
//                 <span className="text-gray-700 font-medium">{feature}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </div>

//         {/* 🎯 Right Section: Sticky Payment Summary */}
//         <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl shadow-lg p-6 h-fit">
//           <h4 className="text-lg font-semibold mb-4">Summary</h4>

//           <label className="block mb-2 text-sm font-medium text-gray-700">
//             Select Duration
//           </label>
//           <select
//             value={duration}
//             onChange={(e) => setDuration(Number(e.target.value))}
//             className="w-full mb-5 p-3 border rounded-md focus:ring-indigo-500"
//           >
//             <option value={1}>1 Month</option>
//             <option value={3}>3 Months (5% OFF)</option>
//             <option value={6}>6 Months (10% OFF)</option>
//             <option value={12}>12 Months (20% OFF)</option>
//           </select>

//           {/* 🧾 Pricing Calculation */}
//           <div className="text-sm text-gray-500 mb-1">Monthly Price:</div>
//           <div className="text-xl font-bold text-indigo-700 mb-3">
//             ₹{monthlyPrice.toFixed(2)}
//           </div>

//           <div className="border-t pt-4 mt-4 text-sm text-gray-700 space-y-1">
//             <p>Duration: {duration} months</p>
//             <p>Discount: {discount}%</p>
//             <AnimatePresence>
//               <motion.p
//                 key={totalPrice}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="text-lg font-semibold text-green-600"
//               >
//                 Total: ₹{totalPrice.toFixed(2)}
//               </motion.p>
//             </AnimatePresence>
//           </div>

//           <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
//             Continue to Payment
//           </button>

//           {/* 🔐 Security Badges */}
//           <div className="mt-6 flex items-center justify-center gap-3 text-xs text-gray-500">
//             <span>🔒 Secure SSL</span>
//             <img src="/razorpay.svg" alt="razorpay" className="h-5" />
//             <img src="/visa.svg" alt="visa" className="h-5" />
//           </div>
//         </div>
//       </div>

//       {/* 📱 Mobile Optimized Payment Bar */}
//       <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center shadow-lg z-10">
//         <span className="font-semibold text-lg text-gray-800">
//           ₹{totalPrice.toFixed(0)}
//         </span>
//         <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl">
//           Pay Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Checkout;




// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const planData = {
//   "plan-basic": {
//     name: "Basic Growth Plan",
//     price: 7999,
//     features: [
//       "Menu Score Update",
//       "Customer Review Management",
//       "Weekly Consultant Calls",
//       "Menu Optimization",
//       "Basic Promotion Strategy",
//     ],
//     badge: "Recommended for Startups",
//   },
//   "plan-premium": {
//     name: "Premium Growth Plan",
//     price: 9999,
//     features: [
//       "All Basic Features",
//       "Dedicated Account Manager",
//       "Festival-Specific Promotions",
//       "Zomato & Swiggy Ad Campaigns",
//       "Advanced Analytics Dashboard",
//     ],
//     badge: "Best for Growing Brands",
//   },
// };

// const discountMap = {
//   1: 0,
//   3: 5,
//   6: 10,
//   12: 20,
// };

// const loadCashfreeScript = () => {
//   return new Promise((resolve) => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.cashfree.com/js/ui/1.0.26/dropinClient.js";
//     script.onload = () => resolve(true);
//     script.onerror = () => resolve(false);
//     document.body.appendChild(script);
//   });
// };

// const Checkout = () => {
//   const { id } = useParams();
//   const [duration, setDuration] = useState(12);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");

//   const plan = planData[id];
//   if (!plan) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-600">
//         Invalid plan selected.
//       </div>
//     );
//   }

//   const discount = discountMap[duration];
//   const monthlyPrice = plan.price - (plan.price * discount) / 100;
//   const totalPrice = monthlyPrice * duration;

//   const handleCashfreePayment = async () => {
//     if (!name || !email || !phone || !address) {
//       alert("Please fill all customer details");
//       return;
//     }

//     const loaded = await loadCashfreeScript();
//     if (!loaded) return alert("Cashfree SDK failed to load");

//     const response = await fetch("http://localhost:5000/api/cashfree/create-order", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         amount: totalPrice,
//         customer_id: phone,
//         customer_email: email,
//         customer_phone: phone,
//       }),
//     });

//     const data = await response.json();
//     if (!data.payment_session_id) {
//       alert("Failed to initiate payment");
//       return;
//     }

//     const dropConfig = {
//       layout: "INLINE",
//       paymentSessionId: data.payment_session_id,
//       returnUrl: "http://localhost:5173/payment-success",
//       redirectTarget: "_self",
//     };

//     const cashfree = new window.Cashfree(dropConfig);
//     cashfree.drop(document.getElementById("cashfree-dropin"));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-10 px-4">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
//         {/* 🎯 Left Section: Plan Info */}
//         <div className="md:col-span-2 bg-white shadow-xl rounded-3xl p-8">
//           {/* 🎨 Timeline Progress */}
//           <div className="flex justify-between text-sm mb-8 text-gray-500">
//             <div className="text-indigo-600 font-bold">1. Choose Plan</div>
//             <div className="font-bold text-indigo-700">2. Checkout</div>
//             <div className="text-gray-400">3. Payment</div>
//           </div>

//           {/* 🎨 Gradient Plan Header */}
//           <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-2xl p-6 mb-8">
//             <h2 className="text-3xl font-bold">{plan.name}</h2>
//             <p className="text-sm mt-2">{plan.badge}</p>
//             <p className="mt-4 text-2xl font-semibold">₹{plan.price}</p>
//           </div>

//           {/* Features List */}
//           <h3 className="text-xl font-semibold mb-4 text-gray-800">What You’ll Get</h3>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {plan.features.map((feature, index) => (
//               <motion.li
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="flex items-center bg-gray-100 p-4 rounded-xl"
//               >
//                 <FaCheckCircle className="text-green-500 mr-2" />
//                 <span className="text-gray-700 font-medium">{feature}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </div>

//         {/* 🎯 Right Section: Payment Form + Summary */}
//         <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl shadow-lg p-6 h-fit w-full">
//           <h4 className="text-lg font-semibold mb-4">Summary</h4>

//           <label className="block mb-2 text-sm font-medium text-gray-700">
//             Select Duration
//           </label>
//           <select
//             value={duration}
//             onChange={(e) => setDuration(Number(e.target.value))}
//             className="w-full mb-5 p-3 border rounded-md focus:ring-indigo-500"
//           >
//             <option value={1}>1 Month</option>
//             <option value={3}>3 Months (5% OFF)</option>
//             <option value={6}>6 Months (10% OFF)</option>
//             <option value={12}>12 Months (20% OFF)</option>
//           </select>

//           <div className="text-sm text-gray-500 mb-1">Monthly Price:</div>
//           <div className="text-xl font-bold text-indigo-700 mb-3">
//             ₹{monthlyPrice.toFixed(2)}
//           </div>

//           <div className="border-t pt-4 mt-4 text-sm text-gray-700 space-y-1">
//             <p>Duration: {duration} months</p>
//             <p>Discount: {discount}%</p>
//             <AnimatePresence>
//               <motion.p
//                 key={totalPrice}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="text-lg font-semibold text-green-600"
//               >
//                 Total: ₹{totalPrice.toFixed(2)}
//               </motion.p>
//             </AnimatePresence>
//           </div>

//           {/* 🧾 User Form */}
//           <div className="mt-6 space-y-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 border rounded-md"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 border rounded-md"
//             />
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full p-3 border rounded-md"
//             />
//             <textarea
//               placeholder="Billing Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="w-full p-3 border rounded-md"
//             ></textarea>
//           </div>

//           <button
//             onClick={handleCashfreePayment}
//             className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
//           >
//             Continue to Payment
//           </button>

//           <div className="mt-4" id="cashfree-dropin"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;








// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const planData = {
//   "plan-basic": {
//     name: "Basic Growth Plan",
//     price: 7999,
//     features: [
//       "Menu Score Update",
//       "Customer Review Management",
//       "Weekly Consultant Calls",
//       "Menu Optimization",
//       "Basic Promotion Strategy",
//     ],
//     badge: "Recommended for Startups",
//   },
//   "plan-premium": {
//     name: "Premium Growth Plan",
//     price: 9999,
//     features: [
//       "All Basic Features",
//       "Dedicated Account Manager",
//       "Festival-Specific Promotions",
//       "Zomato & Swiggy Ad Campaigns",
//       "Advanced Analytics Dashboard",
//     ],
//     badge: "Best for Growing Brands",
//   },
// };

// const discountMap = {
//   1: 0,
//   3: 5,
//   6: 10,
//   12: 20,
// };

// const Checkout = () => {
//   const { id } = useParams();
//   const [duration, setDuration] = useState(12);
//   const [userDetails, setUserDetails] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const plan = planData[id];
//   if (!plan) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-600">
//         Invalid plan selected.
//       </div>
//     );
//   }

//   const discount = discountMap[duration];
//   const monthlyPrice = plan.price - (plan.price * discount) / 100;
//   const totalPrice = monthlyPrice * duration;

//   const handleInputChange = (e) => {
//     setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
//   };

//   const handlePayment = () => {
//     // You can pass `userDetails` to backend before initiating payment
//    const handlePayment = async () => {
//   try {
//     const response = await fetch("http://localhost:5000/api/plan/initiate-payment", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: userDetails.name,
//         email: userDetails.email,
//         phone: userDetails.phone,
//         address: userDetails.address,
//         planId: id,
//         amount: totalPrice,
//       }),
//     });

//     const data = await response.json();

//     if (data.success) {
//       const cashfree = new window.Cashfree(data.sessionId);
//       cashfree.redirect();
//     } else {
//       alert("Payment initiation failed: " + data.message);
//     }
//   } catch (error) {
//     console.error("Error initiating payment:", error);
//     alert("Something went wrong while processing payment.");
//   }
// };

//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-10 px-4">
//       <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
//         {/* 🧾 Plan Information */}
//         <div className="md:col-span-2 bg-white shadow-xl rounded-3xl p-6">
//           <div className="flex justify-between text-sm mb-6 text-gray-500 font-medium">
//             <div className="text-indigo-600">1. Choose Plan</div>
//             <div className="text-indigo-700 font-bold">2. Checkout</div>
//             <div className="text-gray-400">3. Payment</div>
//           </div>

//           {/* 🪪 Plan Header */}
//           <div className="bg-indigo-600 text-white rounded-2xl p-5 mb-6 shadow">
//             <h2 className="text-2xl font-semibold">{plan.name}</h2>
//             <p className="text-sm mt-1">{plan.badge}</p>
//             <p className="mt-3 text-xl font-bold">₹{plan.price}</p>
//           </div>

//           <h3 className="text-lg font-semibold mb-4 text-gray-800">You’ll Get</h3>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             {plan.features.map((feature, i) => (
//               <motion.li
//                 key={i}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//                 className="flex items-center bg-gray-100 p-3 rounded-lg"
//               >
//                 <FaCheckCircle className="text-green-500 mr-2" />
//                 <span className="text-gray-700">{feature}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </div>

//         {/* 💳 Payment Info & User Detail */}
//         <div className="bg-white shadow-lg rounded-3xl p-6 h-fit sticky top-20">
//           <h4 className="text-md font-semibold text-gray-800 mb-4">Your Details</h4>
//           <div className="space-y-3 mb-5">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={userDetails.name}
//               onChange={handleInputChange}
//               className="w-full border p-2 rounded-md"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={userDetails.email}
//               onChange={handleInputChange}
//               className="w-full border p-2 rounded-md"
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={userDetails.phone}
//               onChange={handleInputChange}
//               className="w-full border p-2 rounded-md"
//             />
//             <textarea
//               name="address"
//               placeholder="Delivery Address"
//               value={userDetails.address}
//               onChange={handleInputChange}
//               className="w-full border p-2 rounded-md"
//             />
//           </div>

//           <hr className="my-5" />

//           <label className="block text-sm mb-1 font-medium text-gray-700">
//             Subscription Duration
//           </label>
//           <select
//             value={duration}
//             onChange={(e) => setDuration(Number(e.target.value))}
//             className="w-full p-2 mb-4 border rounded-md"
//           >
//             <option value={1}>1 Month</option>
//             <option value={3}>3 Months (5% OFF)</option>
//             <option value={6}>6 Months (10% OFF)</option>
//             <option value={12}>12 Months (20% OFF)</option>
//           </select>

//           <div className="text-sm text-gray-600 mb-1">Monthly Price:</div>
//           <div className="text-lg font-bold text-indigo-700 mb-3">
//             ₹{monthlyPrice.toFixed(0)}
//           </div>

//           <div className="text-sm text-gray-600 mb-2">
//             Duration: {duration} month(s) • Discount: {discount}%
//           </div>

//           <AnimatePresence>
//             <motion.div
//               key={totalPrice}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="text-green-600 font-semibold text-lg mb-5"
//             >
//               Total: ₹{totalPrice.toFixed(0)}
//             </motion.div>
//           </AnimatePresence>

//           <button
//             onClick={handlePayment}
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
//           >
//             Continue to Payment
//           </button>

//           {/* 🛡️ Trust Badges */}
//           <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
//             <span>🔒 Secure SSL</span>
//             <img src="/razorpay.svg" alt="razorpay" className="h-5" />
//             <img src="/visa.svg" alt="visa" className="h-5" />
//             <img src="/cashfree.svg" alt="cashfree" className="h-5" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;























// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const planData = {
//   "plan-basic": {
//     name: "Basic Growth Plan",
//     price: 7999,
//     features: [
//       "Menu Score Update",
//       "Customer Review Management",
//       "Weekly Consultant Calls",
//       "Menu Optimization",
//       "Basic Promotion Strategy",
//     ],
//     badge: "Recommended for Startups",
//   },
//   "plan-premium": {
//     name: "Premium Growth Plan",
//     price: 9999,
//     features: [
//       "All Basic Features",
//       "Dedicated Account Manager",
//       "Festival-Specific Promotions",
//       "Zomato & Swiggy Ad Campaigns",
//       "Advanced Analytics Dashboard",
//     ],
//     badge: "Best for Growing Brands",
//   },
// };

// const discountMap = {
//   1: 0,
//   3: 5,
//   6: 10,
//   12: 20,
// };

// const Checkout = () => {
//   const { id } = useParams();
//   const [duration, setDuration] = useState(12);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const plan = planData[id];
//   if (!plan) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-600">
//         Invalid plan selected.
//       </div>
//     );
//   }

//   const discount = discountMap[duration];
//   const monthlyPrice = plan.price - (plan.price * discount) / 100;
//   const totalPrice = monthlyPrice * duration;

// //   const loadCashfreeScript = () => {
// //     return new Promise((resolve) => {
// //       const script = document.createElement("script");
// //       script.src = "https://sdk.cashfree.com/js/ui/1.0.26/dropinClient.js";
// //       script.onload = () => resolve(true);
// //       script.onerror = () => resolve(false);
// //       document.body.appendChild(script);
// //     });
// //   };
//     const loadCashfreeScript = () => {
//   return new Promise((resolve, reject) => {
//     if (window.Cashfree) return resolve(true); // Already loaded

//     const script = document.createElement("script");
//     script.src = "https://sdk.cashfree.com/js/ui/2.0.0/dropinClient.js"; // use latest stable version
//     script.onload = () => resolve(true);
//     script.onerror = () => reject("Failed to load Cashfree SDK");
//     document.body.appendChild(script);
//   });
// };

//   const handleCashfreePayment = async () => {
//     const loaded = await loadCashfreeScript();
//     if (!loaded) return alert("Cashfree SDK failed to load");

//     // 
//     const response = await fetch("http://localhost:5000/api/cashfree/initiate-payment", {

//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     //   
//     body: JSON.stringify({
//   name: formData.name,
//   email: formData.email,
//   phone: formData.phone,
//   address: formData.address,
// planId: id, // or any identifier
//   amount: totalPrice
// }),

//     });

//     const data = await response.json();
//     if (!data.sessionId) {
//       alert("Failed to initiate payment");
//       return;
//     }

//     const dropConfig = {
//       layout: "POPUP",
//       paymentSessionId: !data.sessionId,
//       returnUrl: `http://localhost:5173/payment-success`,
//       redirectTarget: "_self",
//     };

//     const cashfree = new window.Cashfree(dropConfig);
//     cashfree.drop(document.getElementById("cashfree-dropin"));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-10 px-4">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
//         <div className="md:col-span-2 bg-white shadow-xl rounded-2xl p-6">
//           <div className="flex justify-between text-xs mb-6 text-gray-500">
//             <div className="text-indigo-600 font-bold">1. Choose Plan</div>
//             <div className="font-bold text-indigo-700">2. Checkout</div>
//             <div className="text-gray-400">3. Payment</div>
//           </div>

//           <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-xl p-5 mb-6">
//             <h2 className="text-xl font-bold">{plan.name}</h2>
//             <p className="text-xs mt-1">{plan.badge}</p>
//             <p className="mt-3 text-xl font-semibold">₹{plan.price}</p>
//           </div>

//           <h3 className="text-base font-semibold mb-2 text-gray-800">What You’ll Get</h3>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
//             {plan.features.map((feature, index) => (
//               <motion.li
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="flex items-center bg-gray-100 p-3 rounded-lg"
//               >
//                 <FaCheckCircle className="text-green-500 mr-2" />
//                 <span className="text-gray-700 font-medium">{feature}</span>
//               </motion.li>
//             ))}
//           </ul>
//         </div>

//         <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl shadow-lg p-5 h-fit">
//           <h4 className="text-sm font-semibold mb-3">Your Details</h4>
//           <input type="text" placeholder="Name" className="w-full p-2 mb-2 border rounded-md" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
//           <input type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded-md" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
//           <input type="tel" placeholder="Phone" className="w-full p-2 mb-2 border rounded-md" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
//           <textarea placeholder="Address" className="w-full p-2 mb-4 border rounded-md" onChange={(e) => setFormData({ ...formData, address: e.target.value })}></textarea>

//           <label className="block mb-2 text-xs font-medium text-gray-700">Select Duration</label>
//           <select value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full mb-3 p-2 border rounded-md">
//             <option value={1}>1 Month</option>
//             <option value={3}>3 Months (5% OFF)</option>
//             <option value={6}>6 Months (10% OFF)</option>
//             <option value={12}>12 Months (20% OFF)</option>
//           </select>

//           <div className="text-xs text-gray-500 mb-1">Monthly Price:</div>
//           <div className="text-lg font-bold text-indigo-700 mb-2">₹{monthlyPrice.toFixed(2)}</div>

//           <div className="border-t pt-3 mt-3 text-xs text-gray-700 space-y-1">
//             <p>Duration: {duration} months</p>
//             <p>Discount: {discount}%</p>
//             <AnimatePresence>
//               <motion.p key={totalPrice} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="text-base font-semibold text-green-600">
//                 Total: ₹{totalPrice.toFixed(2)}
//               </motion.p>
//             </AnimatePresence>
//           </div>

//           <button onClick={handleCashfreePayment} className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition">
//             Continue to Payment
//           </button>

//           <div className="mt-5 flex items-center justify-center gap-3 text-[10px] text-gray-500">
//             <span>🔒 SSL Secured</span>
//             <img src="/razorpay.svg" alt="razorpay" className="h-4" />
//             <img src="/visa.svg" alt="visa" className="h-4" />
//             <img src="/cashfree.svg" alt="cashfree" className="h-4" />
//           </div>

//           <div id="cashfree-dropin" className="mt-4"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
// // useEffect(() => {
// //     loadCashfreeScript()
// //         .then(() => console.log("Cashfree SDK loaded"))
// //         .catch((err) => {
// //             console.error(err);
// //             alert("Cashfree SDK failed to load");
// //         });
// // }, []);












import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const planData = {
  "plan-basic": {
    name: "Basic Growth Plan",
    price: 7999,
    features: [
      "Menu Score Update",
      "Customer Review Management",
      "Weekly Consultant Calls",
      "Menu Optimization",
      "Basic Promotion Strategy",
    ],
    badge: "Recommended for Startups",
  },
  "plan-premium": {
    name: "Premium Growth Plan",
    price: 9999,
    features: [
      "All Basic Features",
      "Dedicated Account Manager",
      "Festival-Specific Promotions",
      "Zomato & Swiggy Ad Campaigns",
      "Advanced Analytics Dashboard",
    ],
    badge: "Best for Growing Brands",
  },
};

const discountMap = {
  1: 0,
  3: 5,
  6: 10,
  12: 20,
};

const Checkout = () => {
  const { id } = useParams();
  const [duration, setDuration] = useState(12);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const plan = planData[id];
  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Invalid plan selected.
      </div>
    );
  }

  const discount = discountMap[duration];
  const monthlyPrice = plan.price - (plan.price * discount) / 100;
  const totalPrice = monthlyPrice * duration;

  const loadCashfreeScript = () => {
    return new Promise((resolve, reject) => {
      if (window.Cashfree) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://sdk.cashfree.com/js/ui/2.0.0/dropinClient.js";
      script.onload = () => resolve(true);
      script.onerror = () => reject("Failed to load Cashfree SDK");
      document.body.appendChild(script);
    });
  };

  const handleCashfreePayment = async () => {
    try {
      const loaded = await loadCashfreeScript();
      if (!loaded) {
        alert("Cashfree SDK failed to load");
        return;
      }

      const response = await fetch("http://localhost:5000/api/cashfree/initiate-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          planId: id,
          amount: totalPrice,
        }),
      });

      const data = await response.json();

      if (!data.payment_session_id) {
        alert("Failed to initiate payment: " + (data.message || "Unknown error"));
        console.error("Payment initiation error:", data);
        return;
      }

      const dropConfig = {
        layout: "POPUP",
        paymentSessionId: data.payment_session_id, // ✅ Corrected
        returnUrl: `http://localhost:5173/payment-success`,
        redirectTarget: "_self",
      };

      const cashfree = new window.Cashfree(dropConfig);
      cashfree.drop(document.getElementById("cashfree-dropin"));
    } catch (err) {
      console.error("💥 Error during Cashfree init:", err);
      alert("Unexpected error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
        <div className="md:col-span-2 bg-white shadow-xl rounded-2xl p-6">
          <div className="flex justify-between text-xs mb-6 text-gray-500">
            <div className="text-indigo-600 font-bold">1. Choose Plan</div>
            <div className="font-bold text-indigo-700">2. Checkout</div>
            <div className="text-gray-400">3. Payment</div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-xl p-5 mb-6">
            <h2 className="text-xl font-bold">{plan.name}</h2>
            <p className="text-xs mt-1">{plan.badge}</p>
            <p className="mt-3 text-xl font-semibold">₹{plan.price}</p>
          </div>

          <h3 className="text-base font-semibold mb-2 text-gray-800">What You’ll Get</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {plan.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center bg-gray-100 p-3 rounded-lg"
              >
                <FaCheckCircle className="text-green-500 mr-2" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl shadow-lg p-5 h-fit">
          <h4 className="text-sm font-semibold mb-3">Your Details</h4>
          <input type="text" placeholder="Name" className="w-full p-2 mb-2 border rounded-md" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded-md" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <input type="tel" placeholder="Phone" className="w-full p-2 mb-2 border rounded-md" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
          <textarea placeholder="Address" className="w-full p-2 mb-4 border rounded-md" onChange={(e) => setFormData({ ...formData, address: e.target.value })}></textarea>

          <label className="block mb-2 text-xs font-medium text-gray-700">Select Duration</label>
          <select value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full mb-3 p-2 border rounded-md">
            <option value={1}>1 Month</option>
            <option value={3}>3 Months (5% OFF)</option>
            <option value={6}>6 Months (10% OFF)</option>
            <option value={12}>12 Months (20% OFF)</option>
          </select>

          <div className="text-xs text-gray-500 mb-1">Monthly Price:</div>
          <div className="text-lg font-bold text-indigo-700 mb-2">₹{monthlyPrice.toFixed(2)}</div>

          <div className="border-t pt-3 mt-3 text-xs text-gray-700 space-y-1">
            <p>Duration: {duration} months</p>
            <p>Discount: {discount}%</p>
            <AnimatePresence>
              <motion.p key={totalPrice} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="text-base font-semibold text-green-600">
                Total: ₹{totalPrice.toFixed(2)}
              </motion.p>
            </AnimatePresence>
          </div>

          <button onClick={handleCashfreePayment} className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition">
            Continue to Payment
          </button>

          <div className="mt-5 flex items-center justify-center gap-3 text-[10px] text-gray-500">
            <span>🔒 SSL Secured</span>
            <img src="/razorpay.svg" alt="razorpay" className="h-4" />
            <img src="/visa.svg" alt="visa" className="h-4" />
            <img src="/cashfree.svg" alt="cashfree" className="h-4" />
          </div>

          <div id="cashfree-dropin" className="mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
