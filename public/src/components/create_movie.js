import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import _ from 'lodash';
import * as actions from '../actions';

const FIELDS = {
  title: {
    type: 'input',
    label: 'Title'
  },
  description: {
    type: 'textarea',
    label: 'Description'
  },
  link: {
    type: 'input',
    label: 'Link'
  }
};

class CreateMovie extends Component {
  onSubmit({ title, description, link }) {
    this.props.createMovie({ title, description, link });
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];

    return (
      <div className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
        <label>{fieldConfig.label}</label>
        <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
        <div className="text-help">
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(props => this.onSubmit(props))}>
        <h3>Create a new post</h3>
        {_.map(FIELDS, this.renderField.bind(this) )}

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>

      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Ente ${field}`;
    }
  });

  return errors;
}

export default reduxForm({
  form: 'CreateMovie',
  fields: _.keys(FIELDS),
  validate
}, null, actions)(CreateMovie);
