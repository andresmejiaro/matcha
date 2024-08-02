//Username
//Password
//Sign in
// Forgot Password?

//Bonus Omniauth

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/styles.css';
import React from 'react';
import { Link } from 'react-router-dom';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"hola": 12};
  }
  render() {
    return (
      <div className='container center flex-column justify-content content-center'>
      <form onSubmit={this.handleSubmit}>

      
          <label for="username">Username:</label>
          <input type='text' className='form-control' id='username' placeholder='username' />

        
        
          <label for="password">First Name:</label>
          <input type='password' className='form-control' id='password' placeholder='password' />
          

        
      <button className='btn btn-light brn-lg -w-auto content-center' type='Submit'>Sign in</button>
      </form>
      Forgot your password <Link to="/recover">Recover</Link><br />
      Don't have an account<Link to="/signup">Sign Up </Link>
    </div>
    );
  }
};