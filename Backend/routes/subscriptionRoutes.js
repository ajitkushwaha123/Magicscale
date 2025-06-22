import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { getUserSubscriptions } from '../controllers/userController.js';

const router = express.Router();

// Route: GET /api/user/subscriptions
router.get('/user/subscriptions', verifyToken, getUserSubscriptions);

export default router;
