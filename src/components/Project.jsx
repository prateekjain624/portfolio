import React from "react";
import projects from "./Data/projects.json";

export const Project = () => {
  return (
    <>
      <div className="container my-3 projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex project justify-content-center align-content-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4 "
              data-AOS="flip-left"
              data-aos-easing="ease-out-cubic"
              data-AOS-duration="1500"
            >
              <div
                className="card bg-dark text-light "
                style={{ width: "18rem" }}
              >
                <div className="img">
                  <img
                    src={project.imageSrc}
                    className="card-img-top"
                    alt={project.title}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.demo} className="btn btn-primary mx-3">
                    Demo
                  </a>
                  <a href={project.source} className="btn btn-warning">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
