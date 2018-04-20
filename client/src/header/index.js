import React, { Component } from 'react';
import './header.css'

// const colors = [`red`, `orange`, `yellow`, `green`, `blue`, `purple`]

class Header extends Component {

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    const header = document.getElementById('header')
    window.pageYOffset > 300 ? header.classList.add('hide') : header.classList.remove('hide')
  }

  render() {
    return (
      <div id="header">
        <div id="header-text">
        <span>REVERB RAINBOW </span><span id="author"> - made by chris miller</span>
        </div>
      </div>
    );
  }
}

export default Header;
