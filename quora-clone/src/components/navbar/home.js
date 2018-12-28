import React, { Component } from 'react';
import MdLibraryBooks from 'react-icons/lib/md/library-books';

export class Home extends Component {
  render() {
    return (
        <div style={styles.homeStyle}>
            <p><MdLibraryBooks/> Home</p>
        </div>

    )
  }
}

const styles = {
    homeStyle: {
        float: "left",
        fontFamily: "Arial",
        color: "#666666"
    }
}

export default Home;
