// import React from 'react';

function faq() {
  return (
    <div className="mx-auto px-4 bg-primary p-10 shadow-secondary">
      <div className='max-w-2xl mx-auto p-10 mt-5 shadow-secondary rounded-lg'>
        <h2 className="text-2xl mb-6 text-secondary">Frequently Asked Questions</h2>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">What is the Music App?</h3>
          <p className="text-gray-600">The Music App is a platform where users can discover, stream, and enjoy music from various artists and genres.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">How do I create an account?</h3>
          <p className="text-gray-600">To create an account, simply click on the "Sign Up" button and follow the on-screen instructions. You'll need to provide your email address and create a password.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">Can I listen to music offline?</h3>
          <p className="text-gray-600">Yes, you can! The Music App offers offline listening features for premium subscribers. Simply download your favorite tracks or albums to enjoy them offline.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">How do I cancel my subscription?</h3>
          <p className="text-gray-600">You can cancel your subscription at any time by visiting the "Subscription" section in your account settings. Follow the prompts to cancel your subscription.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">Is my personal information secure?</h3>
          <p className="text-gray-600">Yes, we take the security of your personal information very seriously. We use encryption and other security measures to protect your data from unauthorized access.</p>
        </div>
      </div>
    </div>
  );
}

export default faq;
