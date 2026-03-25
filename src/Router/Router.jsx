import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import BlogList from '../components/BlogList.jsx'
import Projects from '../Pages/Projects'
import ScrollToTop from '../components/ScrollToTop'
import BlogPage from '../components/BlogPage.jsx'

export default function Router() {
  return (
    <>
    <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/blogs' element={<BlogList />}/>
                <Route path="/blog/:slug" element={<BlogPage />} />
                <Route path='/projects' element={<Projects />}/>
            </Routes>
    </>
  )
}
