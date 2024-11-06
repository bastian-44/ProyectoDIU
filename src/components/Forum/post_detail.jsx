import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
/*  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id)); // Encontrar el post por id
  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState(post.replies || []); // Suponiendo que el post tiene una propiedad 'replies'

  const handleReplySubmit = () => {
    if (reply.trim()) {
      setReplies([...replies, reply]);
      setReply('');
    }
  };
*/
  return (
    <div><h1>sas</h1></div>);};
    /*
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <h3>Respuestas:</h3>
      {replies.length > 0 ? (
        <ul>
          {replies.map((reply, index) => (
            <li key={index}>{reply}</li>
          ))}
        </ul>
      ) : (
        <p>No hay respuestas aún.</p>
      )}

      <div>
        <h4>Agregar una respuesta</h4>
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          rows="4"
          cols="50"
        />
        <button onClick={handleReplySubmit}>Responder</button>
      </div>
    </div>
  );
};
*/
export default PostDetail;
