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

  componentDidMount() {
    this.props.fetchMovies();
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
          <li key={movie._id} className="list-group-item">
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

  // <div className="view-movies-banner">
  //   <img className="view-movies-banner-img" src="https://i.ytimg.com/vi/lqG_HDApCrw/maxresdefault.jpg"></img>
  // </div>

  render() {
    const { movies } = this.props

    if (!movies) {
      return <div>Loading ...</div>
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
