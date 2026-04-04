import { lazy, React, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = lazy(() => import('../Pages/Home'))
const About = lazy(() => import('../Pages/About'))


const Blog = lazy(() => import('../Pages/Blog'))
const Projects = lazy(() => import('../Pages/Projects'))
const ScrollToTop = lazy(() => import('../components/ScrollToTop'))
const BlogPage = lazy(() => import('../components/BlogPage'))

export default function Router() {
  return (
    <>
    <Suspense falback={<div>Loading...</div>}>
    <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/blogs' element={<Blog />}/>
                <Route path="/blog/:slug" element={<BlogPage />} />
                <Route path='/projects' element={<Projects />}/>
            </Routes>
    </Suspense>
    </>
  )
}
