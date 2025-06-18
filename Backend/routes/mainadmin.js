// PUT /api/admin/assign-seller/:userId
//USED FOR SET USER ROLE TO SELLER 
// This route allows an admin to assign a user the role of 'seller'.
// It checks if the requesting user is an admin before proceeding.
// It uses the verifyToken middleware to ensure the request is authenticated.
// Import necessary modules
// Import express and create a router instance
// Import the verifyToken middleware for authentication
// Import the User model to interact with the user database
// import express from 'express';
// import { Router } from 'express';


// import express from 'express';
// const router = express.Router();
// import { verifyToken } from './middleware/authMiddleware.js'; // Basic token check
// import User from './models/User.js';

// router.put('/admin/assign-seller/:userId', verifyToken, async (req, res) => {
//   try {
//     // Only allow admin to do this (optional: add isAdmin flag to user)
//     const requestingUser = await User.findById(req.user.id);
//     if (requestingUser.role !== 'admin') {
//       return res.status(403).json({ message: 'Access denied. Admins only.' });
//     }

//     const user = await User.findById(req.params.userId);
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     user.role = 'seller';
//     await user.save();

//     res.json({ message: 'User role updated to seller' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });


import express from 'express';
// import { assignSeller, verifyToken } from './middleware/authMiddleware.js'; 
// import { verifyAdmin } from '../middlewares/authMiddleware.js';
// import { getAllUsers } from '../middleware/authMiddleware.js';
// ✅ Correct (assuming getAllUsers is inside authMiddleware.js)
import {
  verifyToken,
  verifyAdmin,
  assignSeller,
  getAllUsers
} from '../middlewares/authMiddleware.js';
// Create a new router instance
// This router will handle admin-related routes
const router = express.Router();

// Protected route (add extra admin verification if needed)
router.get('/users', verifyAdmin, getAllUsers);
router.post('/assign-seller/:userId', verifyToken, assignSeller);

export default router;




































// Code Explanation
// Route Definition:

// The code defines a PUT route at /api/admin/assign-seller/:userId. This route is intended
//  to update a user's role to 'seller'.
// Middleware:

// verifyToken: This middleware function is imported from ./middleware/auth.js. It is used 
// 
// to perform a basic token check, ensuring that the request is authenticated before proceeding.
// Request Handling:

// The route handler is asynchronous, allowing for the use of await with promises.
// It first retrieves the requesting user's information using req.user.id, which is presumably
//  set by the verifyToken middleware after successful authentication.
// Authorization Check:

// The code checks if the requesting user has an 'admin' role. If not, it responds with a 403 
// 
// status code and a message indicating that access is denied to non-admin users.
// User Retrieval and Role Update:

// It attempts to find the user specified by :userId in the URL.
// If the user is not found, it responds with a 404 status code and a 'User not found' message.
// If the user is found, their role is updated to 'seller', and the change is saved to the database.
// Error Handling:

// Any errors encountered during the process result in a 500 status code and a 'Server error' message.
// Potential Issues and Improvements
// Token Verification:

// Ensure that the verifyToken middleware correctly sets req.user.id and handles
//  token expiration or invalid tokens appropriately.
// Role Check:

// The role check assumes that the requestingUser object has a role property.
// 
//  Ensure that this property is always present and correctly set.
// Error Handling:

// The catch block is generic. Consider logging the error details for debugging
//  purposes, possibly using a logging library.
// Security:

// Ensure that sensitive information is not exposed in error messages.
// Consider implementing rate limiting to prevent abuse of the endpoint.
// Code Comments:

// The comment about adding an isAdmin flag is optional but could be useful for clarity and maintainability.
// Database Operations:

// Ensure that the database operations (e.g., User.findById, user.save) are optimized and handle potential database errors gracefully.
// By addressing these points, you can enhance the security, reliability, and maintainability of the code.






// mainadmin.js
// Current File
