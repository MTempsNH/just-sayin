import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SignUpHero from './containers/SignUpHero';

class App extends Component {
  render() {
    return (
    <div className="wrapper">
        <header className="header">Header</header>
        <SignUpHero />
        <footer className="footer">Footer</footer>
    </div>
    );
  }
}

export default App;
