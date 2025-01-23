import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
  return (
    <div className="container contact">
      <h1>CONTACT ME</h1>
      <div className="contact_me" data-aos="flip-up" data-aos-duration="1000">
        <a
          href="https://www.instagram.com/jainsaab624/"
          target="_blank"
          className="items"
        >
          <FaInstagram className="icons" />
        </a>
        <a
          href="https://www.facebook.com/prateek.jn624/"
          target="_blank"
          className="items"
        >
          <FaFacebookSquare className="icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/prateekjn624/"
          target="_blank"
          className="items"
        >
          <FaLinkedin className="icons" />
        </a>
        <a
          href="https://github.com/prateekjain624"
          target="_blank"
          className="items"
        >
          <FaGithubSquare className="icons" />
        </a>
        <a
          href="mailto:prateek.jn624@gmail.com"
          target="_blank"
          className="items"
        >
          <SiGmail className="icons" />
        </a>
      </div>
    </div>
  );
};
