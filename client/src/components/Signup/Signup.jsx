// // Signup component for user registration

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
// import './Signup.css';

// const Signup = () => {
//   const navigate = useNavigate();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirm, setConfirm] = useState('');
//   const [role, setRole] = useState('buyer'); // default role
//   const [error, setError] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (password !== confirm) {
//       setError("Passwords don't match");
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password, role }), // send role here
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert('Signup successful! Please login.');
//         navigate('/login');
//       } else {
//         setError(data.message || 'Signup failed');
//       }
//     } catch (err) {
//       console.error('Signup error:', err);
//       setError('Server error. Please try again later.');
//     }
//   };

//   return (
//     <div className="auth-bg">
//       <div className="auth-card">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="input-group">
//             <FaUser className="icon" />
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FaEnvelope className="icon" />
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FaLock className="icon" />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FaLock className="icon" />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirm}
//               onChange={(e) => setConfirm(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="role" style={{ marginBottom: '5px' }}>Select Role:</label>
//             <select
//               id="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//               style={{ padding: '8px', borderRadius: '4px' }}
//             >
//               <option value="buyer">Buyer</option>
//               <option value="seller">Seller</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>

//           {error && <p className="auth-error">{error}</p>}

//           <button type="submit" className="auth-btn">Create Account</button>
//         </form>

//         <p className="auth-footer">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;















// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
// import './Signup.css';
// import { useAuth } from '../../context/AuthContext/useAuth';

// const Signup = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirm, setConfirm] = useState('');
//   const [role, setRole] = useState('buyer'); // default role
//   const [error, setError] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (password !== confirm) {
//       setError("Passwords don't match");
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password, role }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // ✅ Save token and user to localStorage
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('user', JSON.stringify(data.user));

//         // ✅ Optionally update auth context
//         login(data.user);

//         // ✅ Navigate based on role
//         if (data.user?.role === 'seller') {
//           navigate('/upload-food');
//         } else {
//           navigate('/');
//         }
//       } else {
//         setError(data.message || 'Signup failed');
//       }
//     } catch (err) {
//       console.error('Signup error:', err);
//       setError('Server error. Please try again later.');
//     }
//   };

//   return (
//     <div className="auth-bg">
//       <div className="auth-card">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="input-group">
//             <FaUser className="icon" />
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FaEnvelope className="icon" />
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FaLock className="icon" />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FaLock className="icon" />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirm}
//               onChange={(e) => setConfirm(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label htmlFor="role" style={{ marginBottom: '5px' }}>Select Role:</label>
//             <select
//               id="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//               style={{ padding: '8px', borderRadius: '4px' }}
//             >
//               <option value="buyer">Buyer</option>
//               <option value="seller">Seller</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>

//           {error && <p className="auth-error">{error}</p>}

//           <button type="submit" className="auth-btn">Create Account</button>
//         </form>

//         <p className="auth-footer">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

























// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaEnvelope, FaLock } from 'react-icons/fa';
// import './Signup.css';

// const Signup = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [name, setName] = useState('');


//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert(data.message); // Show OTP sent message
//         navigate('/verify-otp', { state: { email } }); // Pass email for next step
//       } else {
//         setError(data.message || 'Signup failed');
//       }
//     } catch (err) {
//       console.error('Signup error:', err);
//       setError('Server error. Please try again later.');
//     }
//   };

//   return (
//     <div className="auth-bg">
//       <div className="auth-card">
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <div className="input-group">
//             <FaEnvelope className="icon" />
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-group">
//          <input
//     type="text"
//     placeholder="Full Name"
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//     required
//   />
//       </div>


//           <div className="input-group">
//             <FaLock className="icon" />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {error && <p className="auth-error">{error}</p>}

//           <button type="submit" className="auth-btn">Create Account</button>
//         </form>

//         <p className="auth-footer">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;







































import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message); // Show OTP sent message
        navigate('/verify-otp', { state: { email } }); // Pass email for next step
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-btn">Create Account</button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
