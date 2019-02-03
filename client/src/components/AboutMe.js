import React from 'react';
import './css/AboutMe.css';

const AboutMe = () => (
  <div className="about-me-container">
    <div className="about-me-items">
      <div className="about-me-header">About Me</div>
      <div className="about-me-description">
        <strong>Name: </strong>{' '}
        <span className="about-me-font-description">Wayne Wooyoung Hong</span>
      </div>
      <div className="about-me-description">
        <strong>Age: </strong>{' '}
        <span className="about-me-font-description">27 years old</span>
      </div>
      <div className="about-me-description">
        <strong>Location: </strong>{' '}
        <span className="about-me-font-description">New York, NY</span>
      </div>
      <div className="about-me-description about-me-font-description">
        I am a full stack developer. I have expertise in Javascript and its
        frameworks such as React and Angular. Also, I have experience in using
        back-end frameworks such as Node.js and databases such as SQL and NoSQL.
        I love learning about new technologies and am currently interested in
        learning about cloud technologies such as Microsoft Azure and AWS. As a
        proof to being an animal lover, I have two Tabby cats! :)
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
