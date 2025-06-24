// backend/routes/payment.js
import express from "express";
import nodemailer from "nodemailer";
 // Currently unused, consider removing if not needed.

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // ✅ FIXED: Typo in env key (was EMAIL_USERL)
    pass: process.env.EMAIL_PASS,
  },
});

// Called after successful Cashfree payment
router.post("/success", async (req, res) => {
  const { name, email, phone, planSlug, total, order_id } = req.body;

  try {
    // Email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email, // 🔄 Consider sending to the customer, not hardcoded
      subject: "📦 Your MagicScale Payment Confirmation",
      html: `<p>Hi ${name}, your payment of ₹${total} for plan <b>${planSlug}</b> is confirmed. Order ID: ${order_id}</p>`,
    });

    // Email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `💰 Payment received: ${planSlug}`,
      html: `<p><b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Phone:</b> ${phone}<br><b>Plan:</b> ${planSlug}<br><b>Amount:</b> ₹${total}<br><b>Order ID:</b> ${order_id}</p>`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Email sending error:", err);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

export default router;
