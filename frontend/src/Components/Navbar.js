import React from 'react';
import './NB.css'
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        
  <nav>
  <div className="nav-wrapper white">
    <Link to="#" className="brand-logo">instagram</Link>
    <ul id="nav-mobile" className="right ">
      <li><Link to="/Login">Login</Link></li>
      <li><Link to="/Signup">sign up</Link></li>
      <li><Link to="/Profile">profile</Link></li>
      <li><Link to="/Createpost">Createpost</Link></li>
    </ul>
  </div>
</nav>
    );
}

export default Navbar;