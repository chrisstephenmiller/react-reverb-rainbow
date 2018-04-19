import React, { Component } from 'react';
import './app.css'
import Photos from './photos';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Photos />
      </div>
    );
  }
}

export default App;
