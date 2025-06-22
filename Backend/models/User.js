


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

//   profilePhoto: {
//   type: String, // URL or local path
// },

// aadharCard: {
//   type: String, // file URL/path
// },

// panCard: {
//   type: String,
// },


//   password: {
//     type: String,
//     required: true,
//   },

//   // Default role for access control
//   role: {
//     type: String,
//     enum: ['user', 'seller', 'admin'],
//     default: 'user',
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
//   // Inside userSchema.add(...) or directly in schema
// {
//   // ...existing fields
//   profilePhoto: { type: String },
//   aadharCard: { type: String },
//   panCard: { type: String },
// }


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

  role: {
    type: String,
    enum: ['user', 'seller', 'admin'],
    default: 'user',
  },

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

  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },

  // ✅ Profile fields
  profilePhoto: {
    type: String,
  },
  aadharCard: {
    type: String,
  },
  panCard: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
