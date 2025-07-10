import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Blog from '../Pages/Blog'
import Projects from '../Pages/Projects'
import Gallery from '../Pages/Gallery'
import Poem from '../Pages/Poem'
import ScrollToTop from '../components/ScrollToTop'
import BlogPost from '../Pages/BlogPost'

export default function Router() {
  return (
    <>
    <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/blog' element={<Blog />}/>
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path='/projects' element={<Projects />}/>
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/poem' element={<Poem />} />
            </Routes>
    </>
  )
}
