//Username
//Password
//Sign in
// Forgot Password?

//Bonus Omniauth

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css';
import React from 'react';

export class Recover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"hola": 12};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = () => {}

  render() {
    return (
      <div className='container center flex-column justify-content content-center'>
      Insert your email a password recovery link will be sent to that address:
      <form onSubmit={this.handleSubmit}>

      
          <label htmlFor="username">Username:</label>
          <input type="text" className="form-control" id="username" placeholder="username" />
        
      <button className='btn btn-light brn-lg -w-auto content-center' type='Submit'>Sign in</button>
      </form>
    </div>
    );
  }
}