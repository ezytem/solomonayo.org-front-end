import React, { useState } from "react";
import Back from "../common/back/Back";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [buttonText, setButtonText] = useState("SEND MESSAGE");
  const [buttonActive, setButtonActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonText("Sending...");

    emailjs.sendForm(
      'service_a1zzhql', 
      'template_6oi79go', 
      event.target, 
      'iPsam4sNQ_oh0_2v_' // Updated Public Key
    ).then((result) => {
      console.log(result.text);
      setButtonText("Thanks");
      setButtonActive(true);
    }, (error) => {
      console.log(error.text);
      setButtonText("SEND MESSAGE");
      setButtonActive(false);
    });

    event.target.reset();
  };

  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4157721.0080569376!2d14.058324317883804!3d-1.2860126351475875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x101c6875b3c21c65%3A0x9f5ed99b8c9f08b3!2sAfrica!5e0!3m2!1sen!2sus!4v1655235615693!5m2!1sen!2sus';

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              src={map}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>For inquiries, reach out to Solomon Ayo personally:</p>

            <div className="items grid2">
              <div className="box">
                <h4>FACEBOOK:</h4>
                <a href="https://www.facebook.com/profile.php?id=100095395508329" target="_blank" rel="noopener noreferrer">
                  Solomon Ayo Official
                </a>
              </div>
              <div className="box">
                <h4>YOUTUBE:</h4>
                <a href="https://www.youtube.com/@solomonayo/videos" target="_blank" rel="noopener noreferrer">
                  @solomonayo
                </a>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>foundation@solomonayo.org</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flexSB">
                <input type="text" name="from_name" placeholder="Name" required />
                <input type="email" name="from_email" placeholder="Email" required />
              </div>
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" cols="30" rows="10" placeholder="Create a message here..." required></textarea>
              <button type="submit" className={`primary-btn ${buttonActive ? "active" : ""}`}>
                <p>{buttonText}</p>
                <div className="check-box">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                </div>
              </button>
            </form>

            <h3>Follow us here</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100095395508329" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={32} />
              </a>
              <a href="https://www.youtube.com/@solomonayo/videos" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
