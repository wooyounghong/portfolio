import React from 'react';
import './css/Profile.css';
import AboutMe from './AboutMe';

// Profile Component that will explain about myself;

const Profile = () => (
  <div className="profile-container">
    <header className="profile-header">Profile</header>
    <div className="profile-description">
      <strong>
        I'm a creative software developer, marketer, and an animal lover!
        <hr />
      </strong>
    </div>
    <AboutMe />
  </div>
);

export default Profile;
