// src/pages/PMClassics.js
import React from 'react';
import './PMClassics.css';

function PMClassics() {
  const classicPosts = [
    {
      id: 1,
      title: "Getting Started with Python for Financial Freedom",
      image: "/images/ibrahim-rifath-OApHds2yEGQ-unsplash.jpg",
      excerpt: "Learn how Python can be your ticket to financial independence..."
    },
    {
      id: 2,
      title: "The Magic of Compound Interest (Calculated with Python)",
      image: "/images/ibrahim-rifath-OApHds2yEGQ-unsplash.jpg",
      excerpt: "See the power of compound interest through Python calculations..."
    },
    {
      id: 3,
      title: "Automating Your Budget with Python",
      image: "/images/ibrahim-rifath-OApHds2yEGQ-unsplash.jpg",
      excerpt: "Create a Python script to manage and optimize your budget..."
    }
  ];

  return (
    <div className="PM-classics-container">
      <h2 className="section-title">Python Money Classics</h2>
      <p className="section-description">
        These timeless posts will help you on your journey to financial freedom through Python.
      </p>

      <div className="classics-grid">
        {classicPosts.map(post => (
          <div key={post.id} className="classic-post-card">
            <div className="classic-post-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="classic-post-content">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <a href={`/post/${post.id}`} className="read-more-btn">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PMClassics;
