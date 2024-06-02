// import React from 'react';
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="mx-auto px-4 bg-primary p-10 shadow-secondary">
      <div className='max-w-2xl mx-auto p-10 mt-5 shadow-secondary rounded-lg'>
        <h2 className="text-2xl mb-6 text-secondary">Music App Privacy Policy</h2>

        <p className="text-gray-600 mb-4">Effective Date: 2024.5.31</p>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">1. Information We Collect</h3>
          <p className="text-gray-600">We collect certain information about you when you use our Music App, including:</p>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Your name, email address, and other contact information you provide.</li>
            <li>Information about your device, such as the type and version of operating system, browser type, and IP address.</li>
            <li>Usage data, such as the pages you visit, the features you use, and the time spent on the app.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">2. How We Use Your Information</h3>
          <p className="text-gray-600">We use the information we collect for various purposes, including:</p>
          <ul className="text-gray-600 list-disc list-inside">
            <li>To provide and improve the Music App service.</li>
            <li>To communicate with you, such as responding to your inquiries and sending you updates about the app.</li>
            <li>To personalize your experience and provide you with targeted content and advertisements.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">3. Information Sharing and Disclosure</h3>
          <p className="text-gray-600">We may share your information with third parties in certain circumstances, including:</p>
          <ul className="text-gray-600 list-disc list-inside">
            <li>With your consent.</li>
            <li>To comply with legal obligations or respond to legal requests.</li>
            <li>To protect the rights, property, or safety of our users or others.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">4. Data Retention</h3>
          <p className="text-gray-600">We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">5. Your Choices</h3>
          <p className="text-gray-600">You have certain rights and choices regarding your personal information, including the right to access, update, or delete your information. You can exercise these rights by contacting us using the contact information provided below.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">6. Contact Us</h3>
          <p className="text-gray-600">If you have any questions about our Privacy Policy or our practices regarding your personal information, please <Link to='/contactus' className="text-text hover:text-hover underline" >contact us</Link></p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
