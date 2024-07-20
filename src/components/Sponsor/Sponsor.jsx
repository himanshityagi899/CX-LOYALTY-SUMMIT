import React from 'react';
import './Sponsor.css';
import { FaNetworkWired, FaChalkboardTeacher, FaChartLine } from 'react-icons/fa';
import Limg4 from '../../assets/Limg4.jpeg';
import Limg5 from '../../assets/Limg5.jpeg';
import Limg6 from '../../assets/Limg6.jpeg';


const Sponsor = () => {
  return (
    <div className="sponsor-container">
      <div className="sponsor-content">
        <h2 className="sponsor-heading">WHY SPONSOR</h2>
        <p className="sponsor-paragraph">
          4th Annual CX & Loyalty Summit & Awards MENA 2024, presents the perfect opportunity for solution providers to engage with key decision makers such as CXOs, Heads of Marketing, Heads of Customer Experience, Heads of Loyalty Programs etc from diverse industries such as BFSI, Retail & E-Commerce, Telco, Hospitality, Travel & Tourism, Aviation, CPG etc to differentiate their product and put forward their value proposition in this crowded marketplace. Some of the key reasons why you should sponsor:
        </p>
        <div className="sponsor-grid">
          <div className="sponsor-info">
            <div className="sponsor-card">
              <FaNetworkWired className="sponsor-icon" />
              <h3 className="sponsor-card-title">NETWORK & GENERATE LEADS</h3>
            </div>
            <div className="sponsor-card">
              <FaChalkboardTeacher className="sponsor-icon" />
              <h3 className="sponsor-card-title">DEMONSTRATE THOUGHT LEADERSHIP</h3>
            </div>
            <div className="sponsor-card">
              <FaChartLine className="sponsor-icon" />
              <h3 className="sponsor-card-title">BRAND POSITIONING</h3>
            </div>
          </div>
          <div className="sponsor-video">
            <iframe
              src="https://www.youtube.com/embed/svEqRwTnh2o?autoplay=1&mute=1&loop=1&playlist=svEqRwTnh2o"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Sponsor Video"
            ></iframe>
          </div>
        </div>
        <div className="sponsor-images">
          <img src={Limg4} alt="Image 1" />
          <img src={Limg5} alt="Image 2" />
          <img src={Limg6} alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
