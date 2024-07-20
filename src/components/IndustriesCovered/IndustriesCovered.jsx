import React from 'react';
import './IndustriesCovered.css';

const IndustriesCovered = () => {
  const industries = [
    { name: "Telecom", icon: "fas fa-phone" },
    { name: "Travel Tourism", icon: "fas fa-plane" },
    { name: "Aviation", icon: "fas fa-fighter-jet" },
    { name: "Retail", icon: "fas fa-shopping-cart" },
    { name: "Food & Beverage", icon: "fas fa-utensils" },
    { name: "Healthcare", icon: "fas fa-heartbeat" },
    { name: "Educational Institutions", icon: "fas fa-school" },
    { name: "FMCG", icon: "fas fa-box-open" },
    { name: "E-commerce", icon: "fas fa-shopping-bag" },
    { name: "Government", icon: "fas fa-building" },
    { name: "Hospitality", icon: "fas fa-concierge-bell" },
    { name: "Travel & Transport", icon: "fas fa-bus" },
    { name: "Entertainment", icon: "fas fa-music" },
    { name: "BFSI", icon: "fas fa-piggy-bank" },
  ];

  return (
    <div className="industries-covered-container">
      <div className="industries-covered-heading-container">
        <h2 className="industries-covered-heading">Industries Covered</h2>
      </div>
      <div className="industries-buttons-container">
        {industries.map((industry, index) => (
          <button 
            key={index} 
            className="industry-button"
            style={{ animationDelay: `${index * 0.2}s` }} // Sequential delay
          >
            <i className={industry.icon}></i> {industry.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IndustriesCovered;
