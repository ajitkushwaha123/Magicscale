// // routes/cashfreeRoutes.js
// import express from "express";
// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();
// const router = express.Router();

// const BASE_URL = "https://sandbox.cashfree.com/pg"; // Use production URL later

// router.post("/create-order", async (req, res) => {
//   const { amount, customer_id, customer_email, customer_phone } = req.body;

//   try {
//     const response = await axios.post(`${BASE_URL}/orders`, {
//       order_id: `ORDER_${Date.now()}`,
//       order_amount: amount,
//       order_currency: "INR",
//       customer_details: {
//         customer_id,
//         customer_email,
//         customer_phone,
//       },
//       order_meta: {
//         return_url: "http://localhost:5173/payment-success?order_id={order_id}",
//       },
//     }, {
//       headers: {
//         "x-api-version": "2022-09-01",
//         "Content-Type": "application/json",
//         "x-client-id": process.env.CASHFREE_APP_ID,
//         "x-client-secret": process.env.CASHFREE_SECRET_KEY,
//       }
//     });

//     res.json(response.data);
//   } catch (err) {
//     console.error(err?.response?.data || err.message);
//     res.status(500).send("Cashfree order creation failed");
//   }
// });

// export default router;








// import express from "express";
// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// const router = express.Router();

// router.post("/initiate-payment", async (req, res) => {
//   const { name, email, phone, address, planId, amount } = req.body;

//   try {
//     const orderId = "ORD_" + Date.now();
//     const response = await axios.post(
//     //   "https://api.cashfree.com/pg/orders"
//      "https://sandbox.cashfree.com/pg/orders"
// ,
//       {
//         customer_details: {
//           customer_id: email,
//           customer_name: name,
//           customer_email: email,
//           customer_phone: phone,
//         },
//         order_id: orderId,
//         order_amount: amount,
//         order_currency: "INR",
//         order_meta: {
//           return_url: "http://localhost:5173/payment-success?order_id={order_id}",
//         },
//       },
//       {
//         headers: {
//           "x-client-id": process.env.CASHFREE_APP_ID,
//           "x-client-secret": process.env.CASHFREE_SECRET_KEY,
//           "Content-Type": "application/json",
//           "x-api-version": "2022-09-01",
//         },
//       }
//     );

//     res.status(200).json({
//       success: true,
//       sessionId: response.data.payment_session_id,
//     });
//   } catch (error) {
//     console.error("Payment error:", error.response?.data || error.message);
//     res.status(500).json({
//       success: false,
//       message: "Failed to initiate payment.",
//     });
//   }
// });

// export default router;











// import express from "express";
// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// const router = express.Router();

// router.post("/initiate-payment", async (req, res) => {
//     console.log("🧩 Received /initiate-payment:", req.body);
//   const { name, email, phone, address, planId, amount } = req.body;

//   // Check for missing required fields
//   if (!name || !email || !phone || !amount) {
//     return res.status(400).json({
//       success: false,
//       message: "Missing required fields. Name, email, phone, and amount are required.",
//     });
//   }

//   try {
//     const orderId = "ORD_" + Date.now();
//     console.log("🚀 Creating Order:", {
//     orderId,
//     name, email, phone, address, planId, amount,
//   });

//     const response = await axios.post(
//       "https://api.cashfree.com/pg/orders",
//       {
//         customer_details: {
//           customer_id: email,
//           customer_name: name,
//           customer_email: email,
//           customer_phone: phone,
//         },
//         order_id: orderId,
//         order_amount: amount,
//         order_currency: "INR",
//         order_meta: {
//           return_url: "http://localhost:5173/payment-success?order_id={order_id}",
//         },
//       },
//       {
//         headers: {
//           "x-client-id": process.env.CASHFREE_APP_ID,
//           "x-client-secret": process.env.CASHFREE_SECRET_KEY,
//           "Content-Type": "application/json",
//           "x-api-version": "2022-09-01",
//         },
//       }
//     );

//     res.status(200).json({
//       success: true,
//       payment_session_id: response.data.payment_session_id,
//     });
//   } catch (error) {
//     console.error("❌ Payment API Error:");
//     if (error.response) {
//       console.error("Status:", error.response.status);
//       console.error("Headers:", error.response.headers);
//       console.error("Data:", error.response.data);
//     } else {
//       console.error("Error Message:", error.message);
//     }

