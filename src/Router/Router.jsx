import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Skills from '../Pages/Skills'
import Projects from '../Pages/Projects'
import Gallery from '../Pages/Gallery'
import Poem from '../Pages/Poem'
import ScrollToTop from '../components/ScrollToTop'

export default function Router() {
  return (
    <>
    <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/skills' element={<Skills />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/poem' element={<Poem />} />
            </Routes>
    </>
  )
}
