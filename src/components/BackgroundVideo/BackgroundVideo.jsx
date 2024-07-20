import React, { useEffect, useRef } from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player(videoRef.current, {
        videoId: 'svEqRwTnh2o', // The video ID from the URL
        playerVars: {
          autoplay: 1,
          controls: 0,
          start: 12, // Start video at 12 seconds
          end: 30,
          mute: 1, // Mute the video
          rel: 0,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              player.seekTo(12); // Restart video at 12 seconds
            }
          },
        },
      });
    };

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      onYouTubeIframeAPIReady();
    }
  }, []);

  return (
    <div className="background-video-container">
      <div ref={videoRef} className="background-video"></div>
      <div className="overlay">
        <p className="overlay-text">
          DRIVING REVENUE | BUILDING RELATIONS<br />
          <strong>THROUGH CX TRANSFORMATION &</strong><br />
          <strong>INCREASED BRAND LOYALTY</strong>
        </p>
        <div className="button-container">
          <button className="info-button">
            <i className="fas fa-calendar-alt"></i> 5 - 6 November 2024
          </button>
          <button className="info-button">
            <i className="fas fa-map-marker-alt"></i> DUBAI, UAE
          </button>
        </div>
        <button className="register-button">
          <i className="fas fa-users"></i> Registration
        </button>
      </div>
    </div>
  );
};

export default BackgroundVideo;
