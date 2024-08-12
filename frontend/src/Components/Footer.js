// Chats
// Legal?

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/styles.css';
import React from 'react';
import { Navbar} from "react-bootstrap";
//import {Nav, Container, Row, Col} from "react-bootstrap";
//import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export const Footer = () =>{
  const state = useSelector((state)=>state);
  
  return (
    <Navbar bg="dark"  min-height="100vh" margin-top="auto" className='text-light'>
      {JSON.stringify(state)}
    </Navbar>
  ) 
}


