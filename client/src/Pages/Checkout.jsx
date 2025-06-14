









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

//   const loadCashfreeScript = () => {
//     return new Promise((resolve, reject) => {
//       if (window.cashfreeSandbox) return resolve(true);
//       const script = document.createElement("script");
//       script.src = "https://sdk.cashfree.com/js/ui/2.0.0/dropinClient.js";
//       script.onload = () => resolve(true);
//       script.onerror = () => reject("Failed to load Cashfree SDK");
//       document.body.appendChild(script);
//     });
//   };

//   const handleCashfreePayment = async () => {
//     try {
//       const loaded = await loadCashfreeScript();
//       if (!loaded) {
//         alert("Cashfree SDK failed to load");
//         return;
//       }

//       const response = await fetch("http://localhost:5000/api/cashfree/initiate-payment", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           address: formData.address,
//           planId: id,
//           amount: totalPrice,
//         }),
//       });

//       const data = await response.json();

//       if (!data.payment_session_id) {
//         alert("Failed to initiate payment: " + (data.message || "Unknown error"));
//         console.error("Payment initiation error:", data);
//         return;
//       }

//       // Updated Cashfree dropin usage as requested
//       const cashfree = new window.cashfreeSandbox.Cashfree(data.payment_session_id);
//       cashfree.drop(document.getElementById("cashfree-dropin"), {
//         onSuccess: (res) => { console.log('Payment successful', res); },
//         onFailure: (err) => { console.error('Payment failed', err); },
//         components: ["order-details", "card", "upi"],
//       });
//     } catch (err) {
//       console.error("💥 Error during Cashfree init:", err);
//       alert("Unexpected error. Please try again later.");
//     }
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










// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";

// const API_BASE = "https://magicscale-backend.onrender.com";

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

// const discountMap = { 1: 0, 3: 5, 6: 10, 12: 20 };

// const Checkout = () => {
//   const { id } = useParams();
//   const [duration, setDuration] = useState(12);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
//   const [sdkLoaded, setSdkLoaded] = useState(false);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.cashfree.com/js/ui/2.0.0/cashfree.prod.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.Cashfree) {
//         setSdkLoaded(true);
//         console.log("✅ Cashfree SDK loaded successfully.");
//       } else {
//         console.error("⚠️ Cashfree SDK loaded but not available.");
//       }
//     };
//     script.onerror = () => {
//       console.error("❌ Failed to load Cashfree SDK.");
//     };
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

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

// //   const handleCashfreePayment = async () => {
// //     if (!sdkLoaded) {
// //       alert("Cashfree SDK is still loading. Please wait.");
// //       return;
// //     }

// //     if (!formData.name || !formData.email || !formData.phone) {
// //       alert("Please fill in all required fields.");
// //       return;
// //     }

// //     // try {
// //     //   const response = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
// //     //     // method: "POST",
// //     //     // headers: { "Content-Type": "application/json" },
// //     //     // body: JSON.stringify({
// //     //     //   planId: id,
// //     //     //   duration,
// //     //     //   totalPrice,
// //     //     //   customer: formData,
// //     //     // }),
// //     //   });
// //     try {
// //         const response = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
// //   method: "POST",
// //   headers: { "Content-Type": "application/json" },
// //   body: JSON.stringify({
// //     name: formData.name,
// //     email: formData.email,
// //     phone: formData.phone,
// //     amount: totalPrice,
// //     planId: id,
// //     duration,
// //     address: formData.address,
// //   }),
// // });


// //       const data = await response.json();

// //       if (!response.ok || !data.payment_session_id) {
// //         throw new Error(data.message || "Failed to initiate payment.");
// //       }

// //       window.Cashfree.initialiseDropin({
// //         paymentSessionId: data.payment_session_id,
// //         redirectTarget: "_self",
// //         returnUrl: `https://your-frontend.com/payment-success?order_id={order_id}`,
// //         onSuccess: function (data) {
// //           console.log("Payment Success:", data);
// //         },
// //         onFailure: function (data) {
// //           console.error("Payment Failed:", data);
// //           alert("Payment failed. Please try again.");
// //         },
// //         onError: function (err) {
// //           console.error("Drop-in error:", err);
// //           alert("Unexpected error during payment.");
// //         },
// //       });
// //     } catch (err) {
// //       console.error("Error during payment init:", err);
// //       alert("Payment initiation failed: " + err.message);
// //     }
// //   };
//   const handleCashfreePayment = async () => {
//   if (!sdkLoaded) {
//     alert("Cashfree SDK is still loading. Please wait.");
//     return;
//   }

