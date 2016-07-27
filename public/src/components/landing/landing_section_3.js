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
          <p>Upload your movies.</p>
          <div className="image-container">
            <div className="view-movies-image"><img width="600" src="/style/landing/landing_section_3.png"></img></div>
          </div>
        </div>
      </div>
    );
  }
}
