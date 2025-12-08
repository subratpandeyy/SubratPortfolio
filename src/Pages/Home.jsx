import React from 'react'
import { IoMdDownload } from "react-icons/io";

import { motion } from "framer-motion";
import Projects from './Projects';
import Footer from '../components/Footer'

import dp1 from '../assets/dp1.jpg';
import resume from '../assets/resume.pdf';

export default function Home() {

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = resume;
    a.download = 'Subrat_Resume.pdf';
    a.click();
  };

  return (
    <>  
      <main className='container abt-section'>
        <div className='hero-section'>
        <div className='hero'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
        <img src={dp1} alt='My Image' className='myphoto'/>
        </motion.div>
        <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className='abt-txt'>
            <h1>SUBRAT PANDEY</h1>
            <p className='sm'>Full Stack Developer</p>
            <p className='sm'>Jharkhand, India </p>
            <br/>
            <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <button className='resume-btn'
            onClick={handleDownload}
          >
            Resume <IoMdDownload />
          </button>
          </motion.div>
        </div>
        </motion.h1>
        
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
        </motion.div>
        </div>

        <Projects />
      </main>
      <Footer />
    </>
  )
}
