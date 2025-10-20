import { useEffect, useState } from "react";
import axios from "axios";

const PoemList = () => {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  const fetchPoems = async () => {
    try {
      const res = await axios.get("https://subratportfolio.onrender.com/api/poems");
      setPoems(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch poems");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPoems();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading Poems...</h2>
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

  if (poems.length === 0) {
    return (
      <div className="text">
        <h2>No poems available</h2>
      </div>
    );
  }

  return (
    <div className="poem-list">
      {poems.map((poems, index) => (
        <div key={index} className="blog-card">
          <h2>{poems.title}</h2>
          <p className="line-break">{poems.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PoemList;
