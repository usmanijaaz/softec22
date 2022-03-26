import React, { Component, useState} from 'react';
import {Logo} from './doc-image.png'
import { FormControl,Container,Row,Col } from 'react-bootstrap';

import './App.css';

function NavbarComponent() {

    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')

    return (
        <div>
           <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <h2 className='text-white'>Doctor App</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto">
        <li class="nav-item ">
            <div class="dropdown">
                <button className="nav-link btn btn-success me-2 ms-2 mb-2 p-2" href="#">Login</button> 
                    <div class="dropdown-content text-start mt-0 pt-0 my-2" >
                            <FormControl
                                type="text"
                                placeholder='Phone number'
                                onChange={(event)=>{
                                    setusername(event.target.value);
                                }}
                        ></FormControl>
                        <FormControl
                                type="text"
                                placeholder='Password'
                                onChange={(event)=>{
                                    setpassword(event.target.value);
                                }}
                        ></FormControl>
                        <button className="nav-link border-2 btn btn-success-sm bg-light text-dark me-2 ms-2 mb-2 p-2 my-2" href="#">Login</button>
                     </div>        
            </div>    
        </li>
        <li class="nav-item ">
            <div class="dropdown">
                <button className="nav-link btn btn-danger me-2 ms-2 mb-2 p-2" href="#">Sign Up</button> 
                    <div class="dropdown-content dropdown-menu text-start mt-0 pt-0 my-2" >
                            <FormControl
                                className='dropdown-item'
                                type="text"
                                placeholder='Phone number'
                                onChange={(event)=>{
                                    setusername(event.target.value);
                                }}
                        ></FormControl>
                        <FormControl
                                className='dropdown-item'
                                type="text"
                                placeholder='Full Name'
                                onChange={(event)=>{
                                    setpassword(event.target.value);
                                }}
                        ></FormControl>
                        <FormControl
                                className='dropdown-item'
                                type="text"
                                placeholder='Password'
                                onChange={(event)=>{
                                    setpassword(event.target.value);
                                }}
                        ></FormControl>
                        <button className="nav-link border-2 btn btn-success-sm bg-light text-dark me-2 ms-2 mb-2 p-2 my-2" href="#">Login</button>
                     </div>        
            </div>    
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
      );
}

export default NavbarComponent;