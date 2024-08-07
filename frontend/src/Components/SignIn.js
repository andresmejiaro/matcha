//Username
//Password
//Sign in
// Forgot Password?

//Bonus Omniauth

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/styles.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { login } from '../Reducers/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'


export const SignIn = () =>{
  const dispatch = useDispatch();
  const isAuth = useSelector((state)=> state.auth.isAuthenticated);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    const email = event.target.email.value;
    const password = event.target.password.value;

    event.preventDefault();
    
    fetch(`/api/signin`,
      {method: 'POST',
        headers: {'Content-Type':'application/json',},
        body : JSON.stringify({email,password})
        }
    )
    .then(response => response.json())
    .then(data => {
      if(data.success){
        dispatch(login());
        navigate('/');
      }
      else {
        setError('Incorrect email or password');
      }
    }).catch(error => {
      console.log(error);
      setError('An error occured. Pleasy try again');
    })
  };
  
  return (
    <div className='container center flex-column justify-content content-center'>
    <form onSubmit={handleSubmit}>

        <h1>{isAuth}</h1>
        ({error && <p style={{color:'red'}}>{error} </p>})
        <label htmlFor="email">email:</label>
        <input type='text' className='form-control' id='email' placeholder='username' />

      
      
        <label htmlFor="password">First Name:</label>
        <input type='password' className='form-control' id='password' placeholder='password' />
        

      
    <button className='btn btn-light brn-lg -w-auto content-center' type='Submit'>Sign in</button>
    </form>
    Forgot your password <Link to="/recover">Recover</Link><br />
    Don't have an account<Link to="/signup">Sign Up </Link>
  </div>
  );

}




