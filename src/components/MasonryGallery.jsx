import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import axios from 'axios';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

export default function MasonryGallery() {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Replace with your backend URL
    axios.get('https://subratportfolio.onrender.com/api/blogs')
      .then(res => setData(res.data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="masonry-wrapper">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {data.map((item) => (
          <div 
            key={item.id} 
            className="masonry-item"
            onClick={() => setSelectedImage(item.imageUrl)}
          >
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </Masonry>

      {/* Fullscreen Image Viewer */}
      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <div className="overlay-content">
            <img src={selectedImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </div>
  );
}
