import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  componentDidMount() {
    let url = this.props.location.query.code;
    console.log("url ", url);

    

  }

  render() {

    return (
      <div>
        oauth2callback yay
      </div>
    );
  }
}
