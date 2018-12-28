import React, { Component } from 'react';
import TiPencil from 'react-icons/lib/ti/pencil';

export class Answer extends Component {
  render() {
    return (
        <div style={styles.homeStyle}>
            <p><TiPencil/> Answer</p>
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

export default Answer;
