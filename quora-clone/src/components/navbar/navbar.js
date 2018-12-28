import React, { Component } from 'react';
import Home from './home';
import Answer from './answer';
import Notification from './notifications';
import Spaces from './spaces';

export default class Navbar extends Component {
  render() {
    return (
      <div style={styles.Navbar}>
        <Home/>
        <Answer/>
        <Spaces/>
        <Notification/>
      </div>
    )
  }
}

const styles = {
    Navbar: {
        padding: "10px",
        height: "32px",
        boxShadow: "0px 2px 2px #DDDDDD",
    }
}