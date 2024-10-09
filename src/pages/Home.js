import React from 'react';
import WelcomeMessage from '../components/WelcomeMessage';
import SubscriptionForm from '../components/SubscriptionForm';
import FeaturedArticles from '../components/FeaturedArticles';
import PMClassics from '../components/PMClassics';
import RecentPosts from '../components/RecentPosts';
import LatestForumPosts from '../components/LatestForumPosts';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to PythonMoney</h1>
          <p>Your ultimate guide to mastering Python and making money!</p>
        </div>
      </section>

      <section className="grid-item welcome-section">
        <div className="boxed-content">
          <WelcomeMessage />
        </div>
      </section>

      <section className="grid-item subscription-section">
        <div className="boxed-content highlighted-box">
          <SubscriptionForm />
        </div>
      </section>

      <section className="grid-item featured-section">
        <div className="boxed-content card-layout">
          <FeaturedArticles />
        </div>
      </section>

      <hr className="section-divider" />

      <div className="grid-container">
        <aside className="grid-item sidebar">
          <div className="boxed-content">
            <PMClassics />
          </div>
          <div className="boxed-content card-layout">
            <RecentPosts />
          </div>
          <div className="boxed-content card-layout">
            <LatestForumPosts />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
