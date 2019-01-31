import React, { Component } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      current: 'root',
    };
    this.handleRoute = this.handleRoute.bind(this);
  }
  handleRoute(current) {
    this.setState(
      {
        current: current,
      },
      () => {
        console.log(this.state);
      }
    );
  }
  render() {
    return (
      <div className="navbar-container">
        <Link to="/" className="navbar-item">
          Home
        </Link>

        <Link to="/about" className="navbar-item">
          About
        </Link>

        <Link to="/skills" className="navbar-item">
          Skills
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