//   if (!formData.name || !formData.email || !formData.phone) {
//     alert("Please fill in all required fields.");
//     return;
//   }

//   try {
//     const response = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         amount: totalPrice,
//         planId: id,
//         duration,
//         address: formData.address,
//       }),
//     });

//     const data = await response.json();

//     if (!response.ok || !data.payment_session_id) {
//       throw new Error(data.message || "Failed to initiate payment.");
//     }

//     // ✅ Correct SDK usage for Drop-in UI v2
//     const cashfree = new window.Cashfree();
//     cashfree.initialise({
//       paymentSessionId: data.payment_session_id,
//       redirectTarget: "_self",
//       returnUrl: `https://magicscale.in/payment-success?order_id={order_id}`, // replace if needed
//     });

//   } catch (err) {
//     console.error("Error during payment init:", err);
//     alert("Payment initiation failed: " + err.message);
//   }
// };


//   const isFormFilled = formData.name && formData.email && formData.phone;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-10 px-4">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
//         <div className="md:col-span-2 bg-white shadow-xl rounded-2xl p-6">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
//             Checkout Details
//           </h2>

//           {/* Plan Summary */}
//           <div className="mb-8 p-5 bg-indigo-50 border border-indigo-200 rounded-lg flex items-center justify-between">
//             <div>
//               <p className="text-lg font-semibold text-indigo-800">
//                 You selected: {plan.name}
//               </p>
//               <p className="text-gray-600">
//                 {plan.badge && (
//                   <span className="bg-indigo-200 text-indigo-700 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">
//                     {plan.badge}
//                   </span>
//                 )}
//                 Duration: {duration} months
//               </p>
//             </div>
//             <div className="text-right">
//               <p className="text-xl font-bold text-gray-900">
//                 ₹{totalPrice.toLocaleString()}
//               </p>
//               {discount > 0 && (
//                 <p className="text-green-600 text-sm font-medium">
//                   {discount}% Discount Applied!
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Duration Selection */}
//           <div className="mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">
//               Select Subscription Duration
//             </h3>
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//               {Object.entries(discountMap).map(([months, disc]) => (
//                 <button
//                   key={months}
//                   onClick={() => setDuration(parseInt(months))}
//                   className={`p-4 rounded-lg border-2 transition-all duration-200 ease-in-out ${
//                     duration === parseInt(months)
//                       ? "border-indigo-600 bg-indigo-50 text-indigo-800 shadow-md"
//                       : "border-gray-300 bg-white hover:border-indigo-400"
//                   }`}
//                 >
//                   <p className="font-semibold text-lg">{months} Months</p>
//                   {disc > 0 && (
//                     <p className="text-green-600 text-sm font-medium">
//                       Save {disc}%
//                     </p>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Contact Form */}
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">
//             Contact Information
//           </h3>
//           <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             <div>
//               <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                 required
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-2">
//                 Address (Optional)
//               </label>
//               <textarea
//                 id="address"
//                 rows="3"
//                 value={formData.address}
//                 onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//               />
//             </div>
//           </form>
//         </div>

//         {/* Summary & Button */}
//         <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl shadow-lg p-5 h-fit">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">
//             Order Summary
//           </h3>

//           <div className="space-y-3 mb-6">
//             <div className="flex justify-between text-gray-700">
//               <span>{plan.name}</span>
//               <span>₹{plan.price.toLocaleString()} / month</span>
//             </div>
//             <div className="flex justify-between text-gray-700">
//               <span>Duration</span>
//               <span>{duration} Months</span>
//             </div>
//             {discount > 0 && (
//               <div className="flex justify-between text-green-600 font-medium">
//                 <span>Discount ({discount}%)</span>
//                 <span>
//                   - ₹{((plan.price * discount) / 100).toLocaleString()} / month
//                 </span>
//               </div>
//             )}
//             <div className="flex justify-between text-gray-800 font-semibold border-t pt-3 mt-3">
//               <span>Monthly Price (after discount)</span>
//               <span>₹{monthlyPrice.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between text-xl font-bold text-gray-900 border-t pt-4 mt-4">
//               <span>Total Amount</span>
//               <span>₹{totalPrice.toLocaleString()}</span>
//             </div>
//           </div>

