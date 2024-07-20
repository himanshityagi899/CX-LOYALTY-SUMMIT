import React from 'react';
import './WillMet.css';

const WillMet = () => {
  return (
    <div className="willmet-container">
      <h2 className="willmet-heading">WHO WILL MEET</h2>
      <div className="willmet-content">
        <div className="willmet-texts">
          {["CEOs/CIOs", "Chief Marketing Officers", "Heads of Customer Experience & UX", "Heads of Digital Transformation", "Heads of Customer Loyalty & Brand Loyalty", "CXOs, VPs, Directors", "Heads of Customer Insights & Analytics", "Heads of Customer Value & Loyalty Partnerships", "Heads of Rewards and Loyalty"].map((text, index) => (
            <div className="willmet-rectangle" key={index}>
              <i className="fas fa-check-circle"></i> {text}
            </div>
          ))}
        </div>
        <img
          src="https://cxloyaltymena.com/wp-content/uploads/2024/05/g31-1024x683.jpg"
          alt="Meeting"
          className="willmet-image"
        />
      </div>
    </div>
  );
};

export default WillMet;
