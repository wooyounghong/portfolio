import React, { Component } from 'react';
// import logo from '../logo.svg';
import './css/App.css';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
        {/* <header className="app-header">Welcome to Wayne's Website! </header> */}
      </div>
    );
  }
}

export default App;
