import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import moviesReducer from './movies_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  movies: moviesReducer
});

export default rootReducer;
