import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import './style.css'
const Navbar = () => {
const [navbar,setNavbar] = useState([]);
useEffect(()=>{
  axios.get('/js/Data.json').then(res=>{setNavbar(res.data.navbar);})},[]);
    return ( 
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light ">
  <div className="container-fluid flex-column  ">
          <div className=" collapse navbar-collapse flex-grow-1 w-100 "id="navbarDesktop">
    <Link className="navbar-brand" to="/">
      <img src="images/ChatGPT Image Aug 11, 2025, 06_04_45 AM.png" style={{width: "4rem"}} alt="Logo"/>
    </Link>
         <ul className="navbar-nav mt-1 me-auto ">
    {navbar.map((item)=>
            <li className="nav-item mx-2"key={item.id}><Link className="nav-link header-address active" to={item.path}>{item.nameSection}</Link> </li>
          )}
          </ul>
          <form className="d-flex flex-grow-1 me-lg-4" role="search">
          <input className="form-control me-2 flex-grow-1" type="search" placeholder="Search"/>
          <button className="btn btn-outline-success" type="button">Search</button>
         </form>
        </div>
<div className="d-flex align-items-center w-100 d-lg-none  "> 
    <Link className="navbar-brand " to="/">
      <img src="images/ChatGPT Image Aug 11, 2025, 06_04_45 AM.png" style={{width: "4rem"}}/>
    </Link>
    <form className="d-flex  flex-grow-1 " role="search">
              <input className="form-control me-2 " type="search" placeholder="Search"aria-label="Search"/>
          <button className="btn btn-outline-success " type="button">Search</button>
    </form>
    <button className="navbar-toggler  ms-3 " type="button" data-bs-toggle="collapse" data-bs-target="#mohamed"aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse mx-3 " id="mohamed">
   <div className="d-lg-none py-3">
         <h5 className=" px-3" >Menu</h5>
      <ul className="navbar-nav menu-list px-3">
          {navbar.map((item)=>
        <li className="nav-item"key={item.id}>
          <Link className="nav-link  header-address active" to={item.path} >{item.nameSection}</Link>
        </li>

)}
      </ul>
       </div>
    </div>
  </div>
</nav>
    </div>
    );
};
export default Navbar;