import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='container'>
        <img src='/images/reader.club.webp' alt='reader club' className='about-image' />
        <div className='col-2'>
          <h2>About Us</h2>
          <span className='line'></span>
          <p>In S.A., we are committed to enhancing lives, building leaders, and ensuring individuals fulfill their destiny. With Christ at the center of all we do, we are also passionate about restoring the reading culture in our generation, through the annual online reading competition. We’re committed to helping individuals discover themselves and fulfill their God-given purpose. So, if you are passionate about growth in all facets of life, then you are in the right place.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
