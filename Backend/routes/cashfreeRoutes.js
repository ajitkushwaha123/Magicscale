






import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// ✅ Validate email format
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ✅ Validate Indian phone format (10-digit starting from 6-9)
const isValidPhone = (phone) =>
  /^[6-9]\d{9}$/.test(phone);

router.post("/initiate-payment", async (req, res) => {
  console.log("🧩 Received /initiate-payment:", req.body);

  const { name, email, phone, address, planId, amount } = req.body;

  // 🚫 Input validations
  if (!name || !email || !phone || !amount) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields. Name, email, phone, and amount are required.",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format.",
    });
  }

  if (!isValidPhone(phone)) {
    return res.status(400).json({
      success: false,
      message: "Invalid phone number. Must be a 10-digit Indian mobile number.",
    });
  }

  if (isNaN(amount) || amount <= 0) {
    return res.status(400).json({
      success: false,
      message: "Invalid amount. It must be a number greater than 0.",
    });
  }

  // ❗ Check for required env vars
  if (!process.env.CASHFREE_APP_ID || !process.env.CASHFREE_SECRET_KEY) {
    return res.status(500).json({
      success: false,
      message: "Server configuration error. Cashfree credentials not set.",
    });
  }

  try {
    const orderId = "ORD_" + Date.now();

    // ✅ Sanitize email to create valid customer_id (Cashfree allows only alphanumerics and hyphens)
    const customerId = email.replace(/[^a-zA-Z0-9-]/g, "-");

    console.log("🚀 Creating Order:", {
      orderId, name, email, phone, address, planId, amount, customerId,
    });

    const response = await axios.post(
      "https://api.cashfree.com/pg/orders",
      {
        customer_details: {
          customer_id: customerId,
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
        },
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        order_meta: {
          return_url: `https://magicscale.in/payment-success?order_id=${orderId}`,

        },
      },
      {
        headers: {
          "x-client-id": process.env.CASHFREE_APP_ID,
          "x-client-secret": process.env.CASHFREE_SECRET_KEY,
          "Content-Type": "application/json",
          "x-api-version": "2022-09-01",
        },
      }
    );

    if (!response.data || !response.data.payment_session_id) {
      console.error("❗️Cashfree API returned unexpected format:", response.data);
      return res.status(502).json({
        success: false,
        message: "Invalid response from payment gateway.",
      });
    }

    return res.status(200).json({
      success: true,
      payment_session_id: response.data.payment_session_id,
    });

  } catch (error) {
    console.error("❌ Payment API Error:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
      console.error("Data:", error.response.data);
    } else if (error.request) {
      console.error("No response received from Cashfree:", error.request);
    } else {
      console.error("Error Message:", error.message);
    }

    return res.status(500).json({
      success: false,
      message: "Failed to initiate payment.",
      error: error.response?.data?.message || error.message || "Unknown error",
    });
  }
});

export default router;






// // //hlo













// import express from "express";
// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// const router = express.Router();

// // ✅ Validate email format
// const isValidEmail = (email) =>
//   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// // ✅ Validate Indian phone format
// const isValidPhone = (phone) =>
//   /^[6-9]\d{9}$/.test(phone);

// router.post("/initiate-payment", async (req, res) => {
//   console.log("🧩 Received /initiate-payment:", req.body);

//   const { name, email, phone, address, planId, amount } = req.body;

//   // 🚫 Validate Inputs
//   if (!name || !email || !phone || !amount) {
//     return res.status(400).json({
//       success: false,
//       message: "Missing required fields: name, email, phone, and amount are required.",
//     });
//   }

//   if (!isValidEmail(email)) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid email format.",
//     });
//   }

//   if (!isValidPhone(phone)) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid phone number. Must be a 10-digit Indian mobile number.",
//     });
//   }

//   if (isNaN(amount) || amount <= 0) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid amount. It must be a positive number.",
//     });
//   }

//   // ❗ Ensure environment variables are present
//   const { CASHFREE_APP_ID, CASHFREE_SECRET_KEY } = process.env;

//   if (!CASHFREE_APP_ID || !CASHFREE_SECRET_KEY) {
//     return res.status(500).json({
//       success: false,
//       message: "Server configuration error. Cashfree credentials missing.",
//     });
//   }

//   try {
//     const orderId = "ORD_" + Date.now();
//     const customerId = email.replace(/[^a-zA-Z0-9-]/g, "-");

//     console.log("🚀 Creating order for payment:", {
//       orderId, name, email, phone, amount, customerId,
//     });

//     const response = await axios.post(
//       "https://api.cashfree.com/pg/orders",
//       {
//         order_id: orderId,
//         order_amount: amount,
//         order_currency: "INR",
//         customer_details: {
//           customer_id: customerId,
//           customer_name: name,
//           customer_email: email,
//           customer_phone: phone,
//         },
//         order_meta: {
//           return_url: `https://magicscale.in/payment-success?order_id=${orderId}`,
//           notify_url: `https://magicscale.in/api/cashfree/webhook`, // optional, if you have webhook
//         },
//       },
//       {
//         headers: {
//           "x-client-id": CASHFREE_APP_ID,
//           "x-client-secret": CASHFREE_SECRET_KEY,
//           "Content-Type": "application/json",
//           "x-api-version": "2022-09-01",
//         },
//       }
//     );

//     const { payment_session_id } = response.data;

//     if (!payment_session_id) {
//       console.error("❗️Cashfree API did not return payment_session_id:", response.data);
//       return res.status(502).json({
//         success: false,
//         message: "Invalid response from Cashfree.",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       payment_session_id,
//       order_id: orderId, // optional: frontend may need this too
//     });

//   } catch (error) {
//     console.error("❌ Cashfree API Error:");
//     if (error.response) {
//       console.error("Status:", error.response.status);
//       console.error("Headers:", error.response.headers);
//       console.error("Data:", error.response.data);
//     } else if (error.request) {
//       console.error("No response from Cashfree:", error.request);
//     } else {
//       console.error("Error message:", error.message);
//     }

//     return res.status(500).json({
//       success: false,
//       message: "Failed to initiate payment.",
//       error: error.response?.data?.message || error.message || "Unknown error",
//     });
//   }
// });

// export default router;
