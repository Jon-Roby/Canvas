import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

import Accordion from './accordion';

class ViewMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    }
  }

  componentWillMount() {
    let genre = this.props.location.pathname.split('/')[3];
    console.log(genre);
    this.props.fetchMovies(genre);
  }

  componentDidUpdate(nextProps) {
    if (this.props.route.path !== nextProps.route.path) {
      let genre = this.props.location.pathname.split('/')[3];
      this.props.fetchMovies(genre);
      return true;
    }

    return false;
  }

  getMoviesLink(movieLink) {
    let id = movieLink.split('/')[4];
    return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
    // return `https://i.ytimg.com/vi/${movies.link}/hqdefault.jpg`;
  }

  renderMovies() {
    let { movies } = this.props;

    return movies.map((movie) => {
      let id = `/movies/${movie._id}`
      return (
          <li className="list-group-item">
              <div>
                <div className="view-movies-title">{movie.title}</div>
              </div>
              <Link to={id}>
                <div className="image-container">
                  <img className="view-movies-image" src={this.getMoviesLink(movie.link)}></img>
                  <div className="view-movies-image-overlay">
                    <span id="play" className="lnr lnr-film-play"></span>
                  </div>
                </div>
              </Link>
              <Accordion description={movie.description} />

          </li>
      )
    });
  }

  render() {
    const { movies } = this.props;

    if (!movies) {
      return (
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
      )
    }

    return (
        <div className="movies-detail">

          <ul className="list-group">
            {this.renderMovies()}
          </ul>
        </div>
    );
  }
}



function mapStateToProps(state) {
  return { movies: state.movies.movies };
}

export default connect(mapStateToProps, actions)(ViewMovies);
