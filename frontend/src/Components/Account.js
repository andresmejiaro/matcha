//Edit info 
//last name
//first name

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/styles.css';
import React from 'react';

export class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"hola": 12};
  }
  render() {
    return (
      <h1>
        "Account"
      </h1>
    );
  }
};