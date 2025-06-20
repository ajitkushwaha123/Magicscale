// import express from "express";
// import Plan from "../models/Plan.js";

// const router = express.Router();

// router.get("/:id", async (req, res) => {
//   try {
//     const plan = await Plan.findById(req.params.id);
//     if (!plan) return res.status(404).json({ error: "Plan not found" });
//     res.json(plan);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// export default router;




// import express from "express";
// import Plan from "../models/Plan.js";

// const router = express.Router();

// // ✅ GET all plans
// router.get("/all", async (req, res) => {
//   try {
//     const allPlans = await Plan.find();
//     res.json(allPlans);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch plans" });
//   }
// });

// // ✅ GET single plan by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const plan = await Plan.findById(req.params.id);
//     if (!plan) return res.status(404).json({ error: "Plan not found" });
//     res.json(plan);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// export default router;




import express from "express";
import Plan from "../models/Plan.js";

const router = express.Router();

// ✅ GET single plan by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const plan = await Plan.findById(req.params.id);
//     if (!plan) return res.status(404).json({ error: "Plan not found" });
//     res.json(plan);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// // });
// router.get("/:slug", async (req, res) => {
//   try {
//     const plan = await Plan.findOne({ slug: req.params.slug });
//     if (!plan) return res.status(404).json({ error: "Plan not found" });
//     res.json(plan);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });




router.get("/:slug", async (req, res) => {
  try {
    console.log("🔍 Looking for slug:", req.params.slug);
    const plan = await Plan.findOne({ slug: req.params.slug });
    if (!plan) {
      console.warn("⚠️ Plan not found for slug:", req.params.slug);
      return res.status(404).json({ error: "Plan not found" });
    }
    console.log("✅ Found plan:", plan);
    res.json(plan);
  } catch (err) {
    console.error("❌ Error in /api/plan/:slug:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});











router.get("/all", async (req, res) => {
    console.log("📦 Fetching all plans...");  // ✅ Add thi s
  try {
    const allPlans = await Plan.find({});
    console.log("📦 Fetching all plans..." , allPlans);  // ✅ Add this
    console.log("📦 Plans fetched:", allPlans.length);
    return res.json(allPlans);
  } catch (err) {
    console.error("❌ Error in /api/plan/all:", err.message);  // ✅ Add this
    return res.status(500).json({ error: "Failed to fetch plans" });
  }
});




export default router;