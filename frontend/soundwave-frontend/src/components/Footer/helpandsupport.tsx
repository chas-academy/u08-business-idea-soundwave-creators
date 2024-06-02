// import React from 'react';
import { Link } from "react-router-dom";

function HelpAndSupport() {
  return (
    <div className="mx-auto px-4 bg-primary p-10 shadow-secondary">
      <div className='max-w-2xl mx-auto p-10 mt-5 shadow-secondary rounded-lg'>
        <h2 className="text-2xl mb-6 text-secondary">Need Help?</h2>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">Contact Us</h3>
          <p className="text-gray-600">Have a question or need assistance? Our dedicated support team is available to help you. Please <Link to='/contactus' className="text-text hover:text-hover underline" >contact us</Link> and we'll get back to you as soon as possible.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">FAQs</h3>
          <p className="text-gray-600">Explore our Frequently Asked Questions (FAQs) section to find answers to common queries. You might find the solution to your problem right here!</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">User Guides</h3>
          <p className="text-gray-600">New to the Music App? Check out our comprehensive user guides and tutorials to help you navigate through the app's features and functionalities with ease.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl text-secondary mb-4">Feedback</h3>
          <p className="text-gray-600">We value your feedback! Your insights help us enhance the Music App experience for all users. Please feel free to share your thoughts and suggestions with us and give us your <Link to='/feedback' className="text-text hover:text-hover underline" >feedback</Link>.</p>
        </div>
      </div>
    </div>
  );
}

export default HelpAndSupport;
