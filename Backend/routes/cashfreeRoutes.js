

import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

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

export default router;
