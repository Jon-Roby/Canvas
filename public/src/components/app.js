import React, { Component } from 'react';
import Navbar from './navbar';

// import {Editor, EditorState} from 'draft-js';
//
// class MyEditor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {editorState: EditorState.createEmpty()};
//     this.onChange = (editorState) => this.setState({editorState});
//   }
//   render() {
//     const {editorState} = this.state;
//     return <Editor  onChange={this.onChange} />;
//   }
// }

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar {...this.props} />
        <div className="navbar-separation"></div>

        {this.props.children}
      </div>
    );
  }
}
