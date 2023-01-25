import React, { Component } from 'react';
import RenderUser from './RenderUser';
import EditUser from './EditUser';

class User extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    console.log(this);
    if (this.props.edit) {
      return <EditUser userInput={this.props.input}></EditUser>;
    } else {
      return <RenderUser userInput={this.props.input}></RenderUser>;
    }
  }
}

export default User;
