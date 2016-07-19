import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ViewMovie extends Component {
  componentDidMount() {
    console.log(this.props);
    const movieId = this.props.location.pathname.split('/')[2];
    this.props.fetchMovie(movieId);
  }

  // <div>{movie.title}</div>
  // <div>{movie.username}</div>
  // <div>{movie.description}</div>

  render() {
    const { movie } = this.props;


    if (!movie) {
      return <div>Loading ...</div>
    }

    var string = "https://www.youtube.com/embed/pFptt7Cargc";
    var rootUrl = 'https://www.youtube.com/embed/';
    return (

      <div className="view-movie">

        <div className="view-movie-theater">
          <div className="view-movie-theater-title"><p>{movie.title}</p></div>
          <div>
            <iframe id="iframe" src={movie.link} frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="view-movie-theater-details">
            {movie.description}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { movie: state.movies.movie };
}

export default connect(mapStateToProps, actions)(ViewMovie);

// <iframe width="640" height="360" src={string} frameborder="0" allowFullScreen></iframe>
// <iframe width="640" height="360" src="https://player.vimeo.com/video/174544848" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
// <iframe width="640" height="360" frameborder="0" src="//www.dailymotion.com/embed/video/x4k2z3h" allowfullscreen></iframe>
