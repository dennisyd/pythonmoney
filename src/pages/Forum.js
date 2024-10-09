// src/pages/Forum.js
import React from 'react';

function Forum() {
  return (
    <div className="forum-container">
      <h1>Python Money Forum</h1>
      <p>Welcome to our community forum. Discuss Python, financial independence, and more!</p>
      
      {/* You can add forum categories or recent threads here */}
      <div className="forum-categories">
        <h2>Categories</h2>
        <ul>
          <li>Python Programming</li>
          <li>Financial Independence</li>
          <li>Career Growth</li>
          <li>Side Hustles</li>
        </ul>
      </div>
      
      {/* Add more forum functionality as needed */}
    </div>
  );
}

export default Forum;