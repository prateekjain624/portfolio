import React from "react";
import skills from "./Data/skills.json";

export const Skills = () => {
  return (
    <>
      <div className="container skills">
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((skill) => (
            <div className="item" data-AOS="flip-down" data-AOS-duration="1000">
              <img src={`/assets/${skill.imageSrc}`} alt={skill.title} />
              <h3 className="mt-2">{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
