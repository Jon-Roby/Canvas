// var Collapse = require('rc-collapse');
// var Panel = Collapse.Panel;
// var React = require('react');
// var ReactDOM = require('react-dom');

import Collapse, { Panel } from 'rc-collapse';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ShowMore extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    const cssClass = this.state.active ? "view-movies-detail-accordion-active" : "view-movies-detail-accordion-inactive";
    const cssId = this.state.active ? "lnr-chevron-down-active" : "lnr-chevron-down-inactive" ;
    return (
      <div className="view-movies-detail-accordion">
        <div className={cssClass}>
          <div>{this.props.description}</div>
        </div>
        <div onClick={this.toggle}><span id={cssId} className="lnr lnr-chevron-down-circle"></span></div>

      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return { movie: state.movies.movie };
// }

export default connect(null, null)(ShowMore);
