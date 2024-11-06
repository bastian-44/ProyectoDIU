import React from 'react';
import { NavLink } from 'react-router-dom';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <NavLink to={`post/${post.id}`}>
              <h3>{post.title}</h3>
            </NavLink>
            <p>{post.content.substring(0, 100)}...</p> {/* Resumen del post */}
          </div>
        ))
      ) : (
        <p>No hay posts aún.</p>
      )}
    </div>
  );
};

export default PostList;
