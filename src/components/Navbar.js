import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faPoo } from "@fortawesome/free-solid-svg-icons";
const  Navbar=()=> {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
  <div className="container-fluid ">
  <Link className="navbar-brand " to='/'><FontAwesomeIcon icon={faPoo}  size="2xl" style={{color:'#c9aa3b'}}/></Link>

  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
    </button>

</div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav text-center  " >
    <li className="nav-item mx-5">
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item mx-5">
      <Link className="nav-link" to="/service">Service</Link>
    </li>
  
    <li className="nav-item mx-5">
      <Link className="nav-link" to='/products'>Products</Link>
    </li>
   
    <li className="nav-item mx-5">
      <Link className="nav-link" to='/weather'>Weather</Link>
    </li>
  </ul>
  <div className="mx-5 text-center">
      <button className=" btn btn-outline-success my-2 my-sm-0 ">Signup</button>
    </div>
  </div>
 
</nav>
  );
}

export default Navbar;
