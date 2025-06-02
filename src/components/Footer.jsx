import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} Subrat Pandey. All rights reserved.
      </p>
      <div className="footer-contact">
        <a href="mailto:12subratpandey@gmail.com" className="footer-link">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
