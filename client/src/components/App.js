import React, { Component } from 'react';
import './css/App.css';
import Navbar from './Navbar';
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
