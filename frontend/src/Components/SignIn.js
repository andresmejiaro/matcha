//Username
//Password
//Sign in
// Forgot Password?

//Bonus Omniauth

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/styles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../Reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';


export const SignIn = () =>{
  const dispatch = useDispatch();
  const isAuth = useSelector((state)=> state.auth.isAuthenticated);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login())
  }
  
  return (
    <div className='container center flex-column justify-content content-center'>
    <form onSubmit={handleSubmit}>
    <h1>dadaf {isAuth ? "Yes": "No"} afadfa</h1>

    
        <label htmlFor="username">Username:</label>
        <input type='text' className='form-control' id='username' placeholder='username' />

      
      
        <label htmlFor="password">First Name:</label>
        <input type='password' className='form-control' id='password' placeholder='password' />
        

      
    <button className='btn btn-light brn-lg -w-auto content-center' type='Submit'>Sign in</button>
    </form>
    Forgot your password <Link to="/recover">Recover</Link><br />
    Don't have an account<Link to="/signup">Sign Up </Link>
  </div>
  );

}




