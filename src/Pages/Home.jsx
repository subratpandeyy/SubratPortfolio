import React from 'react'
import { Link } from 'react-router-dom';

import { TbLocation } from "react-icons/tb";
import { FaProjectDiagram } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaPenNib } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

import { motion } from "framer-motion";


import dp from '../assets/dp.JPG';
import dp1 from '../assets/dp1.png';
import web from '../assets/web.jpg'
import gallery from '../assets/gallery.jpeg'
import poem from '../assets/poem.jpg'
import TechStack from '../components/TechStack';

import resume from '../assets/resume.pdf';

const content = [
  {
    image: web,
    icon: <FaProjectDiagram />,
    link: '/projects',
    head: 'Projects',
    txt: 'My Web Projects'
  },{
    image: gallery,
    icon: <GrGallery />,
    link: '/gallery',
    head: 'Gallery',
    txt: 'My Photographs'
  },
  {
    image: poem,
    icon: <FaPenNib />,
    link: '/poem',
    head: 'Poetry',
    txt: 'My Poems'
  },

]

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
            <h1>Subrat Pandey</h1>
            <p className='sm'>Full Stack Developer</p>
            <p className='sm'><TbLocation className='loc-icon'/>Jharkhand, India </p>
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
        <TechStack />
        </motion.div>
        </div>

        <div className='content-scroll'>
        {content.map(({ image, icon, link, head, txt }, index) => (
          <Link to={link} key={index}>
            <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
          <div className='windows'>
            <div className='cont-image'>
              <img src={image} alt='Image' />
            </div>
            <div className='cont-txt'>
              <div className='txt-row'>
              {icon}
                <h2 className='txt-m'>{head}</h2>
              </div>
              <p className='txt-m'>{txt}</p>
            </div>
          </div>
          </motion.div>
          </Link>
        )
        )}
        
        </div>
      </main>

    </>
  )
}
