import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./footer.css";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterButtonText, setNewsletterButtonText] = useState("Subscribe");
  const [newsletterButtonActive, setNewsletterButtonActive] = useState(false);

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    setNewsletterButtonText("Sending...");

    emailjs.send(
      'service_a1zzhql',
      'template_6oi79go',
      { message: `New subscription from: ${newsletterEmail}` },
      'iPsam4sNQ_oh0_2v_'
    ).then((result) => {
      console.log(result.text);
      setNewsletterButtonText("Subscribed");
      setNewsletterButtonActive(true);
    }, (error) => {
      console.log(error.text);
      setNewsletterButtonText("Subscribe");
      setNewsletterButtonActive(false);
    });

    setNewsletterEmail("");
  };

  return (
    <>
      <section className='newsletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tuned and get the latest updates</h1>
          </div>
          <div className='right row'>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type='email'
                placeholder='Enter email address'
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type='submit' className={`primary-btn ${newsletterButtonActive ? "active" : ""}`}>
                <i className='fa fa-paper-plane'></i>
                {newsletterButtonText}
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <img src='/images/logo.webp' alt='Company Logo' className='company-logo' loading="lazy" />
            <p>We soar on Eagle's Wings.</p>
            <div className='social-icons'>
              <a href='https://www.facebook.com/profile.php?id=100095395508329' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-facebook-f icon'></i>
              </a>
              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-instagram icon'></i>
              </a>
              <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-twitter icon'></i>
              </a>
              <a href='https://www.youtube.com/@solomonayo/videos' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-youtube icon'></i>
              </a>
            </div>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href="/sa-book-store">Books</a></li>
              <li><a href="/reader-club">The Reader Club</a></li>
              <li><a href="/competition">Annual Online Competition</a></li>
              <li><a href="/blog">Blog Post</a></li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/howwe">S.A Foundation</a></li>
              <li><a href=' '>Terms & Conditions</a></li>
              <li><a href=' '>Privacy</a></li>
              <li><a href=' '>Feedbacks</a></li>
              <li><a href="/contact">Contact us</a></li>
              
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Strasbourg, France
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                foundation@solomonayo.org
              </li>
              <li><a href="/login">Admin Login</a></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved | <i className='fa fa-heart'></i> by S.A Foundation
        </p>
      </div>
      <button className='scroll-to-top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className='fa fa-arrow-up'></i>
      </button>
    </>
  );
};

export default Footer;
