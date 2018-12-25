import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div style={styles.background}>
        <Navbar />
      </div>
    );
  }
}

const styles = {
  background: {
    backgroundColor: "white",
  }
}

export default App;
