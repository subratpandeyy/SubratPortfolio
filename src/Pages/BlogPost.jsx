import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://nodeblog-uwvg.onrender.com/api/posts/${id}`)
      .then(res => res.json())
      .then(setPost)
      .catch(err => console.error(err));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <article className='blogbody'>
      <h1>{post.title}</h1>
      <p>{new Date(post.createdAt).toDateString()}</p>
      <div>{post.body}</div>
    </article>
  );
};

export default BlogPost;
