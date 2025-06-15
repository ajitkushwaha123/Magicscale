
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// // import crypto from 'crypto';
// import dotenv from "dotenv";
// // import { Cashfree } from 'cashfree-pg';
// import planRoutes from "./routes/plan.js";
// import cashfreeRoutes from './routes/cashfreeRoutes.js';

// dotenv.config();

// const app = express();



// // ✅ CORS configuration
// const allowedOrigins = [
//   "http://localhost:5173", // Local dev
//   "https://magicscale.in", // Your live frontend
// ];

// app.use(
//   cors({
//     origin: allowedOrigins,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );


// app.use(express.json());

// // Routes
// app.use("/api/plan", planRoutes);
// app.use('/api/cashfree', cashfreeRoutes);

// // MongoDB connection and server startup
// const PORT = process.env.PORT || 5000;

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected successfully");
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error("MongoDB connection error:", err));





import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import planRoutes from "./routes/plan.js";
import cashfreeRoutes from "./routes/cashfreeRoutes.js";

dotenv.config();

const app = express();

// ✅ CORS configuration
const allowedOrigins = [
  "http://localhost:5173", // Local dev
  "https://magicscale.in", // Your live frontend
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// 🔧 Preflight OPTIONS support
app.options("*", cors());

app.use(express.json());

// Routes
app.use("/api/plan", planRoutes);
app.use("/api/cashfree", cashfreeRoutes);

// MongoDB connection and server startup
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
