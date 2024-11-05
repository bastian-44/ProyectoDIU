import React, { useState } from 'react';
import PostList from './post_list';
import NewPostForm from './new_post_form';

const Forum = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Primer Post', content: 'Este es el contenido del primer post.' },
    { id: 2, title: 'Segundo Post', content: 'Este es el contenido del segundo post.' }
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, { id: posts.length + 1, ...newPost }]);
  };

  return (
    <div>
      <h1>Foro</h1>
      <NewPostForm addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default Forum;
