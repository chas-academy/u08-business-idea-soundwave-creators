//import * as React from 'react';
import './subscribe.css'; // Ensure that Tailwind CSS is imported correctly in this file

const Subscribe = () => {
  return (
    <div className="shadow-secondary bg-primary flex justify-center items-center">
      <div className="grid  md:grid-cols-3 gap-10 px-4 pt-8 pb-8">
        <div className="card shadow-secondary bg-primary text-text">
          <h2 className="card_title text-secondary text-2xl mb-2">Basic</h2>
          <p className="pricing text-3xl font-bold">0$<span className="small text-xl">/per month</span></p>
          <p className="text-secondary">Go Free</p>
          <hr className="my-4" />
          <ul className="features text-text2 list-none p-0">
            <li>One account</li>
            <li>limited songs</li>
            <li>One playlist</li>
          </ul>
          <a href="#" className="cta_btn block w-full text-center bg-secondary text-white py-2 rounded hover:bg-hover mt-4">Buy Now</a>
        </div>
        <div className="card shadow-secondary bg-primary text-text">
          <h2 className="card_title text-secondary text-2xl mb-2">Silver</h2>
          <p className="pricing text-3xl font-bold">5$<span className="small text-xl">/per month</span></p>
          <p className="text-secondary">Save $10</p>
          <hr className="my-4" />
          <ul className="features text-text2 list-none p-0">
            <li>One account</li>
            <li>limited songs</li>
            <li>Customized playlist</li>
          </ul>
          <a href="#" className="cta_btn block w-full text-center bg-secondary text-white py-2 rounded hover:bg-hover mt-4">Buy Now</a>
        </div>
        <div className="card shadow-secondary bg-primary text-text">
          <h2 className="card_title text-secondary text-2xl mb-2">Gold</h2>
          <p className="pricing text-3xl font-bold">10$<span className="small text-xl">/per month</span></p>
          <p className="text-secondary">Save $15</p>
          <hr className="my-4" />
          <ul className="features text-text2 list-none p-0">
            <li>One accounts</li>
            <li>Unlimited songs</li>
            <li>Customized playlist</li>
          </ul>
          <a href="#" className="cta_btn block w-full text-center bg-secondary text-white py-2 rounded hover:bg-hover mt-4">Buy Now</a>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
