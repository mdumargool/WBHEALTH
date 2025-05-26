import React, { useEffect, useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(timer); 
  }, []);

  const formattedDateTime = currentTime.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div>
      <ul className='navlist'>
        <li className='clockBox'>{formattedDateTime.toUpperCase()}</li>
        <li className='vertical-bar'>|</li>
        <li><a href="#">CHECK MAIL</a></li>
        <li className='vertical-bar'>|</li>
        <li><a href="#">RTI</a></li>
        <li className='vertical-bar'>|</li>
        <li><a href="#">GALLERY</a></li>
        <li className='vertical-bar'>|</li>
        <li><a href="#">CONTACT US</a></li>
        <li className='vertical-bar'>|</li>
        <li><a href="#">SITEMAP</a></li>
        <li className='vertical-bar'>|</li>
        <li><a href="#">LOGIN</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
