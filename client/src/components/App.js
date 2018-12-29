import React, { Component } from 'react';
// import logo from '../logo.svg';
import './css/App.css';
import Navbar from './Navbar';
import { LandingPage } from './LandingPage';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
