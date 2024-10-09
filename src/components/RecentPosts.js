// src/components/RecentPosts.js
import React from 'react';

const recentPosts = [
  {
    id: 1,
    title: "10 Python Libraries for Financial Analysis",
    date: "2023-10-05",
    excerpt: "Discover powerful Python libraries that can supercharge your financial analysis..."
  },
  {
    id: 2,
    title: "How I Automated My Savings with Python",
    date: "2023-09-28",
    excerpt: "Learn how I used Python to create a script that automatically manages my savings..."
  },
  {
    id: 3,
    title: "Python for Stock Market Prediction: A Beginner's Guide",
    date: "2023-09-21",
    excerpt: "Get started with using Python for stock market analysis and prediction..."
  }
];

function RecentPosts() {
  return (
    <div className="recent-posts">
      <h2>Recent Posts</h2>
      <div className="posts-list">
        {recentPosts.map(post => (
          <div key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p className="post-date">{post.date}</p>
            <p>{post.excerpt}</p>
            <a href={`/post/${post.id}`}>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentPosts;