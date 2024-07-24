// src/components/common/header/Head.jsx
import React from "react";
import "./header.css";

const Head = () => {
  return (
    <section className='head'>
      <div className='container flexSB'>
        <div className='logo'>
          <img src='/images/n-logo.webp' alt='Company Logo' className='company-logo' loading="lazy" />
        </div>
        <div className='social'>
          <a href='https://www.facebook.com/profile.php?id=100095395508329' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook-f icon'></i>
          </a>
          <a href='https://www.youtube.com/@solomonayo/videos' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube icon'></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Head;
