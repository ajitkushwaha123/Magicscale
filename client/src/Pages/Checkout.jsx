



// //corect code 



// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";

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

//  const discountMap = { 1: 0, 3: 5, 6: 10, 12: 20 };
// // const getDiscount = (planId, duration) => {
// //   if (!["plan-basic", "plan-premium"].includes(planId)) return 0;
// //   switch (duration) {
// //     case 1: return 10;
// //     case 3: return 25;
// //     case 6: return 30;
// //     case 12: return 40;
// //     default: return 0;
// //   }
// // };

// const Checkout = () => {
//   const { id } = useParams();
//   const [duration, setDuration] = useState(12);
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
//   const [sdkLoaded, setSdkLoaded] = useState(false);
//   const [cashfree, setCashfree] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const plan = planData[id];
//   const discount = discountMap[duration] || 0;
//   const monthlyPrice = plan ? plan.price - (plan.price * discount) / 100 : 0;
//   const totalPrice = monthlyPrice * duration;

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
//     script.async = true;
//     script.onload = () => {
//       if (window.Cashfree) {
//         const cf = window.Cashfree({ mode: "production" });
//         setCashfree(cf);
//         setSdkLoaded(true);
//       }
//     };
//     document.body.appendChild(script);
//     return () => document.body.removeChild(script);
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCashfreePayment = async () => {
//     if (!sdkLoaded || !cashfree || !formData.name || !formData.email || !formData.phone) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, planId: id, amount: totalPrice, duration }),
//       });
//       const data = await res.json();
//       if (!res.ok || !data.payment_session_id) throw new Error("Failed to initiate payment.");
//       await cashfree.checkout({
//         paymentSessionId: data.payment_session_id,
//         returnUrl: `https://magicscale.in/payment-success?order_id=${data.order_id}`,
//       });
//     } catch (err) {
//       alert("Payment failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!plan) return <div className="text-center text-red-500 py-10">Invalid plan selected</div>;
//   const isFormFilled = formData.name && formData.email && formData.phone;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 py-12 px-4">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8"
//         >
//           <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 border-b pb-2">Checkout</h2>
//           <div className="grid sm:grid-cols-2 gap-5">
//             {["name", "email", "phone", "address"].map((field) => (
//               <input
//                 key={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleInputChange}
//                 placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                 className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-xl p-3 w-full"
//                 required={field !== "address"}
//               />
//             ))}
//           </div>

//           <div className="mt-6">
//             <h3 className="text-lg font-bold text-gray-800 mb-2">Duration</h3>
//             <div className="flex gap-3 flex-wrap">
//               {[1, 3, 6, 12].map((m) => (
//                 <motion.button
//                   key={m}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setDuration(m)}
//                   className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
//                     duration === m
//                       ? "bg-indigo-600 text-white"
//                       : "bg-white text-indigo-600 border-indigo-300"
//                   }`}
//                 >
//                   {m} Month{m > 1 && "s"}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-8">
//             <h3 className="text-lg font-bold text-gray-800 mb-4">Plan Features</h3>
//             <ul className="space-y-2">
//               {plan.features.map((feature, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center text-gray-700"
//                 >
//                   <FaCheckCircle className="text-green-500 mr-2" /> {feature}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="sticky top-20 bg-white rounded-3xl shadow-xl p-6"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">Order Summary</h3>
//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between text-gray-600">
//               <span>{plan.name}</span>
//               <span>₹{plan.price.toLocaleString()} / month</span>
//             </div>
//             <div className="flex justify-between text-gray-600">
//               <span>Duration</span>
//               <span>{duration} Months</span>
//             </div>
//             {discount > 0 && (
//               <div className="flex justify-between text-green-600">
//                 <span>Discount ({discount}%)</span>
//                 <span>- ₹{((plan.price * discount) / 100).toLocaleString()}</span>
//               </div>
//             )}
//             <div className="flex justify-between font-semibold border-t pt-3">
//               <span>Monthly Price</span>
//               <span>₹{monthlyPrice.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between text-lg font-bold border-t pt-4">
//               <span>Total</span>
//               <span>₹{totalPrice.toLocaleString()}</span>
//             </div>
//           </div>

//           {loading ? (
//             <button
//               disabled
//               className="mt-6 w-full bg-indigo-400 text-white py-2 rounded-xl flex justify-center items-center gap-2"
//             >
//               <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                   fill="none"
//                 />
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v8z"
//                 />
//               </svg>
//               Processing...
//             </button>
//           ) : (
//             <button
//               onClick={handleCashfreePayment}
//               disabled={!isFormFilled}
//               className={`mt-6 w-full py-2 rounded-xl font-semibold transition-all duration-300 text-white ${
//                 isFormFilled ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300 cursor-not-allowed"
//               }`}
//             >
//               Proceed to Payment
//             </button>
//           )}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
















import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const API_BASE = "https://magicscale-backend.onrender.com";

const planData = {
  basic: {
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
  premium: {
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

const discountMap = { 1: 10, 3: 25, 6: 30, 12: 40 };

const Checkout = () => {
  const { id } = useParams();
  const [duration, setDuration] = useState(12);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "" });
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [cashfree, setCashfree] = useState(null);
  const [loading, setLoading] = useState(false);

  const planKey = id?.replace("plan-", "");
  const plan = planData[planKey];
  const discount = discountMap[duration] || 0;
  const discountedMonthlyPrice = plan ? plan.price * (1 - discount / 100) : 0;
  const totalPrice = Math.round(discountedMonthlyPrice * duration);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    script.async = true;
    script.onload = () => {
      if (window.Cashfree) {
        const cf = window.Cashfree({ mode: "production" });
        setCashfree(cf);
        setSdkLoaded(true);
      }
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCashfreePayment = async () => {
    if (!sdkLoaded || !cashfree || !formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/cashfree/initiate-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, planId: planKey, amount: totalPrice, duration }),
      });
      const data = await res.json();
      if (!res.ok || !data.payment_session_id) throw new Error("Failed to initiate payment.");
      await cashfree.checkout({
        paymentSessionId: data.payment_session_id,
        returnUrl: `https://magicscale.in/payment-success?order_id=${data.order_id}`,
      });
    } catch (err) {
      alert("Payment failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!plan) return <div className="text-center text-red-500 py-10">Invalid plan selected</div>;
  const isFormFilled = formData.name && formData.email && formData.phone;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-2 bg-white rounded-3xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 border-b pb-2">Checkout</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {["name", "email", "phone", "address"].map((field) => (
              <input
                key={field}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none rounded-xl p-3 w-full"
                required={field !== "address"}
              />
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Duration</h3>
            <div className="flex gap-3 flex-wrap">
              {[1, 3, 6, 12].map((m) => (
                <motion.button
                  key={m}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setDuration(m)}
                  className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
                    duration === m
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-indigo-600 border-indigo-300"
                  }`}
                >
                  {m} Month{m > 1 && "s"}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Plan Features</h3>
            <ul className="space-y-2">
              {plan.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-700"
                >
                  <FaCheckCircle className="text-green-500 mr-2" /> {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-20 bg-white rounded-3xl shadow-xl p-6"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-3">Order Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>{plan.name}</span>
              <span>₹{plan.price.toLocaleString()} / month</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Duration</span>
              <span>{duration} Months</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount ({discount}%)</span>
                <span>- ₹{((plan.price * discount) / 100).toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold border-t pt-3">
              <span>Monthly Price</span>
              <span>₹{Math.round(discountedMonthlyPrice).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-4">
              <span>Total</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>
          </div>

          {loading ? (
            <button
              disabled
              className="mt-6 w-full bg-indigo-400 text-white py-2 rounded-xl flex justify-center items-center gap-2"
            >
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Processing...
            </button>
          ) : (
            <button
              onClick={handleCashfreePayment}
              disabled={!isFormFilled}
              className={`mt-6 w-full py-2 rounded-xl font-semibold transition-all duration-300 text-white ${
                isFormFilled ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Proceed to Payment
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;






