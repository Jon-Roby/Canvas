import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './types';

/*
  ******************************************************************************
  CHOOSE CORRECT ROOT URL
  ******************************************************************************
*/
const ROOT_URL = 'http://localhost:3000/api/users';

export function signinUser({ email, password }) {
  return function(dispatch) {

    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(() => {
        dispatch(authError('Bad Sign in Info'));
      });
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        console.log('response ', response);
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(response => {
        dispatch(authError(response.data.error));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    }).then(response => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message
      })
    });
  }
}
