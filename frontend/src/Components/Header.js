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
import { Link, Outlet } from 'react-router-dom';
import {Nav, Navbar, Container} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Reducers/authSlice';

export const Header = () => {
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
  const dispatch = useDispatch();
  
  return (
    <div >
      <Navbar bg="dark">
        <Container>

          <Navbar.Brand as={Link} to="/" className='custom-brand'>Matcha</Navbar.Brand>
          <Navbar.Collapse id ="basic-navbar-nav">

            <Nav.Link as={Link} className="text-light" to="/profileinfo"> Profile Fill</Nav.Link> 
            <Nav.Link as={Link} className="text-light" to="/profileviewer"> Profile Viewer</Nav.Link>
          </Navbar.Collapse>

          {!isAuthenticated ?
         <Link to ="/signin"> <button className="btn btn-outline-light ml-auto">Sign In</button> </Link> :
         <Link to ="/"><button onClick={()=>dispatch(logout())} className="btn btn-outline-light ml-auto">Sign Out</button> </Link>
        }
        </Container>
      </Navbar>
    <Outlet>
    </Outlet>
    </div>
  )
}




// export class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {"hola": 12};
//   }
//   render() {
//     return (
//       <div >
//         <Navbar bg="dark">
//             <Link to="/" className="navbar-brand custom-brand">Matcha</Link>
//             <Link to="/profileinfo"> Profile Fill</Link>
//             <Link to="/profileviewer"> Profile Viewer</Link>

//             <Link to ="/signin"> <button className="btn btn-outline-light ml-auto">Sign In</button> </Link>

//         </Navbar>
//       <nav className="navbar bg-light transparent-navbar">
//           <Link to="/" className="navbar-brand custom-brand">Matcha</Link>
//           <Link to="/profileinfo"> Profile Fill</Link>
//           <Link to="/profileviewer"> Profile Viewer</Link>
          
//            <Link to ="/signin"> <button className="btn btn-outline-light ml-auto">Sign In</button> </Link>
                    
//       </nav>
//       <Outlet>
//       </Outlet>
//       </div>
//     );
//   }
// };

