// frontend/src/components/auth/ResetPassword.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api/api';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOTP] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  //const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  //const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      setMessage('Password must be at least 8 characters long');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
setLoading(true);
    try {
      const response = await API.post('/auth/reset-password', {
        email,
        otp,
        password,
        confirmPassword,
        //token,
        
      });
      setMessage(response.data.message); // Display success message
      navigate('/login'); // Redirect to login page
    } catch (error) {
      setMessage('Failed to reset password. Please try again.'); // Display error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shadow-secondary flex justify-center items-center pt-8 pb-8 bg-primary">
      <div className="w-full max-w-xs p-8 bg-primary shadow-secondary rounded-2xl">
        <h2 className="text-center text-1xl text-text2 pb-6">Reset Password</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <input
            type="text"
            id="otp"
            placeholder="Enter OTP"
            className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-700"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="New Password"
            className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-700"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        
          <div className="text-center">
          <button className="text-text bg-secondary border-0 py-2 px-6 focus:outline-none transition-transform duration-300 hover:scale-110 shadow-secondary rounded text-lg"

           type="submit" disabled={loading}>
           {loading ? 'Loading...' : 'Reset Password'}
          </button>
          </div>
          {message && <p className="text-center text-red-500">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
