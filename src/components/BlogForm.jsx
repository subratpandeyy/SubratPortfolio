import { useState } from "react";
import axios from "axios";

const BlogForm = ({ onBlogCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async () => {
    if (!file) return "";
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("https://subratportfolio.onrender.com/api/images/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data.imageUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageUrl = await handleImageUpload();
      const blogData = { title, content, imageUrl };
      const res = await axios.post("https://subratportfolio.onrender.com/api/blogs", blogData);
      onBlogCreated(res.data);
      setTitle("");
      setContent("");
      setFile(null);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Error creating blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <h2>Gallery Form</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit" disabled={loading}>
        {loading ? "Posting..." : "Post Blog"}
      </button>
    </form>
  );
};

export default BlogForm;
