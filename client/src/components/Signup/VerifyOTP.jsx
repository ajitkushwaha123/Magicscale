import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Signup/Signup.css";
// adjust the path if needed
 // You can reuse the same styles

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || ''; // get email from Signup redirect

  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        navigate('/login');
      } else {
        setError(data.message || 'OTP verification failed');
      }
    } catch (err) {
      console.error('Verification error:', err);
      setError('Server error. Please try again.');
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Verify OTP</h2>
        <form onSubmit={handleVerify}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-btn">Verify</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
