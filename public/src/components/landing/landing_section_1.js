import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from '../../../utils/react-viewport-slider/src/index.js';
import ScrollReveal from 'scrollreveal';

export default class LandingSection1 extends Component {
  render() {
    return (
      <div>
        <div id="landing-detail">
          <div id="landing-logo">

            <div id="landing-logo-text">
              Y<div id="fa-play-circle-div"><i className="fa fa-play-circle"></i></div>UFLIX
            </div>
          </div>
          <div className="landing-text"><div>the movies you create</div></div>
          <div id="landing-text-2" className="landing-text"><div>for everyone to watch</div></div>
          <div id="landing-sign-up"><button><Link to="/users/signup">Sign Up</Link></button></div>
          <div id="landing-sign-in"><button><Link to="/users/signin">Sign In</Link></button></div>
          <div className="landing-text">
            <div className="icon-compass"></div><div>Discover movies</div>
          </div>
        </div>
      </div>
    );
  }
}
