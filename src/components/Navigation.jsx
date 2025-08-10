import { Link, useLocation } from 'react-router-dom';

import { AiFillHome } from "react-icons/ai";
import { RiMessage3Fill } from "react-icons/ri";
import { SiHyperskill } from "react-icons/si";
import { FaProjectDiagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";


export default function Navigation() {
  const location = useLocation();

  const navLinks = [
    { path: '/', icon: <AiFillHome />, label: 'Home' },
    // { path: '/about', icon: <RiMessage3Fill />, label: 'About' },
    { path: '/blog', icon: <SiHyperskill />, label: 'Blog' },
    { path: '/projects', icon: <FaProjectDiagram />, label: 'Projects' },
  ];

  const socialLinks = [
    { href: 'https://github.com/', icon: <FaGithub />, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: <FaLinkedin />, label: 'LinkedIn' },
    { href: 'https://twitter.com', icon: <FaXTwitter />, label: 'Twitter' },
    { href: 'mailto:12subratpandey@gmail.com', icon: <MdOutlineAttachEmail />, label: 'Email' },
  ];

  return (
    <>
    <div className="container header glass">
      <nav>
        <ul className="nav-list">
          {navLinks.map(({ path, icon, label }) => (
            <li key={label}>
              <Link
                to={path}
                className={`nav-link ${
                  location.pathname === path ? 'active' : ''
                }`}
                aria-label={label}
              >
                {icon}
                <span className="sr-only">{label}</span>
              </Link>
            </li>
          ))}

          <hr />

          {socialLinks.map(({ href, icon, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={label}
              >
                {icon}
                <span className="sr-only">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    </>
  );
}
