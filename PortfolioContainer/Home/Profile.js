import React from "react";
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className='colz-icon'>
                <a href="https://facebook.com">
                <i className="fa fa-facebook-square"></i>
                </a>
                <a href="https://google.com">
                <i className="fa fa-google-plus-square"></i>
                </a>
                <a href="https://instagram.com">
                <i className="fa fa-instagram"></i>
                </a>
                <a href="https://youtube.com">
                <i className="fa fa-youtube-square"></i>
                </a>
                <a href="https://twitter.com">
                <i className="fa fa-twitter"></i>
                </a>
              </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Greyson</span>
            </span>
          </div>
          <div className='profile-details0-role'> 
              <span className='primary-text'>
                  {" "}
                  <h1>
                    {" "}
                    <Typical 
                    loop={Infinity}
                    steps={[
                        "Enthusiastic Dev 😎",
                        1000,
                        "Full Stack Developer 💻",
                        1000,
                        "React / Native ⚛️ ",
                        1000,
                        "Three.js 🌌",
                        1000,
                        "Web 3.0 🚀",
                        1000,
                    ]}    
                    />
                  </h1>
                  <span className='profile-role-tagline'>
                    Building applications with front and back end operations.
                  </span>
              </span>
          </div>
          <div className='profile-options'>
              <button className='btn primary-btn'>
                {""}
                Hire Me{" "}
              </button>
              <a href='exampleresume.pdf' download='Greyson exampleresume.pdf'>
                    <button className='btn highlighted-btn'>Get Resume</button>
              </a>
          </div>
          <div className='profile-picture'>
              <div className='profile-picture-background'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