//     res.status(500).json({
//       success: false,
//       message: "Failed to initiate payment.",
//       error: error.response?.data || error.message,
//     });
//   }
// });

// export default router;











// // ✅ AFTER
// import express from 'express';
// import cors from 'cors';
// import crypto from 'crypto';
// // import { Cashfree } from 'cashfree-pg';
// import { Cashfree, Environment } from 'cashfree-pg';
// import dotenv from 'dotenv';
// dotenv.config();


// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Configure Cashfree SDK
// Cashfree.XClientId = process.env.CASHFREE_APP_ID;
// Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
// Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

// // Generate a unique order ID
// function generateOrderId() {
//   const uniqueId = crypto.randomBytes(16).toString('hex');
//   const hash = crypto.createHash('sha256');
//   hash.update(uniqueId);
//   return hash.digest('hex').substr(0, 12);
// }

// // Route to test server
// app.get('/', (req, res) => {
//   res.send('Cashfree Integration Working');
// });

// // 🚀 Initiate Payment
// app.post('/api/cashfree/initiate-payment', async (req, res) => {
//   console.log("🧩 Received /initiate-payment:", req.body);
//   const { name, email, phone, address, planId, amount } = req.body;

//   if (!name || !email || !phone || !amount) {
//     return res.status(400).json({
//       success: false,
//       message: "Missing required fields: name, email, phone, and amount are required.",
//     });
//   }

//   try {
//     const orderId = generateOrderId();
//     const requestData = {
//       order_amount: parseFloat(amount),
//       order_currency: "INR",
//       order_id: orderId,
//       customer_details: {
//         customer_id: email,
//         customer_name: name,
//         customer_email: email,
//         customer_phone: phone,
//       },
//       order_meta: {
//         return_url: `http://localhost:5173/payment-success?order_id=${orderId}`,
//       },
//     };

//     const response = await Cashfree.PGCreateOrder("2023-08-01", requestData);

//     console.log("✅ Payment Session Created:", response.data);

//     res.status(200).json({
//       success: true,
//       orderId,
//       payment_session_id: response.data.payment_session_id,
//     });
//   } catch (error) {
//     console.error("❌ Error initiating payment:");
//     if (error.response) {
//       console.error("Status:", error.response.status);
//       console.error("Data:", error.response.data);
//     } else {
//       console.error("Message:", error.message);
//     }

//     res.status(500).json({
//       success: false,
//       message: "Payment initiation failed",
//       error: error.response?.data || error.message,
//     });
//   }
// });

// // ✅ Verify Payment Route
// app.post('/api/cashfree/verify', async (req, res) => {
//   const { orderId } = req.body;

//   if (!orderId) {
//     return res.status(400).json({
//       success: false,
//       message: "orderId is required for verification",
//     });
//   }

//   try {
//     const response = await Cashfree.PGOrderFetchPayments("2023-08-01", orderId);
//     res.status(200).json({
//       success: true,
//       paymentDetails: response.data,
//     });
//   } catch (error) {
//     console.error("❌ Error verifying payment:");
//     res.status(500).json({
//       success: false,
//       message: "Failed to verify payment",
//       error: error.response?.data || error.message,
//     });
//   }
// });

// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });
    

// export default router;
















// import express from "express";
// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// const router = express.Router();

// // Validate email format
// const isValidEmail = (email) =>
//   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// // Validate phone format (Indian 10-digit mobile)
// const isValidPhone = (phone) =>
//   /^[6-9]\d{9}$/.test(phone);

// router.post("/initiate-payment", async (req, res) => {
//   console.log("🧩 Received /initiate-payment:", req.body);

//   const { name, email, phone, address, planId, amount } = req.body;

//   // Input validations
//   if (!name || !email || !phone || !amount) {
//     return res.status(400).json({
//       success: false,
//       message: "Missing required fields. Name, email, phone, and amount are required.",
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
//       message: "Invalid amount. It must be a number greater than 0.",
//     });
//   }

//   // Check for env config issues
//   if (!process.env.CASHFREE_APP_ID || !process.env.CASHFREE_SECRET_KEY) {
//     return res.status(500).json({
//       success: false,
//       message: "Server configuration error. Cashfree credentials not set.",
//     });
//   }

