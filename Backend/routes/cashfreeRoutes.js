

// import express from "express";
// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();
// const router = express.Router();

// router.post("/initiate-payment", async (req, res) => {
//   const { name, email, phone, amount } = req.body;
//   const orderId = "ORD_" + Date.now();

//   const orderUrl =
//     process.env.CASHFREE_ENV === "PROD"
//       ? "https://api.cashfree.com/pg/orders"
//       : "https://sandbox.cashfree.com/pg/orders";

//   try {
//     const orderResponse = await axios.post(
//       orderUrl,
//       {
//         order_id: orderId,
//         order_amount: amount,
//         order_currency: "INR",
//         customer_details: {
//           customer_id: email.replace(/[^a-zA-Z0-9_-]/g, "_"),
//           customer_name: name,
//           customer_email: email,
//           customer_phone: phone,
//         },
//         order_meta: {
//           return_url: `https://magicscale.in/payment-success?order_id=${orderId}`,
//         },
//       },
//       {
//         headers: {
//           "x-client-id": process.env.CASHFREE_APP_ID,
//           "x-client-secret": process.env.CASHFREE_SECRET_KEY,
//           "x-api-version": "2022-09-01",
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     res.json({
//       success: true,
//       order_id: orderId,
//       payment_session_id: orderResponse.data.payment_session_id,
//     });
//   } catch (err) {
//     console.error("💥 Cashfree error:", err.response?.data || err.message);
//     res.status(500).json({
//       success: false,
//       message: "Payment initiation failed",
//       error: err.response?.data || err.message,
//     });
//   }
// });

// export default router;





import express from "express";
import axios from "axios";
import dotenv from "dotenv";

import User from "../models/User.js";

import {sendPaymentEmails } from "../utils/email.js";

import Payment from "../models/Payment.js";


dotenv.config();
const router = express.Router();

// ✅ Route 1: Initiate Payment
router.post("/initiate-payment", async (req, res) => {
  const { name, email, phone, amount } = req.body;
  const orderId = "ORD_" + Date.now();

  const orderUrl =
    process.env.CASHFREE_ENV === "PROD"
      ? "https://api.cashfree.com/pg/orders"
      : "https://sandbox.cashfree.com/pg/orders";

  try {
    const orderResponse = await axios.post(
      orderUrl,
      {
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
          customer_id: email.replace(/[^a-zA-Z0-9_-]/g, "_"),
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
        },
        order_meta: {
          return_url: `https://magicscale.in/payment-success?order_id=${orderId}`,
        },
      },
      {
        headers: {
          "x-client-id": process.env.CASHFREE_APP_ID,
          "x-client-secret": process.env.CASHFREE_SECRET_KEY,
          "x-api-version": "2022-09-01",
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      success: true,
      order_id: orderId,
      payment_session_id: orderResponse.data.payment_session_id,
    });
  } catch (err) {
    console.error("💥 Cashfree error:", err.response?.data || err.message);
    res.status(500).json({
      success: false,
      message: "Payment initiation failed",
      error: err.response?.data || err.message,
    });
  }
});

// ✅ Route 2: Confirm Payment
router.post("/confirm-payment", async (req, res) => {
  try {
    const { order_id, userId, plan, duration, amount, email, name } = req.body;

    await Payment.create({
      user: userId,
      plan,
      duration,
      amount,
      orderId: order_id,
      status: "paid",
      timestamp: new Date(),
    });

    await User.findByIdAndUpdate(userId, {
      subscription: {
        plan,
        duration,
        expiresAt: new Date(Date.now() + duration * 30 * 24 * 60 * 60 * 1000),
      },
    });

    await sendEmail({
      to: email,
      subject: `Payment Confirmation - ${plan}`,
      text: `Hi ${name},\n\nThank you for purchasing the ${plan} plan.\nOrder ID: ${order_id}\nAmount: ₹${amount}`,
    });

    await sendEmail({
      to: "admin@magicscale.in",
      subject: `New Purchase - ${plan}`,
      text: `Customer: ${name}\nEmail: ${email}\nPlan: ${plan}\nAmount: ₹${amount}\nOrder ID: ${order_id}`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Confirm payment error:", err.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default router;
