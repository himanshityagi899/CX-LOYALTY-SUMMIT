import React from 'react';
import './EventOverview.css';
import Limg2 from '../../assets/Limg2.png'; // Replace with your image path

const EventOverview = () => {
  return (
    <div className="event-overview-container">
      <div className="event-overview-part">
        <img src={Limg2} alt="Event" className="event-image" />
        <br/>
        <button className="post-report-button">POST EVENT REPORT</button>
      </div>
      <div className="event-overview-part">
        <h2 className="heading">
          <span className="blue-line"></span>
          EVENT OVERVIEW
          <span className="blue-line"></span>
        </h2>
        <p className="overview-text">
          A strong customer experience, employee experience and customer loyalty program management are the hallmark of many of the world’s most successful brands – setting the bar for organizations across all industries to prioritize their CX, EX & CL strategies and deliver superior experiences across all channels. It’s no secret that over the past two years, customer expectations have evolved – making CX as one of the biggest differentiators between one’s brand and the competition. Two thirds of organizations globally now compete on customer experience alone with 87% of business leaders having identified CX as their top growth engine.
        </p>
        <p className="overview-text">
          The <strong>4th Annual CX & Loyalty Summit & Awards MENA 2024</strong> shifts focus on innovative approaches that the world’s leading organizations are deploying to manage customer interactions and maximize customer value.
        </p>
        <p className="overview-text">
          A stellar line-up featuring leading brands and organizations who have established CX, EX & Customer Loyalty at the top of their boardroom agenda will share insights into how digital experiences are transforming the way we work, deliver, transact, communicate, and live in an ever-changing world. With interactive keynote sessions, expert-led panels, and live case studies, we aim to pack value into every minute of the attendee experience, covering the topics that mean the most to the CX industry.
        </p>
      </div>
    </div>
  );
};

export default EventOverview;
