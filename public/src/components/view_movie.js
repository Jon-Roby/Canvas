// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import * as actions from '../actions';
//
// class ViewMovie extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <div>hello</div>
//         <div>{this.props.movie}</div>
//       </div>
//     );
//   }
// }
//
// function mapStateToProps(state) {
//   return { movie: state.movie.message };
// }
//
// // export default connect(mapStateToProps, actions)(ViewMovie);
// export default connect(mapStateToProps)(ViewMovie);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ViewMovie extends Component {
  componentDidMount() {
    const movieId = this.props.location.pathname.split('/')[2];
    this.props.fetchMovie(movieId);
  }

  render() {
    const { movie } = this.props;


    if (!movie) {
      return <div>Loading ...</div>
    }

    console.log("movie link", movie.link);
    var string = "https://www.youtube.com/embed/pFptt7Cargc";
    var rootUrl = 'https://www.youtube.com/embed/';
    return (
      <div>
        <div>{movie.title}</div>
        <div>{movie.username}</div>
        <div>{movie.description}</div>
        <iframe id="iframe" width="560" height="315" src={movie.link} frameborder="0" allowFullScreen></iframe>
        <iframe width="640" height="360" src={string} frameborder="0" allowFullScreen></iframe>
        <iframe width="640" height="360" src="https://player.vimeo.com/video/174544848" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <iframe width="640" height="360" frameborder="0" src="//www.dailymotion.com/embed/video/x4k2z3h" allowfullscreen></iframe>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { movie: state.movies.movie };
}

export default connect(mapStateToProps, actions)(ViewMovie);
