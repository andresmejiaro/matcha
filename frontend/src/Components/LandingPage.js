import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/styles.css';
import React from 'react';
import mainImage from '../images/main.png';
import { Link } from 'react-router-dom';

export class Landing extends React.Component {
    constructor(props) {
      super(props);
      this.state = {"hola": 12};
    }
    render() {
      return (
        
        <div className="call-to-action d-flex container-fluid justify-content-center flex-column">
          <div className="row w-100 justify-content-center mt-3">
          <img src={mainImage} alt="Desc"  style={{ width: '350px', height: 'auto' }}></img>
          <h1 className="text-center">Spark Sweet Moments</h1> 
           <div className="col-md-4 text-center">
            <Link to ="/signup">
            <div className="btn btn-light btn-lg w-auto">Sign up now</div>
            </Link>
           </div>
          </div>
        </div>
             );
    }
  };
  