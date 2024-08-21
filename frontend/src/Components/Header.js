//logout

// Notifications 
// Get a Like
// New Message
// New View
// A match
// A unmatch

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/styles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {Nav, Navbar, Container,} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Slices/authSlice';

export const Header = () => {
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
  const dispatch = useDispatch();
  
  return (
      <Navbar bg="dark" expand="lg" className="w-100">
          <Container fluid>

            <Navbar.Brand as={Link} to="/" className='custom-brand'>Matcha</Navbar.Brand>
              <Nav className='mr-auto'>

              <Nav.Link as={Link} className="text-light" to="/profileinfo"> Profile Fill</Nav.Link> 
              <Nav.Link as={Link} className="text-light" to="/profileviewer"> Profile Viewer</Nav.Link>
              </Nav>
                {!isAuthenticated ?
              <Link to ="/signin"> <button className="btn btn-outline-light ml-auto">Sign In</button> </Link> :
              <Link to ="/"><button onClick={()=>dispatch(logout())} className="btn btn-outline-light ml-auto">Sign Out</button> </Link>
            }
            </Container>
       </Navbar>
  )
}



