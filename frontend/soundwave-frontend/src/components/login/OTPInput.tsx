// here when user can put OPT code, OTPInput.tsx
/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api/api';

const OTPInput = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await API.post('/auth/verify-otp', { otp });
      setMessage(response.data.message);
      navigate('/reset-password');
    } catch (error) {
      setMessage('Invalid OTP, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shadow-secondary flex justify-center items-center pt-8 pb-8 bg-primary">
      <div className="w-full max-w-xs p-8 bg-primary shadow-secondary rounded-2xl">
        <h2 className="text-center text-1xl text-text2">Enter OTP</h2>
        <form onSubmit={handleSubmit}>
          <div>
          
          <input
            type="text"
            placeholder="Enter your 6 Digits OTP"
            className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-700"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          </div>
          <div className="text-center">
          <button className="text-text bg-secondary border-0 py-2 px-6 focus:outline-none transition-transform duration-300 hover:scale-110 shadow-secondary rounded text-lg"
           type="submit" disabled={loading}>
           {loading ? 'Loading...' : 'Submit'}
          </button>
          </div>
          {message && <p className="text-center text-red-500">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default OTPInput;*/
