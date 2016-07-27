import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  CREATE_MOVIE,
  FETCH_MOVIE,
  FETCH_MOVIES,
  FETCH_USER,
  LOAD_GENRE
} from './types';

var root_url;

if (process.env.NODE_ENV === 'development') {
  root_url = 'http://localhost:3000/api';
} else {
  root_url = 'https://mighty-cove-77261.herokuapp.com/api'
}

export function signinUser({ username, password }) {
  return function(dispatch) {

    axios.post(`${root_url}/auth/signin`, { username, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('userId', response.data.userId);
        browserHistory.push('/movies');
      })
      .catch(() => {
        dispatch(authError('Bad Sign in Info'));
      });
  }
}

export function signupUser({ username, password }) {
  return function(dispatch) {
    axios.post(`${root_url}/auth/signup`, { username, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('userId', response.data.userId);
        browserHistory.push('/movies');
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

export function fetchUser(id) {
  return function(dispatch) {
    axios.get(`${root_url}/users/${id}`, {
      headers: { authorization: localStorage.getItem('token') }
    }).then(response => {
      console.log("response ", response);
      dispatch({
        type: FETCH_USER,
        payload: response.data
      });
    });
  }
}

export function fetchMovies(genre) {
  let url;
  if (!genre) {
    url = `${root_url}/movies`
  } else {
    url = `${root_url}/movies/genres/${genre}`
  }


  return function(dispatch) {
    axios.get(url, {
      headers: { authorization: localStorage.getItem('token') }
    }).then(response => {
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      });
    });
  }
}

export function fetchMoviesByGenre(genre) {
  return function(dispatch) {
    axios.get(`${root_url}/movies/${genre}`, {
      headers: { authorization: localStorage.getItem('token') }
    }).then(response => {
      dispatch({
        type: FETCH_MOVIES,
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
