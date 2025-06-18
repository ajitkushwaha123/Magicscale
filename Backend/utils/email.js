








import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Send OTP
export const sendOTP = async (email, otp) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP is: ${otp}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ OTP email sent:', info.response);
    return info;
  } catch (error) {
    console.error('❌ Failed to send OTP:', error);
    throw new Error('OTP sending failed via Nodemailer');
  }
};

// ✅ Send Password Reset Email
export const sendResetEmail = async (email, token) => {
  try {
    const resetLink = `http://localhost:5173/reset-password/${token}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset Request',
      html: `
        <h3>Reset Your Password</h3>
        <p>You requested to reset your password. Click the link below to proceed:</p>
        <a href="${resetLink}" style="background:#4CAF50;color:#fff;padding:10px 15px;text-decoration:none;border-radius:5px;">Reset Password</a>
        <p>This link will expire in 1 hour.</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Reset email sent:', info.response);
    return info;
  } catch (error) {
    console.error('❌ Failed to send reset email:', error);
    throw new Error('Password reset email sending failed');
  }
};
