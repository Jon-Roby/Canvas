import {
  CREATE_MOVIE,
  FETCH_MOVIE,
  FETCH_MOVIES
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {

    case CREATE_MOVIE:
      return { ...state, message: action.payload };
    case FETCH_MOVIE:
      return { ...state, movie: action.payload };
    case FETCH_MOVIES:
      return { ...state, movies: action.payload };
  }

  return state;
}
