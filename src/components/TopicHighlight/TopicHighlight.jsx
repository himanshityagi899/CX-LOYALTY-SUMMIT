import React, { useState, useRef, useEffect } from 'react';
import './TopicHighlight.css';
import { FaChevronDown } from 'react-icons/fa';

const topicsLeft = [
  { title: 'Corporate Culture Focus', content: 'Top tips to successfully spearhead Customer Experience Transformation internally.' },
  { title: 'Brand communities driving Loyalty, Retention & Advocacy', content: 'How to transform your loyal customers to brand advocates' },
  { title: 'From Loyal Customers to Brand Advocates', content: 'Harnessing the power of brand communities to foster loyalty, retention, and advocacy among customers.' },
  { title: 'AI Integration for Enhanced Customer Experiences', content: 'Unlocking the potential of artificial intelligence (AI) to deliver personalized and predictive customer experiences.' },
  { title: 'Achieving Hyper Personalization in CX', content: 'Strategies for delivering personalized experiences that exceed customer expectations and drive transformation.' },
  { title: 'Retention Strategies of Exceptional Brands', content: 'Unveiling the secrets behind how top brands retain customers and cultivate loyalty in a competitive landscape.' },
  { title: 'Balancing CX and Operational Excellence', content: 'Innovative marketing techniques to boost brand awareness.' },
  { title: 'Multichannel Excellence', content: 'Implementing sustainable practices in business operations.' },
];

const topicsRight = [
  { title: 'Healthcare CX: Enhancing Patient Satisfaction & Loyalty', content: 'The importance of corporate social responsibility.' },
  { title: 'Customer Loyalty', content: 'Building and maintaining customer loyalty programs.' },
  { title: 'Data Analytics', content: 'Leveraging data analytics for business insights.' },
  { title: 'Aligning Multi-Channel Experience with Brand Promise', content: 'Trends and strategies in the e-commerce industry.' },
  { title: 'Financial Management', content: 'Best practices in financial management and planning.' },
  { title: 'Social media for Brand Perception and CX', content: 'Innovations in human resource management.' },
  { title: 'Advancements in Customer Analytics', content: 'Latest trends in technology affecting businesses.' },
  { title: 'Measuring the Impact of Loyalty Programs', content: 'Building a positive workplace culture.' },
];

const TopicHighlight = () => {
  const [expandedIndexLeft, setExpandedIndexLeft] = useState(null);
  const [expandedIndexRight, setExpandedIndexRight] = useState(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleExpandLeft = (index) => {
    setExpandedIndexLeft(expandedIndexLeft === index ? null : index);
  };

  const toggleExpandRight = (index) => {
    setExpandedIndexRight(expandedIndexRight === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`topic-highlight-container ${isVisible ? 'in-view' : ''}`}>
      <h2 className="topic-highlight-heading">TOPIC HIGHLIGHTS</h2>
      <div className="topics-container">
        <div className="topics-column">
          {topicsLeft.map((topic, index) => (
            <div
              key={index}
              className={`topic-card ${expandedIndexLeft === index ? 'expanded' : ''}`}
              onClick={() => toggleExpandLeft(index)}
            >
              <div className="topic-card-header">
                <span>{topic.title}</span>
                <FaChevronDown className={`dropdown-icon ${expandedIndexLeft === index ? 'expanded' : ''}`} />
              </div>
              {expandedIndexLeft === index && (
                <div className="topic-card-content">
                  {topic.content}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="topics-column">
          {topicsRight.map((topic, index) => (
            <div
              key={index}
              className={`topic-card ${expandedIndexRight === index ? 'expanded' : ''}`}
              onClick={() => toggleExpandRight(index)}
            >
              <div className="topic-card-header">
                <span>{topic.title}</span>
                <FaChevronDown className={`dropdown-icon ${expandedIndexRight === index ? 'expanded' : ''}`} />
              </div>
              {expandedIndexRight === index && (
                <div className="topic-card-content">
                  {topic.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicHighlight;
