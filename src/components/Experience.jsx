import React from "react";
import experiences from "./Data/experience.json";

export const Experience = () => {
  return (
    <div className="container experience">
      <h1>EXPERIENCE</h1>
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="experience_card my-5"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="ex-left">
            <img src={`/assets/${experience.imageSrc}`} alt={experience.role} />
          </div>
          <div className="ex-right">
            <h2>{experience.role}</h2>
            <h4>
              <span style={{ color: "yellowgreen" }}>
                {experience.startDate} {"-"} {experience.endDate}
              </span>{" "}
              <span style={{ color: "yellow" }}>{experience.location}</span>
            </h4>
            <h5 style={{ color: "yellow" }}>{experience.experiences[0]}</h5>
            <h5 style={{ color: "yellow" }}>{experience.experiences[1]}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
