import React from "react";
import pdf from "./pdf/Prateek_jain_resume.pdf";
import hero from "./Data/hero.json";
import { useRef, useEffect } from "react";
import Typed from "typed.js";
export const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Welcome to my Profile",
        "My Name is Prateek Jain",
        "I am a Full Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  });

  return (
    <div className="container home">
      <div className="left" data-AOS="fade-up-right" data-AOS-duration="1000">
        <h1 ref={typedRef}></h1>
        <a
          href={pdf}
          download="Resume.pdf"
          className="btn btn-outline-warning mt-2"
        >
          Download Resume
        </a>
      </div>
      <div className="right">
        <div className="img" data-AOS="fade-up-left" data-AOS-duration="1000">
          <img src={`/assets/${hero.imgSrc}`} alt="hero image" />
        </div>
      </div>
    </div>
  );
};
