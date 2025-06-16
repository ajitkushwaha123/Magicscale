// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const testCashfree = async () => {
//   const baseUrl = process.env.CASHFREE_ENV === "PROD"
//     ? "https://api.cashfree.com/pg"
//     : "https://sandbox.cashfree.com/pg";

//   const tokenResponse = await axios.post(`${baseUrl}/auth/token`, {}, {
//     headers: {
//       "x-client-id": process.env.CASHFREE_APP_ID,
//       "x-client-secret": process.env.CASHFREE_SECRET_KEY,
//     },
//   });

//   const token = tokenResponse.data?.data?.token;

//   const orderId = "ORD_" + Date.now();
//   const orderResponse = await axios.post(`${baseUrl}/orders`, {
//     order_id: orderId,
//     order_amount: 100,
//     order_currency: "INR",
//     customer_details: {
//       customer_id: "test_user",
//       customer_name: "Test User",
//       customer_email: "test@example.com",
//       customer_phone: "9999999999",
//     },
//     order_meta: {
//       return_url: `https://magicscale.in/payment-success?order_id=${orderId}`,
//     },
//   }, {
//     headers: {
//       accept: "application/json",
//       "x-api-version": "2022-09-01",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   console.log("✅ Session ID:", orderResponse.data.payment_session_id);
// };

// testCashfree();
