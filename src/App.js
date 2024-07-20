import React from 'react';
import './App.css';
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import EventOverview from './components/EventOverview/EventOverview';

import '@fortawesome/fontawesome-free/css/all.min.css';
import WillMet from './components/WillMet/WillMet';
import AttendEvent from './components/AttendEvent/AttendEvent';
import IndustriesCovered from './components/IndustriesCovered/IndustriesCovered';
import TopicHighlight from './components/TopicHighlight/TopicHighlight';
import Sponsor from './components/Sponsor/Sponsor';
import Interested from './components/Interested/Interested';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="app-container">
    <Navbar/>
     <BackgroundVideo />
     <CountdownTimer/>
     <br/>
     <br/>
     <br/>
     <br/>
     <EventOverview/>
     <WillMet/>
     <AttendEvent/>
     <IndustriesCovered/>
     <TopicHighlight/>
     <Sponsor/>
     <br/>
     <br/>
     <Contact/>
     <Interested/>
    </div>
  );
}

export default App;
