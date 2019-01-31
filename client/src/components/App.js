import React, { Component } from 'react';
// import logo from '../logo.svg';
import './css/App.css';
import Navbar from './Navbar';
// import { LandingPage } from './LandingPage';
import Main from './Main';

// App component renders Navbar Component and Main Component

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
