import React from 'react';
import './connect.css';
import connectImage from '../../assets/Sally-4.svg';

const Connect = () => {
  return (
    <div className="folio__connect section__padding" id="connect">
        <div className="folio__connect-content">
            <h1 className="gradient__text"> The Possibilities are beyond Imagination</h1>
        </div>
        <div className="folio__connect-image">
            <img src={connectImage} alt="connect" />
        </div>
    </div>
  )};

export default Connect;
