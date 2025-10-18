import { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:8090/api/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading Blogs...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>{error}</h2>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="text">
        <h2>No blogs available</h2>
      </div>
    );
  }

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          {blog.imageUrl && (
            <img src={blog.imageUrl} alt={blog.title} style={{ maxWidth: "100%" }} />
          )}
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
