import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-left">
          <h3 className="text-xl lg:text-3xl font-bold">Subrat Pandey</h3>
          <p className="text-md">Building practical and user-focused digital solutions.</p>
        </div>

        {/*<div className="footer-center">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>*/}

        <div className="footer-right flex flex-row gap-x-5 items-center justify-center">
          <a href="https://github.com/subratpandeyy" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/contact-subrat-pandey" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:12subratpandey@gmail.com">Email</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Subrat Pandey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

