import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  CREATE_MOVIE,
  FETCH_MOVIE
} from './types';

var root_url;
console.log("process.env", process.env);
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  root_url = 'http://localhost:3000/api';
} else {
  root_url = 'https://mighty-cove-77261.herokuapp.com/api'
}

export function signinUser({ username, password }) {
  return function(dispatch) {

    axios.post(`${root_url}/users/signin`, { username, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
        browserHistory.push('/feature');
      })
      .catch(() => {
        dispatch(authError('Bad Sign in Info'));
      });
  }
}

export function signupUser({ username, password }) {
  return function(dispatch) {
    axios.post(`${root_url}/users/signup`, { username, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
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

export function fetchMovie(id) {
  return function(dispatch) {
    axios.get(`${root_url}/movies/${id}`, {
      headers: { authorization: localStorage.getItem('token') }
    }).then(response => {
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      });
    });
  }
}

export function createMovie({ title, description, link }) {
  const username = localStorage.getItem('username');
  return function(dispatch) {
    return axios({
      method: 'POST',
      url: `${root_url}/movies`,
      headers: { authorization: localStorage.getItem('token') },
      data: { title, description, link, username }
    }).then(response => {
      const id = response.data.movie._id;
      dispatch({
        type: CREATE_MOVIE,
        payload: response.data
      });
      browserHistory.push(`/movies/${id}`);

    });
  }
}
