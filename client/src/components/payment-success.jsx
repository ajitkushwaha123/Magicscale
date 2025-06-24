// src/pages/PaymentSuccess.jsx
import React, { useEffect, useState } from "react";

const API_BASE = process.env.REACT_APP_API_BASE; // Replace with your API base URL
//https:magicscale

const PaymentSuccess = () => {
  const [status, setStatus] = useState("Processing payment confirmation…");

  useEffect(() => {
    (async () => {
      const params = new URLSearchParams(window.location.search);
      const order_id = params.get("order_id");
      const details = JSON.parse(localStorage.getItem("checkout_order") || "{}");

      const res = await fetch(`${API_BASE}/api/payment/success`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...details, order_id }),
      });

      if (res.ok) {
        setStatus("✅ Payment confirmed! Confirmation sent to your email.");
        localStorage.removeItem("checkout_order");
      } else {
        setStatus("⚠ Unable to confirm payment. Contact support.");
      }
    })();
  }, []);

  return <div className="p-8"><h1>{status}</h1></div>;
};

export default PaymentSuccess;
