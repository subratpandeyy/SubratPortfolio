import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiSpring,
  SiOpenjdk,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiNeovim,
  SiPostman,
  SiLinux
} from "react-icons/si";

const TechStack = () => {
  return (
    <section className="tech-section">
      <div className="tech-icons">
        <SiNextdotjs className="text-gray-300"/>
        <SiReact className="text-gray-300"/>
        <SiSpring className="text-gray-300"/>
        <SiOpenjdk className="text-gray-300"/>
        <SiNodedotjs className="text-gray-300"/>
        <SiPostgresql className="text-gray-300"/>
        <SiMongodb className="text-gray-300"/>
        <SiTailwindcss className="text-gray-300"/>
        <SiGit className="text-gray-300"/>
        <SiNeovim className="text-gray-300"/>
        <SiPostman className="text-gray-300"/>
        <SiLinux className="text-gray-300"/>
      </div>
    </section>
  );
};

export default TechStack;

