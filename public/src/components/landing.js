import React, { Component } from 'react';

export default class Landing extends Component {
  render() {
    return (
        <div id="youflix-landing">
          <div id="y">Y</div>
          <div id="o">O</div>
          <div id="u">U</div>
          <div id="f">F</div>
          <div id="l">L</div>
          <div id="i">I</div>
          <div id="x">X</div>
        {this.props.children}
      </div>


    );
  }
}

// <div id="landing">
//   <span className="lnr lnr-film-play"></span>YOUFLIX
//   <div>