//           <button
//             onClick={handleCashfreePayment}
//             disabled={!sdkLoaded || !isFormFilled}
//             className={`mt-5 w-full ${
//               sdkLoaded && isFormFilled
//                 ? "bg-indigo-600 hover:bg-indigo-700"
//                 : "bg-gray-400 cursor-not-allowed"
//             } text-white py-2 rounded-md font-semibold transition`}
//           >
//             {sdkLoaded ? "Continue to Payment" : "Loading Payment..."}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;













import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const API_BASE = "https://magicscale-backend.onrender.com";

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

const discountMap = { 1: 0, 3: 5, 6: 10, 12: 20 };

const Checkout = () => {
  const { id } = useParams();
  const [duration, setDuration] = useState(12);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    script.async = true;
    script.onload = () => {
      if (window.Cashfree) {
        setSdkLoaded(true);
        console.log("✅ Cashfree SDK loaded successfully.");
      } else {
        console.error("⚠️ Cashfree SDK loaded but not available.");
      }
    };
    script.onerror = () => {
      console.error("❌ Failed to load Cashfree SDK.");
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

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

  const handleCashfreePayment = async () => {
    if (!sdkLoaded) {
      alert("Cashfree SDK is still loading. Please wait.");
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          amount: totalPrice,
          planId: id,
          duration,
          address: formData.address,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.payment_session_id) {
        throw new Error(data.message || "Failed to initiate payment.");
      }

      await window.Cashfree.initialiseDropin({
        paymentSessionId: data.payment_session_id,
        redirectTarget: "_self",
        returnUrl: `https://magicscale.in/payment-success?order_id={order_id}`,
      });

    } catch (err) {
      console.error("Error during payment init:", err);
      alert("Payment initiation failed: " + err.message);
    }
  };

  const isFormFilled = formData.name && formData.email && formData.phone;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
        <div className="md:col-span-2 bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
            Checkout Details
          </h2>

          <div className="mb-8 p-5 bg-indigo-50 border border-indigo-200 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-indigo-800">
                You selected: {plan.name}
              </p>
              <p className="text-gray-600">
                {plan.badge && (
                  <span className="bg-indigo-200 text-indigo-700 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">
                    {plan.badge}
                  </span>
                )}
                Duration: {duration} months
              </p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">
                ₹{totalPrice.toLocaleString()}
              </p>
              {discount > 0 && (
                <p className="text-green-600 text-sm font-medium">
                  {discount}% Discount Applied!
                </p>
              )}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Select Subscription Duration
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.entries(discountMap).map(([months, disc]) => (
                <button
                  key={months}
                  onClick={() => setDuration(parseInt(months))}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ease-in-out ${
                    duration === parseInt(months)
                      ? "border-indigo-600 bg-indigo-50 text-indigo-800 shadow-md"
                      : "border-gray-300 bg-white hover:border-indigo-400"
                  }`}
                >
                  <p className="font-semibold text-lg">{months} Months</p>
                  {disc > 0 && (
                    <p className="text-green-600 text-sm font-medium">
                      Save {disc}%
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Contact Information
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-2">
                Address (Optional)
              </label>
              <textarea
                id="address"
                rows="3"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </form>
        </div>

        <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl shadow-lg p-5 h-fit">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">
            Order Summary
          </h3>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-700">
              <span>{plan.name}</span>
              <span>₹{plan.price.toLocaleString()} / month</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Duration</span>
              <span>{duration} Months</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-600 font-medium">
                <span>Discount ({discount}%)</span>
                <span>
                  - ₹{((plan.price * discount) / 100).toLocaleString()} / month
                </span>
              </div>
            )}
            <div className="flex justify-between text-gray-800 font-semibold border-t pt-3 mt-3">
              <span>Monthly Price (after discount)</span>
              <span>₹{monthlyPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-gray-900 border-t pt-4 mt-4">
              <span>Total Amount</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>
          </div>

          <button
            onClick={handleCashfreePayment}
            disabled={!sdkLoaded || !isFormFilled}
            className={`mt-5 w-full ${
              sdkLoaded && isFormFilled
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-gray-400 cursor-not-allowed"
            } text-white py-2 rounded-md font-semibold transition`}
          >
            {sdkLoaded ? "Continue to Payment" : "Loading Payment..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
