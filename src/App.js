import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
    <div className="wrapper">
        <header className="header">Header</header>
        <article className="main">
            <Hero />
        </article>
        <footer className="footer">Footer</footer>
    </div>
    );
  }
}

export default App;
