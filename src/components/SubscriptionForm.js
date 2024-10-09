// src/components/SubscriptionForm.js
import React, { useState } from 'react';

function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [joinBootCamp, setJoinBootCamp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', { email, joinBootCamp });
  };

  return (
    <div className="subscription-form">
      <h3>Join the Cult</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
        />
        <label>
          <input
            type="checkbox"
            checked={joinBootCamp}
            onChange={(e) => setJoinBootCamp(e.target.checked)}
          />
          Also Join the Boot Camp?
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default SubscriptionForm;