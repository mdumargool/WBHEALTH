import React from 'react';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <ul className='navlist'>
        <li className='clockBox'>Sunday May 24 2025</li>
        &nbsp;|
        <li><a href="">CHECK MAIL</a></li>
        &nbsp;|
        <li><a href="">RTI</a></li>
        &nbsp;|
        <li><a href="">GALLERY</a></li>
        &nbsp;|
        <li><a href="">CONTACT US</a></li>
        &nbsp;|
        <li><a href="">SITMAP</a></li>
        &nbsp;|
        <li><a href="">LOGIN</a></li>
      </ul>
    </div>
  );
};

export default Navbar;