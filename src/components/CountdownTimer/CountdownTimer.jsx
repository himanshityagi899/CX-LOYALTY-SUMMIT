import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: 108,
    hours: 13,
    minutes: 40,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate new time
      setTime(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              if (days === 0) {
                clearInterval(interval);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
              days -= 1;
              hours = 23;
              minutes = 59;
              seconds = 59;
            } else {
              hours -= 1;
              minutes = 59;
              seconds = 59;
            }
          } else {
            minutes -= 1;
            seconds = 59;
          }
        } else {
          seconds -= 1;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-timer-container">
      <div className="countdown-timer">
        <div className="time-unit">
          <div className="time-value">{time.days}</div>
          <div className="time-label">Days</div>
        </div>
        <div className="separator">:</div>
        <div className="time-unit">
          <div className="time-value">{time.hours}</div>
          <div className="time-label">Hours</div>
        </div>
        <div className="separator">:</div>
        <div className="time-unit">
          <div className="time-value">{time.minutes}</div>
          <div className="time-label">Minutes</div>
        </div>
        <div className="separator">:</div>
        <div className="time-unit">
          <div className="time-value">{time.seconds}</div>
          <div className="time-label">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
