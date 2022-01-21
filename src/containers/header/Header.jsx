import React from "react";
import "./header.css";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="folio__header section__padding" id="home">
      <div className="folio__header-content">
        <h1 className="gradient__text">Hello World !</h1>
        <p>
          am an experienced Professional with an outstanding history of working
          in the Information Technology and Services industry. Skilled in
          Javascript, React JS, SQL, Data Science and Machine Learning. A team
          leader with remarkable management and presentation skills.
        </p>
      </div>
      <div className="folio__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
