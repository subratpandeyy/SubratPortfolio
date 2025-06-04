import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaUserGraduate, FaRegSmile, FaBullseye } from "react-icons/fa";

import dp from '../assets/dp.jpg';

const Card = ({ children, className }) => (
  <div className={`custom-card ${className || ""}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`custom-card-content ${className || ""}`}>
    {children}
  </div>
);

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="about-title"
      >
        About Me
      </motion.h1> */}

      {/* Picture and Intro */}
      <motion.div
        className="about-intro"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <img
          src={dp}
          alt="Profile"
          className="about-photo"
        />
        <div className="about-intro-text">
          <h2>Hello! I'm Subrat Pandey</h2>
          <p>
            A passionate B.Tech CSE student from GIET University with a love for the MERN stack,
            problem-solving, and creating real-world solutions. I'm always learning, always building,
            and eager to contribute to exciting projects.
          </p>
        </div>
      </motion.div>

      <div className="about-grid">
        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Card className="about-card">
            <CardContent className="about-card-content">
              <FaUserGraduate className="about-icon text-blue-500" />
              <h2 className="about-subtitle">Education</h2>
              <p className="about-text">
                B.Tech CSE @ GIET University | Passionate about MERN stack, DSA, and AI.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Card className="about-card">
            <CardContent className="about-card-content">
              <FaLaptopCode className="about-icon text-green-500" />
              <h2 className="about-subtitle">Skills</h2>
              <p className="about-text">
                React, Node.js, MongoDB, Express.js, PHP, MySQL, Tailwind CSS, Git, Figma
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Personality */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Card className="about-card">
            <CardContent className="about-card-content">
              <FaRegSmile className="about-icon text-yellow-500" />
              <h2 className="about-subtitle">Personality</h2>
              <p className="about-text">
                Curious, focused, team player, always learning and building.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="about-mission enhanced-mission"
      >
        <Card>
          <CardContent>
            <FaBullseye className="about-icon text-red-500" />
            <h3 className="about-mission-title">My Mission</h3>
            <p className="about-text">
              To build meaningful tech solutions that simplify life,<br />
              grow into a well-rounded full-stack developer,<br />
              and stay grounded, creative, and community-driven.<br />
              <span style={{ fontWeight: "bold", color: "#10b981" }}>Code. Learn. Impact.</span>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AboutPage;