//   try {
//     const orderId = "ORD_" + Date.now();
//     console.log("🚀 Creating Order:", {
//       orderId,
//       name, email, phone, address, planId, amount,
//     });

//     const response = await axios.post(
//       "https://api.cashfree.com/pg/orders",
//       {
//         customer_details: {
//           customer_id: email,
//           customer_name: name,
//           customer_email: email,
//           customer_phone: phone,
//         },
//         order_id: orderId,
//         order_amount: amount,
//         order_currency: "INR",
//         order_meta: {
//           return_url: "http://localhost:5173/payment-success?order_id={order_id}",
//         },
//       },
//       {
//         headers: {
//           "x-client-id": process.env.CASHFREE_APP_ID,
//           "x-client-secret": process.env.CASHFREE_SECRET_KEY,
//           "Content-Type": "application/json",
//           "x-api-version": "2022-09-01",
//         },
//       }
//     );

//     if (!response.data || !response.data.payment_session_id) {
//       console.error("❗️Cashfree API returned unexpected format:", response.data);
//       return res.status(502).json({
//         success: false,
//         message: "Invalid response from payment gateway.",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       payment_session_id: response.data.payment_session_id,
//     });

//   } catch (error) {
//     console.error("❌ Payment API Error:");
//     if (error.response) {
//       console.error("Status:", error.response.status);
//       console.error("Headers:", error.response.headers);
//       console.error("Data:", error.response.data);
//     } else if (error.request) {
//       console.error("No response received from Cashfree:", error.request);
//     } else {
//       console.error("Error Message:", error.message);
//     }

//     return res.status(500).json({
//       success: false,
//       message: "Failed to initiate payment.",
//       error: error.response?.data?.message || error.message || "Unknown error",
//     });
//   }
// });

// export default router;







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
          return_url: "http://localhost:5173/payment-success?order_id={order_id}",
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










// /explain
// explain in hinglish in depth

// Sure! Yah code ek Express.js route handler hai jo Cashfree payment gateway ke saath payment initiate karta hai. Main points step-by-step:

// 1. Imports & Setup
// express, axios, aur dotenv import kiye gaye hain.
// dotenv.config() se environment variables load ho jaate hain.
// router banaya gaya hai, jisme endpoints define honge.
// 2. Validation Functions
// isValidEmail(email): Email ka format sahi hai ya nahi, yeh check karta hai (regex se).
// isValidPhone(phone): Indian 10-digit mobile number hai ya nahi, yeh check karta hai.
// 3. POST Route: /initiate-payment
// Jab bhi koi POST request aati hai /initiate-payment pe, yeh function trigger hota hai.
// req.body se user ke details (name, email, phone, address, planId, amount) nikalte hain.
// Input Validation
// Agar name, email, phone, ya amount missing hai toh 400 error (Bad Request) bhej deta hai.
// Email aur phone ka format galat hai toh bhi 400 error.
// Amount number nahi hai ya 0 se kam hai toh bhi error.
// Environment Variable Check
// Agar Cashfree ke credentials (App ID, Secret Key) set nahi hain toh 500 error (Server Error) bhej deta hai.
// Order Creation
// Ek unique orderId banata hai (timestamp ke saath).
// Cashfree API ko POST request bhejta hai order details ke saath:
// Customer details (id, name, email, phone)
// Order amount, currency, orderId
// Return URL (payment ke baad user yahan redirect hoga)
// Headers me Cashfree credentials bhejte hain.
// Response Handling
// Agar Cashfree se sahi response nahi aata (payment_session_id missing hai), toh 502 error deta hai.
// Agar sab sahi hai toh client ko payment_session_id bhej deta hai (yeh frontend use karega payment process karne ke liye).
// Error Handling
// Agar API call fail ho jaati hai toh error details console me print karta hai aur client ko 500 error bhejta hai.
// 4. Export
// router ko export kar diya gaya hai taki yeh app me use ho sake.
// Gotchas:

// Regex validation strict hai, toh galat email/phone reject ho jayega.
// Amount string me aaye toh isNaN fail kar sakta hai, toh ensure karo ki frontend number bheje.
// Environment variables set nahi hain toh payment initiate nahi hoga.
// Agar koi specific part samajhna hai toh batao!