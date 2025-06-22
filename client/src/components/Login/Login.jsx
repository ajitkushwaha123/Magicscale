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
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-white relative">
      {/* Background Shape */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-200 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      <div className="relative z-10 flex w-full max-w-6xl bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center bg-blue-50">
          <div className="text-4xl font-extrabold text-blue-900 mb-4 font-logo tracking-wide">
            <span className="text-blue-600">Magic</span> Scale
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            We help restaurants onboard faster and grow their business. <br />
            From setup to branding to full tech support — all in one smart platform.
          </p>
        </div>

        {/* Right Section (Login) */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-gray-50">
              <FaEnvelope className="mr-3 text-gray-600" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent outline-none text-gray-800"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-gray-50">
              <FaLock className="mr-3 text-gray-600" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent outline-none text-gray-800"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm -mt-2">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            <Link to="/forgot-password" className="text-blue-700 hover:underline">Forgot Password?</Link>
          </p>

          <p className="mt-2 text-sm text-center text-gray-600">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-700 hover:underline">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
