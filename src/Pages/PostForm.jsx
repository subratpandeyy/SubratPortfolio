import React, { useState } from 'react'
import BlogForm from '../components/BlogForm'
import BlogList from '../components/BlogList'
import PoemForm from '../components/PoemForm';
import PoemList from '../components/PoemList';

export default function Gallery() {
  const [refresh, setRefresh] = useState(false);

  const [loading, setLoading] = useState("");

  const handleBlogCreated = () => {
    setRefresh((prev) => !prev); // trigger re-render to refresh blogs
  };

  const handlePoemCreated = () => {
    setRefresh((prev) => !prev);
  }
  return (
    <div>
      <div className='forms'>
        <BlogForm onBlogCreated={handleBlogCreated} />
        <PoemForm onPoemCreated={handlePoemCreated}/>
      </div>

    <div className="gallery">
      <h1>My Blog</h1>
      <BlogList key={refresh} />
    </div>

    <div className='gallery'>
      <h1>Poems</h1>
      <PoemList key={refresh} />
    </div>

    </div>
  )
}
