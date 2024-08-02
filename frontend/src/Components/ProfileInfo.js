//Gender
//Interested in
//Bio
//interest tags
//Pictures (5)

// Bonus: Import from social media

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/styles.css';
import React from 'react';

export class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"hola": 12};
  }
  render() {
    return (
      <h1>
      "ProfileInfo"
      </h1>
    );
  }
};