//logout

// Notifications 
// Get a Like
// New Message
// New View
// A match
// A unmatch

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styles.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"hola": 12};
  }
  render() {
    return (
      <div>

      <nav className="navbar bg-light transparent-navbar">
          <Link to="/" className="navbar-brand custom-brand">Matcha</Link>
          <Link to="/profileinfo"> Profile Fill</Link>
          <Link to="/profileviewer"> Profile Viewer</Link>
          
           <Link to ="/signin"> <button className="btn btn-outline-light ml-auto">Sign In</button> </Link>
                    
      </nav>
      <Outlet>
      </Outlet>
      </div>
    );
  }
};

