// src/components/LatestForumPosts.js
import React from 'react';

const forumPosts = [
  { id: 1, title: "Best Python Libraries for Finance", author: "PythonFanatic" },
  { id: 2, title: "How to Start Freelancing with Python", author: "CodeMaster" },
  // Add more forum posts
];

function LatestForumPosts() {
  return (
    <div className="latest-forum-posts">
      <h3>Recent Forum Posts</h3>
      <ul>
        {forumPosts.map(post => (
          <li key={post.id}>
            <a href={`/forum/post/${post.id}`}>{post.title}</a>
            <span> by {post.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestForumPosts;