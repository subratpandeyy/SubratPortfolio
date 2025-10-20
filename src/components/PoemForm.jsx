import { useState } from "react";
import axios from "axios";

const PoemForm = ({ onPoemCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const poemData = { title, content };
      const res = await axios.post("https://subratportfolio.onrender.com/api/poems", poemData);
      onPoemCreated(res.data);
      setTitle("");
      setContent("");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Error creating poem");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <h2>Poem Form</h2>
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
      <button type="submit" disabled={loading}>
        {loading ? "Posting..." : "Post Blog"}
      </button>
    </form>
  );
};

export default PoemForm;
