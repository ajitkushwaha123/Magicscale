// routes/admin.js
import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import MenuItem from '../models/MenuItem.js';
import Order from '../models/Order.js';       
import User from '../models/User.js';        
const router = express.Router();

// Example: Admin summary data
router.get('/dashboard-summary', verifyToken, async (req, res) => {
  try {
    const menuCount = await MenuItem.countDocuments();
    const orderCount = await Order.countDocuments();
    const userCount = await User.countDocuments();

    const latestOrders = await Order.find().sort({ createdAt: -1 }).limit(5);

    res.json({
      stats: {
        totalMenuItems: menuCount,
        totalOrders: orderCount,
        totalUsers: userCount,
      },
      latestOrders,
    });
  } catch (error) {
    console.error('Admin dashboard error:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;











// This code defines an Express router for admin-related API
//  endpoints in a Node.js application. It begins by 
//  importing necessary modules, including Express,  
//  the authMiddleware module named 
// authMiddleware.js, and the three Mongoose models 
//  (MenuItem, Order, and User). It then creates a 
//  router object using the express.Router() method.
// The router object is configured to handle GET requests 
//  to the /dashboard-summary endpoint. This endpoint is 
//  protected by the 
// authMiddleware.
// The verifyToken middleware is used to authenticate the 
//  request by verifying the presence of a valid token in 
//  the Authorization header. If the token is valid, the 
//  middleware allows the request to proceed to the 
//  subsequent route handler.
// The route handler uses the async/await pattern to 
//  asynchronously count the number of menu items, orders, 
//  and users in the respective collections using the 
//  countDocuments() method provided by Mongoose. It also 
//  retrieves the latest orders from the Order collection 
//  using the find() method and sorts them by their creation
//  date in descending order. The latest orders are then 
//  sliced to include only the top five results.
// The route handler constructs a JSON response with the 
//  aggregated statistics and the latest orders, and sends 
//  it as the response to the client.
// The router is exported for use in the main server application, 
//  allowing these admin routes to be mounted and accessed as part 
//  of the API.
// verifyToken, and the three Mongoose models (MenuItem, Order, and User).
// a token verification middleware (verifyToken), and three Mongoose
//  models: MenuItem, Order, and User. These models represent collections 
// 
// in the database and are used to fetch and count documents.

// The main feature of this code is the /dashboard-summary GET endpoint
// 
// that provides summary information about the system's state
// and recent activity
// 
// /dashboard-summary endpoint. This endpoint is protected by the verifyToken
//  middleware, ensuring that only authenticated users (typically admins) can 
// access it. When a request is made to this endpoint, the server asynchronously
//  gathers summary statistics from the database: the total number of menu items, 
// orders, and users. It also retrieves the five most recent orders, sorted by
//  their
//  creation date in descending order
//  
// 
// . This route is protected by the verifyToken middleware,

//  ensuring that only authenticated users (typically admins)
//  can access it. When a request is made to this endpoint,
//  the server asynchronously gathers summary statistics from
//  the database: the total number of menu items, orders, and 
// users. It also retrieves the five most recent orders, sorted
//  by their creation date in descending order.

// If all database operations succeed, the route responds
//  with a JSON object containing the aggregated statistics 
// and the latest orders. If any error occurs during the
//  process, it logs the error message
//  to the console and returns a 500 status code with a 
// generic server error message. Finally, the router is
//  exported for use in the main server application
// , allowing these admin routes to be mounted and accessed
//  as part of the API.
//explain code in detail - this is a node js backend api
// This code defines an Express router for admin-related API 
// endpoints in a Node.js application.
// It begins by importing necessary modules, including 
// Express, the authMiddleware module named authMiddleware.js,
//  and the three Mongoose models (MenuItem, Order, and User).
//  It then creates a router object using the express.Router() 
// method.