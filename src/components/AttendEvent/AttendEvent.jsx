import React from 'react';
import './AttendEvent.css';

const AttendEvent = () => {
  return (
    <div className="attend-event-container">
      <div className="attend-event-content">
        <div className="attend-event-text">
          <h2 className="attend-event-heading">
            <span className="blue-lines lefts"></span>
            WHY SHOULD YOU ATTEND
            <span className="blue-lines rights"></span>
          </h2>
          <p className="attend-event-paragraph">
            Join us for the highly anticipated 4th Edition CX & Loyalty Summit KSA 2024, where industry leaders from diverse sectors converge to explore the latest trends in CX, EX, Loyalty, Customer Service, Digital Transformation, and more. This premier event will delve into cutting-edge CX strategies, emerging technologies such as Digitalization and Automation, and best practices designed to elevate your organization’s CX, EX, & CL initiatives to new heights. Prepare to be immersed in a dynamic agenda featuring insightful presentations, engaging panel discussions, and keynote addresses delivered by renowned global experts, panellists, and moderators.
          </p>
          <p className="attend-event-paragraph">
            Connect with industry specialists from around the world, forge valuable partnerships, and gain invaluable insights through networking opportunities and knowledge-sharing sessions.
          </p>
        </div>
        <div className="attend-event-image-container">
          <img src="https://cxloyaltymena.com/wp-content/uploads/2024/05/g4-1024x683.jpg" alt="Event" className="attend-event-image" />
          <div className="image-animations">
            <div className="circle top-left"></div>
            <div className="circle top-right"></div>
            <div className="circle bottom-left"></div>
            <div className="circle bottom-right"></div>
          </div>
        </div>
      </div>
      <p className="attend-event-full-text">
        At the 4th Edition CX & Loyalty Summit KSA 2024, discover innovative approaches employed by leading organizations to enhance customer interactions and maximize customer value. If you’re ready to drive innovation and join the ranks of industry trailblazers, don’t miss out! Register today to secure your spot and unlock a world of possibilities. The CXS Summit brings together the biggest names in customer experience and provides them with leading solutions in an environment conducive to forging long term business partnerships.
      </p>
      <ul className="attend-event-list">
        <li><span className="bullet-point"></span>Gain valuable perspectives from renowned brands who prioritize CX, EX, and Customer Loyalty.</li>
        <li><span className="bullet-point"></span>Participate in keynote sessions, expert-led panels, and live case studies designed to pack a punch.</li>
        <li><span className="bullet-point"></span>Leave the summit equipped with practical strategies to elevate your customer experience and loyalty programs.</li>
        <li><span className="bullet-point"></span>This summit focuses on the most critical topics shaping the CX industry, ensuring you receive the maximum value from your attendance.</li>
        <li><span className="bullet-point"></span>Expand your network and enhance peer-to-peer learning with a larger audience and a broader reach of attendees.</li>
        <li><span className="bullet-point"></span>Consult industry experts and get your toughest questions answered in-person.</li>
        <li><span className="bullet-point"></span>Connect and build relationships with peers who have similar interests and career objectives using AI matchmaking tools and filters.</li>
        <li><span className="bullet-point"></span>Enjoy on-demand speaking sessions and content that can be viewed anytime, anywhere.</li>
      </ul>
    </div>
  );
};

export default AttendEvent;
