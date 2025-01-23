import React from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar  navbar-expand-lg ">
        <div className="container">
          <h2>Portfolio</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className=" nav_items right">
                <Link className=" active" aria-current="page" to="home">
                  Home
                </Link>
              </li>
              <li className="nav_items right">
                <Link className="" to="experience">
                  Experience
                </Link>
              </li>
              <li className="nav_items right">
                <Link className="" to="skill">
                  Skills
                </Link>
              </li>
              <li className="nav_items right">
                <Link className="" to="project">
                  Project
                </Link>
              </li>
              <li className="nav_items right">
                <Link className="" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
