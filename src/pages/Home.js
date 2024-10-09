// src/pages/Home.js
import React from 'react';
import SubscriptionForm from '../components/SubscriptionForm';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Python Money</h1>
      <p>
        Ready to take control of your career and finances with Python? Explore our resources to get
        started today!
      </p>
      <button onClick={() => (window.location.href = '/education')}>
        Start Learning Python Now
      </button>
      {/* Add the subscription form here */}
      <SubscriptionForm />
    </div>
  );
}

export default Home;
