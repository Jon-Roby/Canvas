import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from '../../../utils/react-viewport-slider/src/index.js';
import ScrollReveal from 'scrollreveal';

// <div className="landing-navbar-search-container">
//   <div><span className="lnr lnr-magnifier"></span></div>
//   <div><input className="landing-navbar-search" type="text" value="Search YouFlix"></input></div>
// </div>

export default class LandingNavbar extends Component {
  render() {
    return (
      <div id="landing-navbar-container">
        <nav className="landing-navbar-space"></nav>
        <nav className="landing-navbar">
          <div className="landing-navbar-options">
            <div><button id="landing-navbar-options-sign-in"><Link to="/users/signin">Sign In</Link></button></div>
            <div><button id="landing-navbar-options-sign-up"><Link to="/users/signup">Sign Up</Link></button></div>
          </div>
        </nav>
      </div>
    );
  }
}
