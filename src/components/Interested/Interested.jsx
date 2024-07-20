import React from 'react';
import './Interested.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Limg9 from '../../assets/Limg9.png'; // Replace with actual paths
import Limg8 from '../../assets/Limg8.png'; // Replace with actual paths

const Interested = () => {
  return (
    <div className="interested-container">
      <h2 className="interested-heading"></h2>
      <div className="interested-content">
        <img src={Limg9} alt="Event" />
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt className="contact-icon phone-icon" /> <span className="phone-number">+97142434677/88</span></p>
          <p><FaEnvelope className="contact-icon email-icon" /> <span className="email-address">info@verve-management.com</span></p>
        </div>
        <img src={Limg8} alt="Event" />
      </div>
    </div>
  );
};

export default Interested;
