


import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  // Default role for access control
  role: {
    type: String,
    enum: ['user', 'seller', 'admin'],
    default: 'user',
  },

  // Verification & OTP
  isVerified: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
  verificationToken: {
    type: String,
  },

  // Password Reset
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },

}, { timestamps: true });

export default mongoose.model('User', userSchema);
