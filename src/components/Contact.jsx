import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
  return (
    <>
      <div class="container contact">
        <h1>CONTACT ME</h1>
        <div className="contact_me" data-AOS="flip-up" data-AOS-duration="1000">
          <a href="https://www.instagram.com/jainsaab624/" class="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/prateek.jn624/" class="items">
            <FaSquareFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/prateekjn624/" class="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://github.com/prateekjain624" class="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="mailto:prateek.jn624@gmail.com" class="items">
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};
