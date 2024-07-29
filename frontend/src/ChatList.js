//List of matched users
//Preview of the last line
//Dot on new messages
//Sorted by recent

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css';
import React from 'react';

export class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"hola": 12};
  }
  render() {
    return (
      <h1>
      "ChatList"
      </h1>
    );
  }
};