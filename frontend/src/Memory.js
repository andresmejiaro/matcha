//who has seen me
// who has liked me

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css';
import React from 'react';

export class Memory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"hola": 12};
  }
  render() {
    return (
      <h1>
      "Memory"
      </h1>
    );
  }
};