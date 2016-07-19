import React, { Component } from 'react';
import Navbar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar {...this.props} />
        <div className="navbar-separation"></div>
        {this.props.children}
      </div>
    );
  }
}
