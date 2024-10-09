// src/components/FeaturedArticles.js
import React from 'react';
import './FeaturedArticles.css';

const featuredArticles = [
  {
    id: 1,
    title: "The Ultimate Guide to Financial Freedom with Python",
    image: "/images/ibrahim-rifath-OApHds2yEGQ-unsplash.jpg",
    excerpt: "Discover how Python can be your ticket to financial independence..."
  },
  {
    id: 2,
    title: "Building a Personal Finance Dashboard with Python",
    image: "/images/ibrahim-rifath-OApHds2yEGQ-unsplash.jpg",
    excerpt: "Step-by-step tutorial on creating your own finance tracking dashboard..."
  },
  {
    id: 3,
    title: "Python Scripts for Passive Income: 5 Ideas to Get Started",
    image: "/images/ibrahim-rifath-OApHds2yEGQ-unsplash.jpg",
    excerpt: "Learn how to generate passive income streams using your Python skills..."
  }
];

function FeaturedArticles() {
  return (
    <div className="featured-articles-container">
      <h2 className="section-title">Featured Articles</h2>
      <div className="articles-grid">
        {featuredArticles.slice(0, 3).map(article => (
          <div key={article.id} className="article-card">
            <div className="article-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="article-content">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-excerpt">{article.excerpt}</p>
              <a href={`/article/${article.id}`} className="read-more-btn">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedArticles;
