//Email
//username
//last name
// First name

//Bonus: Omniauth

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css';
import React from 'react';

 


export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"hola": 12};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){

  }

  render() {
    return (
      <div className='container center flex-column justify-content content-center'>
        <form onSubmit={this.handleSubmit}>

        <div className='row'>
          <div className='col-md-6'>
            <label for="email">Email:</label>
            <input type='text' className='form-control' id='email' placeholder='email' />
            <label for="username">Username:</label>
            <input type='text' className='form-control' id='username' placeholder='username' />

          </div>
          <div className='col-md-6'>
            <label for="firstname">First Name:</label>
            <input type='text' className='form-control' id='firstname' placeholder='firstname' />
            <label for="lastname">Last Name:</label>
            <input type='text' className='form-control' id='lastname' placeholder='lastname' />

          </div>
        </div>
        <button className='btn btn-light brn-lg -w-auto content-center' type='Submit'>Submit</button>
        </form>
      </div>
    );
  }
};