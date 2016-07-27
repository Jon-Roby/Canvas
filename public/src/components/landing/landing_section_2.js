import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from '../../../utils/react-viewport-slider/src/index.js';
import ScrollReveal from 'scrollreveal';
import LandingNavbar from './landing_navbar.js';

export default class LandingSection2 extends Component {
  render() {
    return (
      <div className="landing-section">
        <LandingNavbar />
        <div className="landing-section-content">

          <p>YouFlix is independent cinema. You create. You watch.</p>
        </div>
      </div>
    );
  }
}

// <div id="section">
//   <LandingNavbar />
//
//   <div className="landing-section-2">
//     <div id="landing-section-2-content">
//       <div id="landing-section-2-youflix"><span id="landing-lnr-film-play" className="lnr lnr-film-play"></span></div>
//       <h6>YouFlix is a space to show your cinematic creation.</h6>
//     </div>
//   </div>
// </div>
