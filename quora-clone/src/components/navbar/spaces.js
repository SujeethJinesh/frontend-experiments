import React, { Component } from 'react';
import MdPeople from 'react-icons/lib/md/people';

export class Spaces extends Component {
  render() {
    return (
        <div style={styles.homeStyle}>
            <p><MdPeople/> Spaces</p>
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

export default Spaces;
