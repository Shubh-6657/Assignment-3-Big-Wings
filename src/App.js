import React, { useEffect } from 'react';
import img1 from './images/Logo.png';
import ContactForm from './ContactForm';
import backgroundVideo from './background.mp4';
import './App.css'; 

function App() {
  useEffect(() => {
    const videoElement = document.getElementById('video-player');

    if (videoElement) {
      videoElement.style.position = 'fixed';
      videoElement.style.top = '0';
      videoElement.style.left = '0';
      videoElement.style.width = '100%';
      videoElement.style.height = '100%';
      videoElement.style.objectFit = 'cover';
      videoElement.style.zIndex = '-1';
    }
  }, []);

  const goBackStyle = {
    textDecoration: 'underline', 
    color: 'white', 
    cursor: 'pointer', 
  };

  return (
    <div className="App">
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        id="video-player"
      ></video>

      <div className="content">
        <img
          src={img1}
          alt=""
          className="center-image"
          style={{
            maxWidth: 300,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '50px',
            marginBottom: '20px',
            width: '50%',
          }}
        />
        <ContactForm videoBackground={true} />
      </div>
      <h5 style={{ textAlign: 'center' }}>
        <span style={goBackStyle}>&lt;&lt; Go Back</span>
      </h5>
    </div>
  );
}

export default App;
