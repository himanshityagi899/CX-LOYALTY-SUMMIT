import React from 'react';
import './Navbar.css';
import Limg9 from '../../assets/Limg9.png'; // Replace with your actual logo path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={Limg9} alt="Logo" className="navbar-logo" />
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="#sponsor">Sponsor</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#awards">Awards</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#registration" className="navbar-button">Registration</a>
      </div>
    </nav>
  );
};

export default Navbar;
