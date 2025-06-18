// import mongoose from 'mongoose';

// const UserSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,        // trims whitespace
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//       lowercase: true,   // converts email to lowercase
//       trim: true,        // trims whitespace
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     role: {
//       type: String,
//       enum: ['buyer', 'seller', 'admin'], // allowed roles
//       default: 'buyer',                    // default role
//     },
//   },
//   {
//     timestamps: true,  // adds createdAt and updatedAt fields automatically
//   }
// );

// export default mongoose.model('User', UserSchema);



























// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

// const userSchema = new mongoose.Schema({
//   fullname: {
//     firstname: {
//       type: String,
//       required: true,
//       minlength: [3, 'First name must be at least 3 characters long'],
//       trim: true
//     },
//     lastname: {
//       type: String,
//       minlength: [3, 'Last name must be at least 3 characters long'],
//       trim: true
//     }
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     minlength: [5, 'Email must be at least 5 characters long'],
//     lowercase: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     required: true,
//     select: false
//   },
//   role: {
//     type: String,
//     enum: ['buyer', 'seller', 'admin'],
//     default: 'buyer'
//   },
//   socketId: {
//     type: String
//   },
//   // Add tokens array to store multiple tokens for different devices
//   tokens: [
//     {
//       token: {
//         type: String,
//         required: true
//       }
//     }
//   ]
// }, {
//   timestamps: true
// });

// // Instance method - Generate JWT token and save it to the user's tokens array
// userSchema.methods.generateAuthToken = async function () {
//   const user = this;
//   const token = jwt.sign(
//     { _id: user._id.toString(), role: user.role },
//     process.env.JWT_SECRET,
//     { expiresIn: '24h' }
//   );
  
//   // Add the new token to the tokens array
//   user.tokens = user.tokens || [];
//   user.tokens.push({ token });
  
//   // Save the user with the new token
//   await user.save();
  
//   return token;
// };

// // Instance method - Compare plain password with hashed password
// userSchema.methods.comparePassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// // Static method - Hash password before saving
// userSchema.statics.hashPassword = async function (password) {
//   return await bcrypt.hash(password, 10);
// };

// // Method to convert user document to JSON while hiding sensitive data
// userSchema.methods.toJSON = function() {
//   const user = this;
//   const userObject = user.toObject();
  
//   // Remove sensitive information
//   delete userObject.password;
//   delete userObject.tokens;
  
//   return userObject;
// };

// const User = mongoose.model('User', userSchema);
// export default User;







// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// export default mongoose.model('User', userSchema);






// // server/models/User.js
// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },

//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },

//   password: {
//     type: String,
//     required: true,
//   },

//   isSeller: {
//     type: Boolean,
//     default: false, // true if the user is a seller
//   },

//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.model('User', userSchema);


// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   otp: {
//     type: String,
//   },
//   otpExpiry: {
//     type: Date,
//   },
//   isVerified: {
//     type: Boolean,
//     default: false,
//   },
// });

// export default mongoose.model('User', userSchema);


























// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },

//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },

//   password: {
//     type: String,
//     required: true,
//   },

//   // Verification & OTP
//   isVerified: {
//     type: Boolean,
//     default: false,
//   },
//   otp: {
//     type: String,
//   },
//   otpExpiry: {
//     type: Date,
//   },
//   verificationToken: {
//     type: String,
//   },

//   // Password Reset
//   resetPasswordToken: {
//     type: String,
//   },
//   resetPasswordExpires: {
//     type: Date,
//   },

// }, { timestamps: true });

// export default mongoose.model('User', userSchema);






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
