//Email
//username
//last name
// First name

//Bonus: Omniauth

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/styles.css';
import React, {useState} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkcreationmail, couldNotCreate } from '../Reducers/signupSlice';


export const SignUp = () =>{
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  
  const checkInputs = (email, password, confirm_password) =>{
    return true;
  }
  
  const handleSubmit = (event) =>{
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirm_password = event.target.confirm_password.value;
    event.preventDefault();

    
    if (checkInputs(email,password,confirm_password)){
    fetch('/api/signup',
      {method: 'POST',
        headers: {'Content-Type':'application/json',},
        body: JSON.stringify({email,password})

      }
    )
    .then(res =>res.json())
    .then(data =>{
      if (data.success){
      dispatch(checkcreationmail());}
      else {
        dispatch(couldNotCreate(data.error));
      }
    })
    .catch(error => {
      console.log(error);
      setError('An error occured. Please try again')
    })
    }
  }

  return (
    <Container fluid>
      <Row>
        <Form onSubmit={handleSubmit}>
        <Col>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="user@mail.com"/>    
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="*********"/>    
        </Form.Group>
        <Form.Group controlId="confirm_password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="*********"/>    
        </Form.Group>
        </Col>
        <Col>
        <Button variant="light" type="submit">Submit</Button>
        </Col>
        </Form>
      Already have an account?<Link to="/signin">Sign In </Link>
      </Row>
      {error && <p style={{color:'red'}}>{error} </p>}
    </Container>
  )
} 




// export class SignUp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {"hola": 12};
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(){

    

//   }

//   render() {
//     return (
//       <div className='container center flex-column justify-content content-center'>
//         <form onSubmit={this.handleSubmit}>

//         <div className='row'>
//           <div className='col-md-6'>
//             <label for="email">Email:</label>
//             <input type='text' className='form-control' id='email' placeholder='email' />
//             <label for="username">Username:</label>
//             <input type='text' className='form-control' id='username' placeholder='username' />

//           </div>
//           <div className='col-md-6'>
//             <label for="firstname">First Name:</label>
//             <input type='text' className='form-control' id='firstname' placeholder='firstname' />
//             <label for="lastname">Last Name:</label>
//             <input type='text' className='form-control' id='lastname' placeholder='lastname' />

//           </div>
//         </div>
//         <button className='btn btn-light brn-lg -w-auto content-center' type='Submit'>Submit</button>
//         </form>
//       </div>
//     );
//   }
// };