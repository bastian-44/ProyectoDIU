import React, { useState } from 'react';
import PostList from './post_list';
import NewPostForm from './new_post_form';
import { useParams } from 'react-router-dom';


const Forum = () => {

  const { courseId } = useParams();

  const [posts, setPosts] = useState([
    { id: 1, title: "Primer Post", content: "Este es el contenido del primer post.", replies: []},
    { id: 2, title: "Segundo Post", content: "Este es el contenido del segundo post.", replies: []}
  ]);

  const addPost = (newPost) => {
    setPosts([...posts, { id: posts.length + 1, ...newPost }]);
  };

  return (
      <div>
        <h1>Foro</h1>
        <NewPostForm addPost={addPost} />
        <PostList posts={posts} courseId={courseId} />
      </div>
  );
};

export default Forum;