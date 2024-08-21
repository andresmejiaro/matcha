//Username
//Password
//Sign in
// Forgot Password?

//Bonus Omniauth

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/styles.css';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { login } from '../Slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {Row, Container, Col, Form, Button} from 'react-bootstrap'
import { wrongCredential, resetSignin, noResponse } from '../Slices/signinSlice';
import { signInMW } from '../Middleware/signInMW';

export const SignIn = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signinState = useSelector((state) => state.signin)
  

  const handleSubmit = (event) => {
    const inputs = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    
    event.preventDefault();
    
    dispatch(signInMW(inputs))
    // fetch(`/api/signin`,
    //   {method: 'POST',
    //     headers: {'Content-Type':'application/json',},
    //     body : JSON.stringify(inputs)
    //     }
    // )
    // .then(response => response.json())
    // .then((data) => {
    //   console.log(data);
    //   if(data.success){
    //     dispatch(login({"username":inputs.username}));
    //     navigate('/');
    //   }
    //   else {
    //     dispatch(wrongCredential());
    //   }
    // }).catch(error => {
    //   dispatch(noResponse())
      
    // })
  };

  useEffect(()=>{
    return ()=>{
      dispatch(resetSignin());
    }
  }, [dispatch]);
  
  return (
    <Container fluid>
      <Row>
      <Col></Col>
      <Col className='text-center text-muted justify-content'>
      <Form onSubmit = {handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label> Username</Form.Label>
          <Form.Control type="text" placeholder="username" required />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label> Username</Form.Label>
          <Form.Control type="password" placeholder="*********" required />
        </Form.Group>
      <Button variant="light" type="submit">
              Submit
      </Button>
      </Form>
      
      {signinState.tried && <p style={{color:'red'}}> {signinState.error} </p>}
      Forgot your password <Link to="/recover">Recover</Link><br />
      Don't have an account <Link to="/signup">Sign Up </Link>
      </Col>
        
    <Col></Col>
      </Row>

    </Container>
  );

}




