import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../api/api';

const OAuthCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      if (code) {
        try {
          const response = await API.post('/auth/google/callback', { code });
          localStorage.setItem('token', response.data.token);
          navigate('/dashboard');
        } catch (error) {
          console.error('OAuth callback error', error);
          alert('OAuth callback failed');
        }
      }
    };

    handleAuth();
  }, [navigate]);

  return  <div>"Loading..."</div>;
};

export default OAuthCallback;
