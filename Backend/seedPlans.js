// seedPlans.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Plan from "./models/Plan.js";

dotenv.config();

const plans = [
  {
    
      slug: "basic",
    name: "Basic Growth Plan",
    price: 7999,
    features: [
      "Menu Score Update",
      "Customer Review Management",
      "Weekly Consultant Calls",
      "Menu Optimization",
      "Basic Promotion Strategy"
    ]
  },
  {
    
     slug: "premium", 
    name: "Premium Growth Plan",
    price: 9999,
    features: [
      "All Basic Features",
      "Dedicated Account Manager",
      "Festival-Specific Promotions",
      "Zomato & Swiggy Ad Campaigns",
      "Advanced Analytics Dashboard"
    ]
  },
  {
    
    name: "Zomato Onboarding Plan",
    slug: "zomato",
    price: 1999,
    features: [
      "Zomato Listing & Verification",
      "Menu Upload (with images)",
      "FSSAI/GST Assistance",
      "Restaurant Branding (Logo, Menu, QR)",
      "Payment & Delivery Setup",
      "WhatsApp Support"
    ]
  }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Plan.deleteMany(); // Optional: clear existing plans
    await Plan.insertMany(plans);
    console.log("✅ Plans seeded successfully.");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Failed to seed plans:", err.message);
    process.exit(1);
  });
