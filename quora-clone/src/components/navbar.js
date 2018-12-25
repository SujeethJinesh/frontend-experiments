import React, { Component } from 'react';
import './navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div style={styles.Navbar}>
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