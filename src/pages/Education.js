// src/pages/Education.js
import React from 'react';

function Education() {
  return (
    <div style={styles.container}>
      <h1>Learn Python for Career Growth</h1>
      <p>
        Python is one of the most versatile and in-demand programming languages today. 
        Whether you're looking to earn extra income through freelance work or want to pivot into a new, rewarding career, 
        learning Python is a valuable investment in your future.
      </p>

      <h2>Why Learn Python?</h2>
      <ul style={styles.list}>
        <li>It's beginner-friendly and easy to learn.</li>
        <li>Python is used in diverse fields like web development, data science, and automation.</li>
        <li>Opportunities for freelance work, side gigs, or even full-time positions.</li>
        <li>It’s a highly sought-after skill by employers in tech and non-tech industries.</li>
      </ul>

      <h2>What You’ll Learn:</h2>
      <ul style={styles.list}>
        <li>Basic Python programming concepts.</li>
        <li>Automating tasks and processes using Python scripts.</li>
        <li>Data analysis and visualization with Python libraries like Pandas and Matplotlib.</li>
        <li>Building web applications with frameworks like Flask or Django.</li>
        <li>Using Python for machine learning and AI projects.</li>
      </ul>

      <p>
        Start your Python journey today and unlock the potential for financial growth, whether you're freelancing, 
        creating your own projects, or aiming for a new job in tech!
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  list: {
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '600px',
    listStyleType: 'disc',
  },
};

export default Education;
