// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import planRoutes from "./routes/plan.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/plan", planRoutes);

// const PORT = process.env.PORT || 5000;
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.log(err));


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import crypto from 'crypto';
import dotenv from "dotenv";
// import { Cashfree } from 'cashfree-pg';
import planRoutes from "./routes/plan.js";
import cashfreeRoutes from './routes/cashfreeRoutes.js';

dotenv.config();

const app = express();
 app.use(cors());
// const allowedOrigins = ["http://localhost:5173", "https://yourfrontend.com"];

// // app.use(cors({
// //   origin: function (origin, callback) {
// //     if (!origin || allowedOrigins.includes(origin)) {
// //       callback(null, true);
// //     } else {
// //       callback(new Error("Not allowed by CORS"));
// //     }
// //   },
//   credentials: true,
// }));

app.use(express.json());

// Routes
app.use("/api/plan", planRoutes);
app.use('/api/cashfree', cashfreeRoutes);

// MongoDB connection and server startup
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
