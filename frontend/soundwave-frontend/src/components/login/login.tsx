// FileName: LoginPage.tsx (Frontend)

import React, { SetStateAction, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
//import googleIcon from '../src/components/img/google.png';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const handleLogin = (googleData: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('tokenId' in googleData) {
      axios.post('/api/auth/google', { token: googleData.tokenId })
        .then((response: AxiosResponse) => {
          console.log('User authenticated', response.data);
        })
        .catch((error: AxiosError) => {
          console.error('Authentication error', error);
        });
    }
  };

  const handleFailure = (error: unknown) => {
    console.log('Login Failed:', error);
    toast.error('Google authentication failed');
  };

  const handleEmailLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email login
  };

  const handleEmailSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email signup
  };

  return (
    <div className="shadow-secondary app-container">
      <div className='bg-primary min-h-screen flex justify-center items-center'>
        <div className="form-container bg-transparent shadow-secondary rounded-2xl p-10 w-full md:w-96 h-auto md:h-148 ml-10 mr-10">
          <div className="tabs flex">
            <div className={`tab cursor-pointer py-2 px-4 rounded-tl-lg ${activeTab === 'login' ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-600'}`} onClick={() => handleTabChange('login')}>
              LOG IN
            </div>
            <div className={`tab cursor-pointer py-2 px-4 rounded-tr-lg ${activeTab === 'signup' ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-600'}`} onClick={() => handleTabChange('signup')}>
              SIGN UP
            </div>
          </div>
          {activeTab === 'login' && (
            <form className="mt-4 sm:mt-2" onSubmit={handleEmailLogin}>
              <input className="bg-text2 w-full mt-9 px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:border-secondary" type="text" placeholder="Email" autoComplete="current-email"/>
              <input className="bg-text2 w-full mt-5 px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:border-secondary" type="password" placeholder="Password" autoComplete="current-password"/>
              <button type="submit" className="border-0 py-2  focus:outline-none transition-transform duration-300 hover:scale-110 shadow-secondary rounded text-lg w-full mt-5 bg-secondary text-white py-2 rounded-2xl hover:bg-hover focus:outline-none focus:bg-hover">
                Sign In
              </button>
            </form>
          )}
          {activeTab === 'signup' && (
            <form className="mt-4 sm:mt-2" onSubmit={handleEmailSignup}>
              <input className="bg-text2 w-full mt-5 px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:border-secondary" type="text" placeholder="Email" />
              <input className="bg-text2 w-full mt-5 px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:border-secondary" type="password" placeholder="Password" />
              <input className="bg-text2 w-full mt-5 px-3 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:border-secondary" type="password" placeholder="Confirm Password" />
              <button type="submit" className="border-0 py-2  focus:outline-none transition-transform duration-300 hover:scale-110 shadow-secondary rounded text-lg w-full mt-5 bg-secondary text-white py-2 rounded-2xl hover:bg-hover focus:outline-none focus:bg-hover">
                Sign Up
              </button>
            </form>
          )}
          <h1 className="flex justify-center mt-5 text-text2"></h1>
          <div className="flex justify-center mt-5">
            <div className="social-buttons bg-transparent rounded-lg  flex items-center">
              <GoogleLogin
                clientId="348531941395-qkh05gurrts4v8s87lkb6a5t7i3hlsu4.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
