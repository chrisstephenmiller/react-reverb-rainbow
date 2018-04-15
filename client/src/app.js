import React, { Component } from 'react';
import Photos from './photos';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Photos />
      </div>
    );
  }
}

export default App;
