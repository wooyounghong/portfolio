import React, { Component } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      current: 'root',
    };
  }

  render() {
    return (
      <div className="navbar-container">
        <Link to="/" className="navbar-item">
          Home
        </Link>

        <Link to="/profile" className="navbar-item">
          Profile
        </Link>

        <Link to="/projects" className="navbar-item">
          Projects
        </Link>

        <Link to="/resume" className="navbar-item">
          Resume
        </Link>

        <Link to="/contact" className="navbar-item">
          Contact
        </Link>
      </div>
    );
  }
}

export default Navbar;
