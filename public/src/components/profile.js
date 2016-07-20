import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions/';

class Profile extends Component {
  componentDidMount() {
    let id = this.props.location.pathname.split('/')[2];
    this.props.fetchUser(id);
  }

  render() {


    return (
      <div className="profile-card">
        <div className="profile-card-top-row">
          <div></div>
          <div>Edit</div>
          <div>Sign Out</div>
        </div>
        <div className="profile-card-middle-row">

        </div>
        <div className="profile-card-bottom-row">
          <div>0 movies</div>
          <div>0 followers</div>
          <div>0 following</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    user: state.users
  };
}

export default connect(mapStateToProps, actions)(Profile);
