import mongoose from "mongoose";
import dotenv from "dotenv";
import Plan from "./models/Plan.js";

dotenv.config();

const seedPlans = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Plan.deleteMany();

  const plans = [
    {
      name: "Basic Launch",
      price: 7000,
      features: [
        "Limited Account Handling",
        "Basic Swiggy & Zomato Setup",
        "Optional GST Registration",
        "Optional FSSAI Registration",
        "Up to 5 team members",
        "Email Support",
        "Standard Reporting",
        "Limited Integrations",
      ],
    },
    {
      name: "Growth Pro",
      price: 10000,
      features: [
        "Dedicated Account Handling",
        "Full Swiggy & Zomato Setup & Optimization",
        "GST Registration Included",
        "FSSAI Registration Included",
        "Up to 25 team members",
        "Priority Email & Chat Support",
        "Advanced Reporting & Analytics",
        "Enhanced Integrations",
      ],
    },
    {
      name: "Enterprise Scale",
      price: 12000,
      features: [
        "Comprehensive Account Handling & Reporting",
        "Advanced Swiggy & Zomato Management & Growth Strategies",
        "Complete GST Management (Registration & Filing)",
        "Priority FSSAI Compliance & Renewals",
        "Unlimited team members",
        "24/7 Premium Support & Dedicated Manager",
        "Customizable Reporting & BI Tools",
        "Unlimited Integrations & API Access",
      ],
    },
  ];

  await Plan.insertMany(plans);
  console.log("Plans seeded!");
  process.exit();
};

seedPlans();
