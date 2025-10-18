import React, { useState } from 'react'
import BlogList from '../components/BlogList'
import MasonryGallery from '../components/MasonryGallery';

export default function Gallery() {
  const [refresh, setRefresh] = useState(false);
  
  return (
    <div>
      <div className="gallery">
      <h1>Gallery</h1>
      {/* <BlogList key={refresh} /> */}
      <MasonryGallery />
    </div>
    </div>
  )
}
