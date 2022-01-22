import React from "react";
import { Feature } from "../../components";
import "./about.css";
import world from '../../assets/Saly-8.svg'

const About = () => {
  return (
    <div className="folio__about section__margin" id="about">
      <div className="folio__about-feature">
        <Feature
          title="About Me"
          text="I was offered my first job as ‘Systems Engineer’ in Infosys Limited, who is a global leader in next-generation digital services and was ranked third on 2019 Forbes ‘World’s best-regarded companies’ list"
        />
      </div>
      {/* <img src={world} alt="world" /> */}
      <div className="folio__about-heading">
        <h1 className="gradient__text">Possibilities are beyond imagination</h1>
        {/* <p>Explore More</p> */}
      </div>
      <div className="folio__about-container">
        <Feature title="Knowledge" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought.on by. As put impossible own apartments b "/>
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  );
};

export default About;
