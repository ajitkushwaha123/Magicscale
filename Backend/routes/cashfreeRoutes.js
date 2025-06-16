






// // routes/cashfreeRoutes.js
// import express from "express";
// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const router = express.Router();

// router.post("/initiate-payment", async (req, res) => {
//   const { name, email, phone, amount } = req.body;
//   const orderId = "ORD_" + Date.now();

//   try {
//     const response = await axios.post(
//       "https://sandbox.cashfree.com/pg/orders",
//       {
//         order_id: orderId,
//         order_amount: amount,
//         order_currency: "INR",
//         customer_details: {
//           customer_id: "ajitku@gmail.com",
//           customer_name: name,
//           customer_email: email,
//           customer_phone: phone
//         },
//         order_meta: {
//           return_url: `https://yourdomain.com/payment-success?order_id=${orderId}`
//         }
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "x-client-id": process.env.CASHFREE_APP_ID,
//           "x-client-secret": process.env.CASHFREE_SECRET_KEY,
//           "x-api-version": "2022-09-01"
//         }
//       }
//     );

//     res.json({
//       success: true,
//       order_id: orderId,
//       payment_session_id: response.data.payment_session_id
//     });
//   } catch (err) {
//     console.error("💥 Cashfree error:", err.response?.data || err.message);
//     res.status(500).json({
//       success: false,
//       message: "Payment initiation failed",
//       error: err.response?.data || err.message
//     });
//   }
// });

// export default router;












// // routes/cashfreeRoutes.js
// import express from "express";
// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const router = express.Router();

// router.post("/initiate-payment", async (req, res) => {
//   const { name, email, phone, amount } = req.body;
//   const orderId = "ORD_" + Date.now();

//   const baseUrl =
//     process.env.CASHFREE_ENV === "PROD"
//       ? "https://api.cashfree.com/pg"
//       : "https://sandbox.cashfree.com/pg";

//   try {
//     // Step 1: Get Bearer Token
//     const tokenResponse = await axios.post(
//      `${baseUrl}/v1/authenticate`,
//       {},
//       {
//         headers: {
//           "x-client-id": process.env.CASHFREE_APP_ID,
//           "x-client-secret": process.env.CASHFREE_SECRET_KEY,
//         },
//       }
//     );

//     const token = tokenResponse.data?.data?.token;
//     if (!token) {
//       throw new Error("Failed to fetch Cashfree token");
//     }

//     // Step 2: Create Order
//     const orderResponse = await axios.post(
//       `${baseUrl}/orders`,
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
//       order_meta: {
//   return_url: `https://magicscale.in/payment-success?order_id=${orderId}`,
// },

//       },
//       {
//         headers: {
//           accept: "application/json",
//           "x-api-version": "2022-09-01",
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     console.log("📦 Cashfree full response:", JSON.stringify(orderResponse.data, null, 2));


//     res.json({
//       success: true,
//       order_id: orderId,
//       payment_session_id: orderResponse.data.payment_session_id,
     

//     });
//     console.log("⚙️ Cashfree session ID:", orderResponse.data.payment_session_id);

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









// import express from "express";
// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const router = express.Router();

// router.post("/initiate-payment", async (req, res) => {
//   const { name, email, phone, amount } = req.body;
//   const orderId = "ORD_" + Date.now();

//   const baseUrl =
//     process.env.CASHFREE_ENV === "PROD"
//       ? "https://api.cashfree.com/pg"
//       : "https://sandbox.cashfree.com/pg";

//   try {
//     // ✅ Step 1: Get Bearer Token
//        const tokenResponse = await axios.post(
//   "https://api.cashfree.com/pg/auth/token",
//   {},
//   {
//         headers: {
//           "x-client-id": process.env.CASHFREE_APP_ID,
//           "x-client-secret": process.env.CASHFREE_SECRET_KEY,
//           "x-api-version": "2022-09-01",
//         },
//       }
//     );

//     const token = tokenResponse.data?.data?.token;
//     if (!token) {
//       throw new Error("Failed to fetch Cashfree token");
//     }

//     // ✅ Step 2: Create Order
//     const orderResponse = await axios.post(
//       `${baseUrl}/orders`,
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
//           accept: "application/json",
//           "x-api-version": "2022-09-01",
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
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
