import React from 'react';
import './Contact.css';
import Limg2 from '../../assets/Limg2.png'; // Replace with actual path

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-left">
          <h2>Are You Interested to Sponsor Our Event?</h2>
          <button className="contact-button">CONTACT US</button>
        </div>
        <div className="contact-right">
          <img src={Limg2} alt="Contact" className="contact-image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
