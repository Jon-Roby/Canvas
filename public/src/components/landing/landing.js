import React, { Component } from 'react';
import { Link } from 'react-router';
// import Slider from 'react-viewport-slider';
import Slider from '../../../utils/react-viewport-slider/src/index.js';
import ScrollReveal from 'scrollreveal';
import LandingNavbar from './landing_navbar.js';
import LandingSection1 from './landing_section_1.js';
import LandingSection2 from './landing_section_2.js';
import LandingSection3 from './landing_section_3.js';
import LandingSection4 from './landing_section_4.js';
import LandingSection5 from './landing_section_5.js';

export default class Landing extends Component {
  render() {
    return (
      <Slider>
        <LandingSection1 />
        <LandingSection2 />
        <LandingSection3 />
        <LandingSection4 />
        <LandingSection5 />
      </Slider>
    );
  }
}
