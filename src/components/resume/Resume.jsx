import React from 'react';
import './resume.css';
import resume from '../../assets/Saj_Resume.pdf';

const Resume = () => {
  return (
    <div className="folio__resume">
        <div className="folio__resume-content">
            <h2>Click the download button for my resume</h2>
        </div>
        <div className="folio__resume-button">
            <a href={resume} download><button type="button">Download</button></a>
        </div>
    </div>
  )};

export default Resume;
