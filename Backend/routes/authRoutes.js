
















import express from 'express';
import {
  
  register,
  verifyOTP,
  login,
  forgotPassword,
  resetPassword,
  resendOTP,
} from '../controllers/authController.js';
import {verifyToken} from '../middleware/authMiddleware.js';

const router = express.Router();

/**
 * @route   POST /register
 * @desc    Register a new user & send OTP
 */
router.post('/register', register);

/**
 * @route   POST /verify-otp
 * @desc    Verify OTP and activate account
 */
router.post('/verify-otp', verifyOTP);

/**
 * @route   POST /login
 * @desc    Login user (only if verified)
 */
router.post('/login', login);

/**
 * @route   POST /forgot-password
 * @desc    Send password reset link
 */
router.post('/forgot-password', forgotPassword);

/**
 * @route   POST /reset-password/:token
 * @desc    Reset password using token
 */
router.post('/reset-password/:token', resetPassword);

/**
 * @route   GET /dashboard
 * @desc    Protected route
 */
router.post('/resend-otp', resendOTP);
router.get('/dashboard', verifyToken, (req, res) => {
  res.json({
    message: 'Welcome to the dashboard!',
    user: req.user,
  });
});

/**
 * @route   GET /check-token
 * @desc    Check token validity
 */
router.get('/check-token', verifyToken, (req, res) => {
  res.json({ valid: true, message: 'Token is valid ✅', user: req.user });
});

export default router;
