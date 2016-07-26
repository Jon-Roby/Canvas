import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Welcome from './components/welcome';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import Feature from './components/feature';
import ViewMovies from './components/view_movies';
import CreateMovie from './components/create_movie';
import ViewMovie from './components/view_movie';
import Profile from './components/profile';
import Landing from './components/landing/landing';
import NotFound from './components/not-found';
import RequireAuth from './components/auth/require_auth';

import reducers from './reducers';
import { AUTH_USER } from './actions/types';
import { fetchMovies } from './actions';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const history = syncHistoryWithStore(browserHistory, store);

// history.listen(location => console.log("location ", location));

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Landing} />

      <Route path="/users" component={App}>
        <Route path="signin" component={Signin} />
        <Route path="signup" component={Signup} />
        <Route path="signout" component={Signout} />
        <Route path=":id" component={Profile} />
      </Route>

      <Route path="/movies" component={App}>


        <Route path="genres">
          <Route path="drama" component={ViewMovies} />
          <Route path="comedy" component={ViewMovies} />
          <Route path="thriller" component={ViewMovies} />
          <Route path="horror" component={ViewMovies} />
          <Route path="musical" component={ViewMovies} />
          <Route path="bender" component={ViewMovies} />
        </Route>

        <Route path="create" component={CreateMovie} />
        <Route path=":id" component={ViewMovie} />
      </Route>

      <Route path='*' component={NotFound} />

    </Router>
  </Provider>
  , document.querySelector('.app'));




//   <Route path="feature" component={RequireAuth(Feature)} />
//
//   <Route path="/" component={} />
//   <Route path="create" component={CreateMovie} />
//   <Route path="createMovie" component={CreateMovie} />
//
//   <Route path="viewMovies" component={ViewMovies} />
//   <Route path="movies/:id" component={ViewMovie} />
// </Route>
//
//         <IndexRoute component={ViewMovies} />
