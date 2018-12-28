import React, { Component } from 'react';
import IoIosBellOutline from 'react-icons/lib/io/ios-bell-outline';

export class Notification extends Component {
  render() {
    return (
        <div style={styles.homeStyle}>
            <p><IoIosBellOutline/> Notification</p>
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

export default Notification;
