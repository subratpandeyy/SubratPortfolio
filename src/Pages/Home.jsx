import React from 'react'
import { Link } from 'react-router-dom';

import { FaLocationDot } from "react-icons/fa6";
import { FaProjectDiagram } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { FaPenNib } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";


import dp from '../assets/dp.JPG';
import web from '../assets/web.jpg'
import gallery from '../assets/gallery.jpeg'
import poem from '../assets/poem.jpg'
import ColorGrid from '../components/ColorGrid';
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
        <img src={dp} alt='My Image' className='myphoto'/>

        <div className='abt-txt'>
            <h1>Subrat Pandey</h1>
            <p className='sm'>Full Stack Developer</p>
            <p className='sm'><FaLocationDot /> Jharkhand, India</p>
            <br/>
        </div>
          <button className='resume-btn'
            onClick={handleDownload}
          >
            Resume <IoMdDownload />
          </button>
        </div>
        {/* <ColorGrid /> */}
        <TechStack />
        </div>

        <div className='content-scroll'>
        {content.map(({ image, icon, link, head, txt }, index) => (
          <Link to={link} key={index}>
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
          </Link>
        )
        )}
        
        </div>
      </main>

    </>
  )
}
