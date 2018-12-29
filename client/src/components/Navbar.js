import React, { Component } from 'react';
import './css/Navbar.css';

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
        <div
          className="navbar-item active"
          onClick={() => {
            this.handleRoute('Home');
          }}
        >
          Home
        </div>
        <div
          className="navbar-item"
          onClick={() => {
            this.handleRoute('About');
          }}
        >
          About
        </div>
        <div
          className="navbar-item"
          onClick={() => {
            this.handleRoute('Skills');
          }}
        >
          Blogs
        </div>
        <div
          className="navbar-item"
          onClick={() => {
            this.handleRoute('Resume');
          }}
        >
          Resume
        </div>
        <div
          className="navbar-item"
          onClick={() => {
            this.handleRoute('Contact');
          }}
        >
          Contact
        </div>
      </div>
    );
  }
}

export default Navbar;
