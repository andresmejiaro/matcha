//Bonus: Events

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/styles.css';
import React from 'react';

export class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"hola": 12};
  }
  render() {
    return (
      <h1>
      "Events"
      </h1>
    );
  }
};