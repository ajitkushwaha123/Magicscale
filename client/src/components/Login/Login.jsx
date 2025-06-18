// components/Login.jsx
// import './Login.css';

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         localStorage.setItem('token', data.token); // Save token if needed
//         navigate('/'); // Redirect after successful login
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           style={{ width: '100%', marginBottom: 10 }}
//         />
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           style={{ width: '100%', marginBottom: 10 }}
//         />
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit" style={{ width: '100%', padding: 10 }}>
//           Login
//         </button>
//       </form>
//       <p>
//         Don't have an account? <Link to="/signup">Sign up here</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;






























// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Save token and user info
//         localStorage.setItem('token', data.token);
//         if (data.user) {
//           localStorage.setItem('user', JSON.stringify(data.user));
//         }

//         // Redirect to home page or dashboard
//         navigate('/');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Server error. Please try again later.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <label>Email:</label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           required
//           style={{ width: '100%', marginBottom: 10 }}
//         />

//         <label>Password:</label>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           required
//           style={{ width: '100%', marginBottom: 10 }}
//         />

//         {error && <p style={{ color: 'red' }}>{error}</p>}

//         <button
//           type="submit"
//           style={{
//             width: '100%',
//             padding: 10,
//             backgroundColor: '#007bff',
//             color: 'white',
//             border: 'none',
//             cursor: 'pointer',
//           }}
//         >
//           Login
//         </button>
//       </form>
//       <p style={{ marginTop: 10 }}>
//         Don't have an account? <Link to="/signup">Sign up here</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;



















