import React from 'react';
import './connect.css';
import {connectImage, linkedin, github, twitter, gmail, instagram} from './imports';

const Connect = () => {
  return (
    <div className="folio__connect section__padding" id="connect">
        <div className="folio__connect-content">
            <h1 className="gradient__text">Connect with me on my Socials.<br/> Let's build something amazing together</h1>
            <div>

                <div>
                    <a href="https://www.linkedin.com/in/saj-s/" target="_blank"><img src={linkedin} alt="Linkedin"/></a>
                </div>
                <div>
                    <a href="https://github.com/SajMohammed" target="_blank"><img src={github} alt="github"/></a>
                </div>
                <div>
                    <a href="https://twitter.com/SajMohammed" target="_blank"><img src={twitter} alt="twitter"/></a>
                </div>
                <div>
                    <a href="mailto:sajmohammed.s@gmail.com" target="_blank"><img src={gmail} alt="gmail"/></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/the_hungry_bedouin/" target="_blank"><img src={instagram} alt="instagram"/></a>
                </div>
            </div>
        </div>
        <div className="folio__connect-image">
            <img src={connectImage} alt="connect" />
        </div>
    </div>
  )};

export default Connect;
