// src/components/SubscriptionForm.js
import React, { useState } from 'react';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    width: '300px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0044cc',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

function SubscriptionForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing, ${email}`);
      setEmail(''); // Clear the email input after submission
    } else {
      alert('Please enter a valid email.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>
        Subscribe
      </button>
    </form>
  );
}

export default SubscriptionForm;