// import './Login.css';
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaEnvelope, FaLock } from 'react-icons/fa';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         if (data.user) {
//           localStorage.setItem('user', JSON.stringify(data.user));
//         }
//         navigate('/');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Server error. Please try again later.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-title">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <FaEnvelope className="input-icon" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FaLock className="input-icon" />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {error && <p className="error-message">{error}</p>}

//           <button type="submit" className="login-btn">Login</button>
//         </form>

//         <p className="login-footer">
//           Don't have an account? <Link to="/signup">Sign up here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;





























// import './Login.css';
// import React, { useState } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { FaEnvelope, FaLock } from 'react-icons/fa';

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   // Get redirect path from state or default to home '/'
//   const from = location.state?.from || '/';

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         if (data.user) {
//           localStorage.setItem('user', JSON.stringify(data.user));
//         }
//         // Redirect to the intended page after login
//         navigate(from, { replace: true });
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Server error. Please try again later.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-title">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <FaEnvelope className="input-icon" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FaLock className="input-icon" />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {error && <p className="error-message">{error}</p>}

//           <button type="submit" className="login-btn">Login</button>
//         </form>

//         <p className="login-footer">
//           Don't have an account? <Link to="/signup">Sign up here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;






















// import './Login.css';
// import React, { useState } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { FaEnvelope, FaLock } from 'react-icons/fa';
// import { useAuth } from '../../context/AuthContext/useAuth';
// import { authAPI } from '../../services/api';

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   // Get redirect path from state or default to home '/'
//   const from = location.state?.from || '/';

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       // Use the authAPI service for login
//       const data = await authAPI.login({ email, password });
      
//       // Use the login function from AuthContext
//       login(data.user);
      
//       console.log('User from backend:', data.user);
//       console.log('User role:', data.user?.role);

//       // Redirect based on user role
//       if (data.user?.role === 'seller') {
//         navigate('/upload-food', { replace: true });
//       } else {
//         navigate(from, { replace: true });
//       }
//     } catch (err) {
//       console.error(err);
//       setError(err.message || 'Login failed. Please check your credentials.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-title">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <FaEnvelope className="input-icon" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FaLock className="input-icon" />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {error && <p className="error-message">{error}</p>}

//           <button type="submit" className="login-btn" disabled={isLoading}>
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <p className="login-footer">
//           Don't have an account? <Link to="/signup">Sign up here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;





















// import './Login.css';
// import React, { useState } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { FaEnvelope, FaLock } from 'react-icons/fa';
// import { useAuth } from '../../context/AuthContext/useAuth';

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const from = location.state?.from || '/';

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         credentials: 'include',
//         body: JSON.stringify({ email, password })
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message || 'Login failed');
//       }

//       const data = await res.json();
//       login(data.user);

//       console.log('User from backend:', data.user);
//       console.log('User role:', data.user?.role);

//       if (data.user?.role === 'seller') {
//         navigate('/upload-food', { replace: true });
//       } else {
//         navigate(from, { replace: true });
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(err.message || 'Login failed. Please check your credentials.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-title">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <FaEnvelope className="input-icon" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FaLock className="input-icon" />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {error && <p className="error-message">{error}</p>}

//           <button type="submit" className="login-btn" disabled={isLoading}>
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <p className="login-footer">
//           Don't have an account? <Link to="/signup">Sign up here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import './Login.css';
// import React, { useState } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { FaEnvelope, FaLock } from 'react-icons/fa';
// import { useAuth } from '../../context/AuthContext/useAuth';

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const from = location.state?.from || '/';

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     console.log('Submitting login request...', { email, password });

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//         body: JSON.stringify({ email, password }),
//       });

//       console.log('Response:', res);

//       if (!res.ok) {
//         const errorData = await res.json();
//         console.error('Server error:', errorData);
//         throw new Error(errorData.message || 'Login failed');
//       }

//       const data = await res.json();
//       console.log('User from backend:', data.user);

//       login(data.user);

//       if (data.user?.role === 'seller') {
//         navigate('/upload-food', { replace: true });
//       } else {
//         navigate(from, { replace: true });
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(err.message || 'Login failed. Please check your credentials.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-title">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <FaEnvelope className="input-icon" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FaLock className="input-icon" />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {error && <p className="error-message">{error}</p>}

//           <button type="submit" className="login-btn" disabled={isLoading}>
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <p className="login-footer">
//           Don't have an account? <Link to="/signup">Sign up here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;






// import './Login.css';
// import React, { useState } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { FaEnvelope, FaLock } from 'react-icons/fa';
// import { useAuth } from '../../context/AuthContext/useAuth';

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const from = location.state?.from || '/';

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     console.log('Submitting login request...', { email, password });

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//         body: JSON.stringify({ email, password }),
//       });

//       console.log('Response:', res);

//       if (!res.ok) {
//         const errorData = await res.json();
//         console.error('Server error:', errorData);
//         throw new Error(errorData.message || 'Login failed');
//       }

//       const data = await res.json();
//       console.log('User from backend:', data.user);

//       // ✅ Save token and user to localStorage
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('user', JSON.stringify(data.user));

//       // ✅ Optionally update global auth context
//       login(data.user);

//       // Redirect based on user role
//       if (data.user?.role === 'seller') {
//         navigate('/upload-food', { replace: true });
//       } else {
//         navigate(from, { replace: true });
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError(err.message || 'Login failed. Please check your credentials.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-title">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <FaEnvelope className="input-icon" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FaLock className="input-icon" />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {error && <p className="error-message">{error}</p>}

//           <button type="submit" className="login-btn" disabled={isLoading}>
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <p className="login-footer">
//           Don't have an account? <Link to="/signup">Sign up here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;













// import './Login.css';
// import React, { useState } from 'react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { FaEnvelope, FaLock } from 'react-icons/fa';
// import { useAuth } from '../../context/AuthContext/useAuth';

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login } = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const from = location.state?.from || '/';

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include', // Optional: remove if not using cookies
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || 'Login failed');
//       }

//       // Save token and user to localStorage
//       localStorage.setItem('token', data.token); // ✅ Set token here
//       localStorage.setItem('user', JSON.stringify(data.user)); // Optional (if not already in context)

//       // Update auth context
//       login(data.user, data.token); // login should accept user and token

//       // Navigate based on role
//       if (data.user?.role === 'seller') {
//         navigate('/upload-food', { replace: true });
//       } else {
//         navigate(from, { replace: true });
//       }

//     } catch (err) {
//       console.error('Login error:', err);
//       setError(err.message || 'Login failed. Please check your credentials.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-title">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <FaEnvelope className="input-icon" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FaLock className="input-icon" />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {error && <p className="error-message">{error}</p>}

//           <button type="submit" className="login-btn" disabled={isLoading}>
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>

//         <p className="login-footer">
//           Don't have an account? <Link to="/signup">Sign up here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;





import './Login.css';
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext/useAuth';



const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const from = location.state?.from || '/';

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      login(data.user, data.token);

      if (data.user?.role === 'seller') {
        navigate('/upload-food', { replace: true });
      } else {
        navigate(from, { replace: true });
      }

    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* 👇 Add Forgot Password link */}
        <p className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

        <p className="login-footer">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
