import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";
import "./competition.css";

const NextEdition = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    location: "",
    phone: "",
    source: "",
    referral: ""
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "S.A Foundation",
      from_name: formData.name,
      message: `
        Email: ${formData.email}\n
        Full Name: ${formData.name}\n
        Location: ${formData.location}\n
        WhatsApp Phone Number: ${formData.phone}\n
        How did you hear about the competition?: ${formData.source}\n
        Referral: ${formData.referral}
      `,
    };

    emailjs.send(
      'service_mriiauf',  // Your service ID
      'template_vba17hi', // Your template ID
      templateParams,
      'V0YS3ByCTgXbLqMIe' // Your Public Key (User ID)
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatusMessage("Your registration has been submitted successfully!");
    }).catch((err) => {
      console.log('FAILED...', err);
      setStatusMessage("Failed to submit your registration. Please try again.");
    });

    setFormData({
      email: "",
      name: "",
      location: "",
      phone: "",
      source: "",
      referral: ""
    });
  };

  return (
    <section className="next-edition-section">
      <h2>7th Edition Book Reading Competition</h2>
      <p>Thank you for indicating interest in participating in the 7th Edition of the Online Book Reading Competition. Kindly fill in the details below.</p>
      
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Full Name (Surname, First name, and Middle name) *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location (e.g., Ikeja, Lagos State) *</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">WhatsApp Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="source">How did you hear about the competition? *</label>
          <select
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            required
          >
            <option value="youtube">YouTube</option>
            <option value="facebook">Facebook</option>
            <option value="website">Website</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="twitter">Twitter</option>
            <option value="friend">A Friend</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="referral">Referral (We would love to know on whose page/status you heard about the competition)</label>
          <input
            type="text"
            id="referral"
            name="referral"
            value={formData.referral}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>

      {statusMessage && <p className="status-message">{statusMessage}</p>}
      
      <div className="navigation-links">
        <Link to="/previous-editions" className="nav-link">Previous Editions</Link>
        <Link to="/" className="nav-link">Home</Link>
      </div>
    </section>
  );
};

export default NextEdition;
