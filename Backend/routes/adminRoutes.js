import express from 'express';
import { getAllUsers } from '../controllers/userController.js';
import { verifyAdminOrSeller } from '../middleware/authMiddleware.js';

const router = express.Router();

// GET /api/admin/users
router.get('/admin/users', verifyAdminOrSeller, getAllUsers);

export default router;