//Realtime chat
// colored bubbles

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css';
import React from 'react';

export class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"hola": 12};
  }
  render() {
    return (
      <h1>
      "Chat"
      </h1>
    );
  }
};