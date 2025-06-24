// seedPlans.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Plan from "./models/Plan.js"; // Ensure this path is correct for your Plan model

dotenv.config();

const plansToSeed = [
  // General Growth Plans (from your original seedPlans.js)
  {
    slug: "basic",
    name: "Basic Growth Plan",
    price: 7999,
    features: [
      "Menu Score Update",
      "Customer Review Management",
      "Weekly Consultant Calls",
      "Menu Optimization",
      "Basic Promotion Strategy",
    ],
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
      "Advanced Analytics Dashboard",
    ],
  },
  // Zomato Onboarding Plans (from ZomatoOnboardingCourse.jsx)
  {
    slug: "zomato-starter", // Changed slug to be more specific
    name: "Zomato Onboarding - Starter Onboarding",
    price: 1999,
    features: [
      "Zomato Restaurant Account Setup",
      "Professional Menu Setup & Optimization",
      "Initial Menu Item Upload (up to 25 items)",
      "Basic Branding & Profile Configuration",
    ],
  },
  {
    slug: "zomato-pro", // Changed slug to be more specific
    name: "Zomato Onboarding - Pro Launch Package",
    price: 2999,
    features: [
      "Zomato Restaurant Account Setup",
      "Professional Menu Setup & Optimization",
      "Extensive Photo Upload (up to 50 items)",
      "Detailed Branding & Profile Configuration",
      "Priority Listing Support",
    ],
  },
  // FSSAI License Plans (from FssaiLicenseCourse.jsx)
  {
    slug: "fssai-registration-1yr",
    name: "FSSAI Registration - 1 Year",
    price: 1500,
    features: ["Basic Application", "Filing Support", "1 Year License"],
  },
  {
    slug: "fssai-registration-3yrs",
    name: "FSSAI Registration - 3 Years",
    price: 2000,
    features: ["Basic Application", "Filing Support", "3 Year License"],
  },
  {
    slug: "fssai-registration-5yrs",
    name: "FSSAI Registration - 5 Years",
    price: 2500,
    features: ["Basic Application", "Filing Support", "5 Year License"],
  },
  {
    slug: "fssai-state-license",
    name: "FSSAI State License - 1-5 Year",
    price: (3999 + 1000), // Assuming 'Govt' is 1000 as per your FSSAI component
    features: ["Application Prep", "State License - 1-5 Year"],
  },
  {
    slug: "fssai-tatkal-license",
    name: "FSSAI Tatkal License - 1 Years",
    price: 999,
    features: ["Basic Application", "Filing Support", "1 Year License"],
  },
  {
    slug: "fssai-central-license",
    name: "FSSAI Central License - 1 Year",
    price: 1999,
    features: ["Central Filing", "1 Year License"],
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB for seeding.");

    // Iterate over plans and perform upsert operation
    for (const planData of plansToSeed) {
      // Find a plan by slug and update it, or insert if it doesn't exist
      await Plan.findOneAndUpdate(
        { slug: planData.slug }, // Query to find the document
        planData, // Data to update/insert
        {
          upsert: true, // Create the document if it doesn't exist
          new: true, // Return the updated document rather than the original
          setDefaultsOnInsert: true, // Apply schema defaults when inserting new documents
        }
      );
      console.log(`✅ Upserted plan: ${planData.name}`);
    }

    console.log("✅ All plans seeded successfully.");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Failed to seed plans:", err.message);
    process.exit(1);
  });