
// models/Plan.js
import mongoose from "mongoose"; // ✅ Required import

const planSchema = new mongoose.Schema({
  name: String,
  slug: { type: String, required: true, unique: true },
  price: Number,
  features: [String],
});

export default mongoose.model("Plan", planSchema);
