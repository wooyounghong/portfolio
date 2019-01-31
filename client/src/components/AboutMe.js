import React from 'react';
import './css/AboutMe.css';

const AboutMe = () => (
  <div className="about-me-container">
    <div className="about-me-items">
      <div className="about-me-header">About Me</div>
      <div className="about-me-description">
        <strong>Name: </strong> Wayne Wooyoung Hong
      </div>
      <div className="about-me-description">
        <strong>Age: </strong> 28 years old
      </div>
      <div className="about-me-description">
        <strong>Location: </strong> New York, NY
      </div>
      <div className="about-me-description">
        I am a full stack developer. I have expertise in Javascript and its
        frameworks such as React and Angular. Also, I have experience in using
        back-end frameworks such as Node.js and databases such as SQL and NoSQL.
        I love learning about new technologies and am currently interested in
        learning about cloud technologies such as Microsoft Azure and AWS.
      </div>
    </div>
    <div className="about-me-items">
      <img
        src={require('../image/wayne-pic.jpg')}
        alt="wayne's pic"
        className="about-me-image"
      />
    </div>
    {/* <div className="about-me-items">
      <div>Details:</div>
      <div>Name: Wayne Wooyoung Hong</div>
      <div>Age: 28 years old</div>
      <div>Location: New York, NY</div>
    </div> */}
  </div>
);
export default AboutMe;
