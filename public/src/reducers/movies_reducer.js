import {
  CREATE_MOVIE,
  FETCH_MOVIE,
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_MOVIE:
      return { ...state, message: action.payload };
    case FETCH_MOVIE:
      console.log(action.payload);
      return { ...state, movie: action.payload };
  }

  return state;
}
