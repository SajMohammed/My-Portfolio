import React from "react";
import "./skills.css";
import { html, css, js, reactlogo, reduxlogo, python } from "./imports";

const Skills = () => {
  return (
    <div className="folio__skills section__padding" style={{paddingTop:"7rem"}}>
        <h1 className="folio__skills-title gradient__text">my tech stack</h1>
        <div>
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={js} alt="js" />
          <img src={reactlogo} alt="react" />
          <img src={reduxlogo} alt="redux" />
          <img src={python} alt="python" />
        </div>
    </div>
  );
};

export default Skills;
