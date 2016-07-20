import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Navbar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      let navIsWhite = this.getNavbarOptionsColor();

      let color = navIsWhite ? 'navbar-white' : 'navbar-black';

      let userId = localStorage.getItem('userId');

      let userProfile = `/users/${userId}`
      return [
        <div key={1}>
          <button id={color} >
            <Link  to="/users/favorite"><div><span className="lnr lnr-heart"></span></div></Link>
          </button>
        </div>,
        <div key={2}>
          <button id={color}>
            <Link to={userProfile}><span className="lnr lnr-user"></span></Link>
          </button>
        </div>,
        <div key={3}>
          <button id={color} className="lnr-camera-video-button">
            <Link to="/movies/create"><span className="lnr lnr-camera-video"></span></Link>
          </button>
        </div>
      ]

    } else {

      return [
        <div key={1}>
          <button>
          <Link className="nav-link" to="/users/signin">Sign In</Link>
          </button>
        </div>,
        <div key={2}>
          <button>
            <Link className="nav-link" to="/users/signup">Sign Up</Link>
          </button>
        </div>


      ]
    }

  }

  getNavbarColor() {
    let genre = this.props.location.pathname.split('/')[3];
    return `navbar-top-navbar-color-${genre}`;
  }

  getNavbarOptionsColor() {
    let genres = ['drama', 'comedy', 'thriller', 'horror', 'musical', 'bender'];
    let genreUrl = this.props.location.pathname.split('/')[3];
    let genresHasGenreUrl = genres.indexOf(genreUrl) !== -1;
    return genresHasGenreUrl;
  }

  getNavbarLogoColor() {
    // action, documentary ???
    let genres = ['drama', 'comedy', 'thriller', 'horror', 'musical', 'bender'];
    let genreUrl = this.props.location.pathname.split('/')[3];
    let genresHasGenreUrl = genres.indexOf(genreUrl) !== -1;
    let color = genresHasGenreUrl ? 'navbar-brand-white' : 'navbar-brand-black';
    return color;
  }

  renderGenres() {
    let genres = ['drama', 'comedy', 'thriller', 'horror', 'musical', 'bender'];

    return genres.map((genre) => {
      let id = `genres-${genre}`
      let url = `/movies/genres/${genre}`;

      let genreUrl = this.props.location.pathname.split('/')[3];

      let className = genreUrl === genre ? `genres-${genre}-selected` : null;

      return (
        <div id={id} className={className} key={genres.indexOf(genre)}>
          <Link to={url}>{genre.toUpperCase()}</Link>
        </div>
      )
    });
  }

  render() {
    return (
      <nav className="navbar">

        <nav id={this.getNavbarColor()} className="navbar-top-navbar-container">
          <div className="navbar-top">
            <div>
              <Link to="/" id={this.getNavbarLogoColor()} className="navbar-brand">
                <div><span className="lnr lnr-film-play"></span></div>
                <div id="youflix-logo-I">
                  |
                </div>

                <div id="youflix-logo-you">
                  YOU
                </div>

                <div id="youflix-logo-flix">
                  FLIX
                </div>
              </Link>
            </div>


            <div className="navbar-top-options">
              {this.renderLinks()}
            </div>

          </div>
        </nav>

        <nav className="navbar-bottom-navbar-container">

          <div className="navbar-bottom">

            {this.renderGenres()}

          </div>

        </nav>

      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Navbar);
