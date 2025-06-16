



import express from "express";
import mongoose from "mongoose";
import Plan from "../models/Plan.js";

const router = express.Router();

// ✅ GET all plans — most specific route first
router.get("/all", async (req, res) => {
  console.log("📦 Fetching all plans...");
  try {
    const allPlans = await Plan.find({});
    console.log("📦 Plans fetched:", allPlans.length);
    return res.json(allPlans);
  } catch (err) {
    console.error("❌ Error in /api/plan/all:", err.message);
    return res.status(500).json({ error: "Failed to fetch plans" });
  }
});

// ✅ GET single plan by ID — with ObjectId format validation
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  // 🔐 Validate ObjectId format before querying
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid Plan ID format" });
  }

  try {
    const plan = await Plan.findById(id);
    if (!plan) return res.status(404).json({ error: "Plan not found" });
    return res.json(plan);
  } catch (err) {
    console.error("❌ Error in /api/plan/:id:", err.message);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
