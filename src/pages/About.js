// src/pages/About.js
import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1>About Python Money</h1>
      <p>
        At Python Money, we are dedicated to providing accessible, actionable financial education to help individuals 
        better manage their money. Whether you're just getting started on your financial journey or you're looking to 
        sharpen your investing skills, we have something for you.
      </p>
      <p>
        We believe that financial literacy is a key to freedom, and our goal is to empower you with the knowledge and tools 
        to build a stable, prosperous future.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default About;
