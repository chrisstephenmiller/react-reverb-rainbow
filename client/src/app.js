import React, { Component } from 'react';
import './app.css'
import Photos from './photos';
import Header from './header';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Photos />
        <Footer />
      </div>
    );
  }
}

export default App;
