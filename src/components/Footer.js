import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import Logo from '../images/icon/Logo.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="py-4" style={{background:'#EDEFEE'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className='logo'>
              <img src={Logo} alt='Little Lemon' />
            </div>
          </div>

          <div className="col-md-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/reservation">Reserve a Table</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/order-online">Order Online</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>

         
          <div className="col-md-3">
            <h5>Contact info</h5>
            <ul className="list-unstyled">
              <li><Link to='/about'>Chicago</Link></li>
              <li><Link to='/about'>+123(0) 246 386 799</Link></li>
              <li><Link to='/about'>info@littlelemon.com</Link></li>
              
            </ul>
          </div>


          <div className="col-md-3">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/your-facebook-url">
                  <FontAwesomeIcon icon={faFacebookSquare} className="fa-2x social-icon" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/your-twitter-url">
                  <FontAwesomeIcon icon={faTwitterSquare} className="fa-2x social-icon" />
                </a>
              </li>
              {/* Add more social media links and icons as needed */}
            </ul>
          </div>
       
        </div>
      </div>
    </footer>
  );
}

export default Footer;
