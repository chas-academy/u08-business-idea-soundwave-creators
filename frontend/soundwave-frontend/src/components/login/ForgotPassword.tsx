import React, { useState } from 'react';
import API from '../../api/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await API.post('/auth/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to initiate password reset. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="shadow-secondary flex justify-center items-center pt-8 pb-8 bg-primary">
      <div className="w-full max-w-xs p-8 bg-primary shadow-secondary rounded-2xl">
        <h2 className="text-text2 text-center text-xl mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-500">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-200 text-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mb-4 bg-secondary text-white rounded shadow hover:bg-hover"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>
        {message && <p className="text-center text-gray-700">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;