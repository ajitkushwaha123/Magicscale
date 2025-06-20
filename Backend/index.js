
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from 'bcrypt';

// import crypto from 'crypto';
import dotenv from "dotenv";
// import { Cashfree } from 'cashfree-pg';
import planRoutes from './routes/Plan.js';

 

import authRoutes from './routes/authRoutes.js';


import cashfreeRoutes from "./routes/cashfreeRoutes.js"; // ✅ correct
import  adminAuthConfig from "./routes/adminAuthConfig.js";



dotenv.config();

const app = express();

const allowedOrigins = ["http://localhost:5173", "https://magicscale.in"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());

// Routes
app.use("/api/plan", planRoutes);
app.use('/api/admin', adminAuthConfig);


app.use('/api/auth', authRoutes);
// app.use('/api/admin', adminRoutes);

app.use('/api/cashfree', cashfreeRoutes);


// MongoDB connection and server startup
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
