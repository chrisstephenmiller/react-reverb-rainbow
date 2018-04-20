import React, { Component } from 'react';
import './footer.css'

// const colors = [`red`, `orange`, `yellow`, `green`, `blue`, `purple`]

class footer extends Component {

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    const footer = document.getElementById('footer')
    window.pageYOffset > 300 ? footer.classList.add('hide') : footer.classList.remove('hide')
  }

  render() {
    return (
      <div id="footer">
        <div id="footer-text">
          <span>made by chris miller</span>
        </div>
      </div>
    );
  }
}

export default footer;
