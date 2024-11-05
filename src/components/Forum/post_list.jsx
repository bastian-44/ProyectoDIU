import React from 'react';
import Post from './post';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>No hay posts aún.</p>
      )}
    </div>
  );
};

export default PostList;
