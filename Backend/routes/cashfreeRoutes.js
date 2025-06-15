// import express from "express";
// import dotenv from "dotenv";
// import { Cashfree } from "cashfree-pg";
// dotenv.config();

// const router = express.Router();

// // Utility validators: email & Indian phone format
// const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone);

// router.post("/initiate-payment", async (req, res) => {
//   const { name, email, phone, address, planId, amount } = req.body;

//   // Validate required fields
//   if (!name || !email || !phone || !amount) {
//     return res.status(400).json({
//       success: false,
//       message: "Missing required fields. Name, email, phone, and amount are required.",
//     });
//   }
//   if (!isValidEmail(email)) {
//     return res.status(400).json({ success: false, message: "Invalid email format." });
//   }
//   if (!isValidPhone(phone)) {
//     return res.status(400).json({ success: false, message: "Invalid Indian phone number." });
//   }
//   if (isNaN(amount) || amount <= 0) {
//     return res.status(400).json({ success: false, message: "Invalid amount. Must be > 0." });
//   }

//   // Ensure credentials exist
//   if (!process.env.CASHFREE_APP_ID || !process.env.CASHFREE_SECRET_KEY) {
//     return res.status(500).json({
//       success: false,
//       message: "Server configuration error. Cashfree credentials not set.",
//     });
//   }

//   try {
//     // Generate unique identifiers
//     const orderId = "ORD_" + Date.now();
//     const customerId = email.replace(/[^a-zA-Z0-9-]/g, "-");

//     // Initialize SDK
//     Cashfree.XClientId = process.env.CASHFREE_APP_ID;
//     Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
//     Cashfree.XEnvironment = Cashfree.Environment.PRODUCTION;

//     const orderResponse = await Cashfree.PGCreateOrder({
//       order_id: orderId,
//       order_amount: amount,
//       order_currency: "INR",
//       customer_details: {
//         customer_id: customerId,
//         customer_name: name,
//         customer_email: email,
//         customer_phone: phone,
//       },
//       order_meta: {
//         return_url: `https://magicscale.in/payment-success?order_id=${orderId}`,
//       },
//     });

//     // Validate SDK response
//     if (!orderResponse || !orderResponse.payment_session_id) {
//       console.error("❗️Unexpected SDK response:", orderResponse);
//       return res.status(502).json({
//         success: false,
//         message: "Invalid response from payment gateway.",
//       });
//     }

//     // Return the session ID to frontend
//     return res.status(200).json({
//       success: true,
//       payment_session_id: orderResponse.payment_session_id,
//     });
//   } catch (error) {
//     console.error("❌ Cashfree SDK Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to initiate payment.",
//       error: error.message || "Unknown error",
//     });
//   }
// });

// export default router;








// // routes/cashfreeRoutes.js
// import express from "express";
// import dotenv from "dotenv";
// // import { Cashfree } from "cashfree-pg"; // ✅ Correct way to import from v2
// import Cashfree from "cashfree-pg"; // ✅ Correct


// dotenv.config();
// const router = express.Router();

// const config = {
//   env: "SANDBOX",
//  // or "SANDBOX"
//   clientId: process.env.CASHFREE_CLIENT_ID,
//   clientSecret: process.env.CASHFREE_CLIENT_SECRET,
// };

// // Set credentials for the SDK
// Cashfree.XClientId = config.clientId;
// Cashfree.XClientSecret = config.clientSecret;
// Cashfree.XEnvironment = config.env;

// router.post("/initiate-payment", async (req, res) => {
//   console.log("✅ /initiate-payment hit");
//   const { name, email, phone, address, planId, amount } = req.body;

//   try {
//     const orderId = "ORD_" + Date.now();
//     const customerId = email.replace(/[^a-zA-Z0-9-]/g, "-");

//     const orderRequest = {
//       order_id: orderId,
//       order_amount: amount,
//       order_currency: "INR",
//       customer_details: {
//         customer_id: customerId,
//         customer_name: name,
//         customer_email: email,
//         customer_phone: phone,
//       },
//       order_meta: {
//         return_url: `https://magicscale.in/payment-success?order_id=${orderId}`,
//       },
//     };

//     const result = await Cashfree.PGCreateOrder(orderRequest);

//     if (!result?.data?.payment_session_id) {
//       return res.status(500).json({
//         success: false,
//         message: "Cashfree SDK did not return payment session ID",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       order_id: orderId, // ✅ Include for frontend returnUrl
//       payment_session_id: result.data.payment_session_id,
//     });
//   } catch (error) {
//     console.error("Payment SDK Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Payment initiation failed",
//       error: error.message,
//     });
//   }
// });

// export default router;

// routes/cashfreeRoutes.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/initiate-payment", async (req, res) => {
  const { name, email, phone, amount } = req.body;
  const orderId = "ORD_" + Date.now();
  const customerId = "cust_" + Date.now(); // ✅ safe alphanumeric ID

  try {
    const response = await axios.post(
      "https://sandbox.cashfree.com/pg/orders",
      {
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
          customer_id: customerId, // ✅ fixed invalid value
          customer_name: name,
          customer_email: email,
          customer_phone: phone
        },
        order_meta: {
          return_url: `https://yourdomain.com/payment-success?order_id=${orderId}`
        }
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-client-id": process.env.CASHFREE_APP_ID,
          "x-client-secret": process.env.CASHFREE_SECRET_KEY,
          "x-api-version": "2022-09-01"
        }
      }
    );

    res.json({
      success: true,
      order_id: orderId,
      payment_session_id: response.data.payment_session_id
    });
  } catch (err) {
    console.error("💥 Cashfree error:", err.response?.data || err.message);
    res.status(500).json({
      success: false,
      message: "Payment initiation failed",
      error: err.response?.data || err.message
    });
  }
});

export default router;
