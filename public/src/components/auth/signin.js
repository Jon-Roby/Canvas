import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ username, password }) {
    this.props.signinUser({ username, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { username, password }} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...username} className="form-control" />
        </fieldset>

        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} className="form-control" type="password" />
        </fieldset>

        {this.renderAlert()}

        <button className="btn btn-primary" action="submit">Sign in</button>

        <button className="btn btn-primary" action="submit">
          <a href="https://accounts.google.com/o/oauth2/auth?client_id=119796969943-0pab7jeg1a1nnv23a9c4k1n4f58kuuf9.apps.googleusercontent.com&redirect_uri=http://localhost:8080/oauth2callback&scope=https://www.googleapis.com/auth/youtube&response_type=code&access_type=offline">YouTube Sign In</a>
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'signin',
  fields: ['username', 'password']
}, mapStateToProps, actions)(Signin)
