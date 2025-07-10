import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    fetch(`https://nodeblog-uwvg.onrender.com/api/posts?page=${page}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setNextPage(data.pagination.nextPage);
      })
      .catch(err => console.error(err));
  }, [page]);

  return (
    <div className="blog-container">
      <ul className='article-ul'>
        {posts.map(post => (
          <li key={post._id}>
            <a href={`/blog/${post._id}`}>{post.title}</a>
            <p>{new Date(post.createdAt).toDateString()}</p>
          </li>
        ))}
      </ul>
      {nextPage && (
        <button onClick={() => setPage(nextPage)}>Load More</button>
      )}
    </div>
  );
};

export default Blog;
