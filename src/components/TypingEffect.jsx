import React, { useState, useEffect } from "react";

const TypingEffect = ({ text = "", speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text || typeof text !== "string") return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p className="typing-text">
      {displayedText}
      <span className="cursor">|</span>
    </p>
  );
};

export default TypingEffect;
