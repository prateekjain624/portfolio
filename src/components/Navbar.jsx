import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div
      className="container nav_bar"
      data-AOS="fade-down"
      data-AOS-duration="1000"
    >
      <div className="left nav_items">PortFolio</div>
      <div className="right">
        <Link to="home" smooth={true} duration={500} className="nav_items">
          Home
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="nav_items"
        >
          Experience
        </Link>
        <Link to="skill" smooth={true} duration={500} className="nav_items">
          Skills
        </Link>
        <Link to="project" smooth={true} duration={500} className="nav_items">
          Project
        </Link>
        <Link to="contact" smooth={true} duration={500} className="nav_items">
          Contact
        </Link>
      </div>
    </div>
  );
};
