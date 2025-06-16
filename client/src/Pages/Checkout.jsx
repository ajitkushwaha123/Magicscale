

















import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_BASE = "http://localhost:5000";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [cashfree, setCashfree] = useState(null);

  const plan = planData[id];
  const discount = discountMap[duration] || 0;
  const monthlyPrice = plan ? plan.price - (plan.price * discount) / 100 : 0;
  const totalPrice = monthlyPrice * duration;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    script.async = true;
    script.onload = () => {
      if (window.Cashfree) {
        const cf = window.Cashfree({ mode: "sandbox" }); // or "production"
        setCashfree(cf);
        setSdkLoaded(true);
        console.log("✅ Cashfree SDK initialized");
      } else {
        console.error("❌ window.Cashfree not found");
      }
    };
    script.onerror = () => console.error("❌ Failed to load Cashfree SDK");
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCashfreePayment = async () => {
    if (!sdkLoaded || !cashfree) {
      alert("Payment system is still loading. Please wait...");
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
          address: formData.address,
          planId: id,
          amount: totalPrice,
          duration,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.payment_session_id) {
        throw new Error(data.message || "Failed to initiate payment.");
      }

      cashfree
        .checkout({
          paymentSessionId: data.payment_session_id,
          returnUrl: `https://magicscale.in/payment-success?order_id=${data.order_id}`,
        })
        .then((res) => {
          if (res.error) {
            console.error("❌ Checkout error:", res.error);
            alert("Payment checkout failed. Try again.");
          } else {
            console.log("✅ Checkout opened:", res);
          }
        })
        .catch((err) => {
          console.error("❌ Cashfree SDK Error:", err);
          alert("Something went wrong. Try again.");
        });
    } catch (err) {
      console.error("Payment Error:", err);
      alert("Payment initiation failed: " + err.message);
    }
  };

  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Invalid plan selected.
      </div>
    );
  }

  const isFormFilled = formData.name && formData.email && formData.phone;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
        <div className="md:col-span-2 bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-4">Billing Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="border p-2 rounded-md w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="border p-2 rounded-md w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="border p-2 rounded-md w-full"
              required
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address (optional)"
              className="border p-2 rounded-md w-full"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Select Duration</h3>
            <div className="flex gap-2">
              {[1, 3, 6, 12].map((m) => (
                <button
                  key={m}
                  onClick={() => setDuration(m)}
                  className={`px-4 py-2 border rounded ${
                    duration === m ? "bg-indigo-600 text-white" : "bg-white"
                  }`}
                >
                  {m} Month{m > 1 && "s"}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Plan Features</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
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

          {!sdkLoaded ? (
            <p className="text-center text-gray-500 font-medium py-2">
              🔄 Loading payment system...
            </p>
          ) : !isFormFilled ? (
            <p className="text-center text-orange-500 font-medium py-2">
              ⚠️ Please complete the contact form
            </p>
          ) : (
            <button
              onClick={handleCashfreePayment}
              className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition"
            >
              Proceed to Payment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;



















