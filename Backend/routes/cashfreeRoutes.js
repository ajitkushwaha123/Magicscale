
// routes cashfreeRoutes.js
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
