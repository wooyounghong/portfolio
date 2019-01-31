import React from 'react';
import { SocialIcon } from 'react-social-icons';

import './css/Contact.css';
const Contact = () => (
  <div className="contact-container">
    <div className="contact-header">Contact ME!</div>
    <img
      src={require('../image/contact-me.jpg')}
      alt="moses and i"
      className="contact-image"
    />
    <div className="contact-footer">
      <div className="contact-footer-items">
        <SocialIcon
          url="https://www.linkedin.com/in/wayne-wooyoung-hong/"
          target="_blank"
        />
      </div>
      <div className="contact-footer-items">
        <SocialIcon
          url="https://github.com/wooyounghong"
          bgColor="black"
          target="_blank"
        />
      </div>
      <div className="contact-footer-items">
        <SocialIcon
          url="https://www.facebook.com/profile.php?id=605924668"
          target="_blank"
        />
      </div>
      <div className="contact-footer-items">
        <a href={'mailto:hongwy1128@gmail.com'}>
          <img src={require('../image/gmail.svg')} className="contact-gmail" />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
