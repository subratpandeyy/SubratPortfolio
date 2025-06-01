import React, { useState } from 'react'

import p_head from '../assets/p_head.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p12 from '../assets/p12.png';
import p11 from '../assets/p11.png';
import Rect1 from '../assets/Rect1.png'
import p22 from '../assets/p22.png';
import p_imp from '../assets/p_imp.png';
import p21 from '../assets/p21.png';
import Rect3 from '../assets/Rect3.png';
import p32 from '../assets/p32.png';
import p33 from '../assets/p33.png';
import p3_abt from '../assets/p3_abt.png';
import p31 from '../assets/p31.png';

import abt_img from '../assets/abt_img.png';

const btn = [ 
  { 
    label: 'Trackonomy',
    image_one: p_head,
    title: 'Trackonomy-Your Personal Finance Manager',
    about: 'Trackonomy solves the problem of limited visibility and inefficiency in global supply chains by providing real-time tracking and monitoring solutions. This helps prevent delays, losses, and damage, while also improving operational efficiency and decision-making. By offering end-to-end visibility and seamless integration with existing systems, Trackonomy makes supply chains smarter, faster, and more reliable.',
    abt_img: p11,
    feat_one: 'Data Visualization',
    feat_one_content: 'Trackonomy provides powerful data visualization that transforms real-time supply chain data into clear, interactive dashboards for smarter, faster decision-making.',
    feat_one_image: p1,
    feat_two: 'User Authentication',
    feat_two_content: 'Clerk is used in Trackonomy to provide secure, seamless user authentication and account management, ensuring reliable access control across the platform.',
    feat_two_image: p12,
   },
  { 
    label: 'GFG GIETU',
    image_one: p2,
    title: 'GeeksForGeeks Student Chapter GIETU',
    about: 'The GIETU team of GFG Student Chapter comprises students interested in coding and technology. They organize and conduct events such as coding challenges, workshops, and study sessions to enable others to learn. Each of them plays different roles, like event organizing, material designing, or assisting in communication. They collaborate as a team to enable learning about programming for everyone on campus.',
    abt_img: p22,
    feat_one: 'Domain Expertise',
    feat_one_content: 'The GFG Student Chapter GIETU website specializes in showcasing coding resources, events, and student achievements, promoting technical growth and collaboration within the developer community.',
    feat_one_image: p_imp, 
    feat_two: 'Team Management',
    feat_two_content: 'The GFG Student Chapter website uses a dedicated team management system to organize, display, and update chapter members efficiently, ensuring clear roles and smooth collaboration across the team.',
    feat_two_image: p21,
  }, 
  { 
    label: 'Dev Diary',
    image_one: p31,
    title: 'Dev Diary-The Ultimate Blog Website',
    about: 'I made Dev Diary, a personal blog website, to document my development career, from taking on real-world projects to investigating new technologies and resolving challenging coding issues.  I post thorough tutorials, development advice, technical explanations, and my thoughts on the things I have learned so far in this digital journal. The platform is intended to benefit other students and developers who may be on similar routes in addition as helping me reinforce my grasp of certain concepts. It allows me to develop via regular learning, writing, and sharing.',
    abt_img: p3_abt,
    feat_one: 'Detailed Blogs',
    feat_one_content: 'Dev Diary’s blogging feature allows users to create, organize, and publish technical posts with ease, making it a personal space to share and reflect on development experiences.',
    feat_one_image: p32,
    feat_two: 'CRUD Operations',
    feat_two_content: 'Dev Diary supports full CRUD operations, enabling seamless creation, reading, updating, and deletion of blog posts through a user-friendly interface.',
    feat_two_image: p33,
  } ];

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div className='container project-section'>
        <div className='project-abt'>
          <div className="abt-row">
          <div className='project-txt'>
            <h2>Web Projects</h2>
            <p>I like to develop web projects with the MERN stack because it allows me to work on the frontend 
              and the backend simultaneously in a holistic manner. With React, I concentrate on making interfaces 
              simple to use, while on the backend I employ Node.js, Express, and MongoDB to manage everything 
              from data to user actions. </p><p>I've done things such as dashboards, forms, and little tools—each of 
              them making me better at solving problems and making the web nicer to use for others. 
              They're a manifestation of how I prefer to learn and create things that are useful and simple.
              </p>
              </div>
              <img src={abt_img} alt='Bot Image' />
              
          </div>
          <div className='project-btn'>
            {
              btn.map(({label, image_one, title, about, abt_img, feat_one, feat_one_content, feat_one_image,}, index) => (
                <button key={index} 
                className='individual-btn'
                onClick={() => setSelectedIndex(index)}
                >
                  {label}
                </button>
              ))
            }
          </div>
        </div>
        <div className="project-display">
          <div className="project-image">
            <img src={btn[selectedIndex].image_one} alt='Image' />
          </div>

          <div className='project-use'>
            <div className='left-port'>
              <div className="inner-port">
                <img src={btn[selectedIndex].abt_img} alt='Mobile Responsive' />
              </div>
            </div>
            <div className="use-case">
              <h3>{btn[selectedIndex].title}</h3>
              <p>{btn[selectedIndex].about}</p>
            </div>
          </div>


          <div className="project-imp">
            <img src={Rect1} className='imp-back' />
            <div className="imp">
            <div className='imp-txt'>
              <h3>{btn[selectedIndex].feat_one}</h3>
              <p>{btn[selectedIndex].feat_one_content}</p>
            </div>
            <img src={btn[selectedIndex].feat_one_image} className='end-img'/>
            </div>
          </div>
          
          
          <div className="end-look">
          <img src={Rect3} alt='Back Image' className='end-back'/>
          <div className='imp-txt'>
              <h3>{btn[selectedIndex].feat_two}</h3> 
              <p>{btn[selectedIndex].feat_two_content}</p>
            </div>
            <img src={btn[selectedIndex].feat_two_image} className='end-img'/>
          </div>
          </div>
      </div>
    </>
  )
}
