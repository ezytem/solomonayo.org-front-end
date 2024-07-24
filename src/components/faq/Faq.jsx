// src/components/faq/Faq.jsx
import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Will my money be refunded if I do not win?",
      answer: "As with every other competition, your money cannot be refunded. You can only strive to be one of the winners."
    },
    {
      question: "After payment, what next?",
      answer: "You will send your proof of payment to any of the personnel whose number appears on the flier. After your proof is confirmed, you will be added to the WhatsApp group created for interaction with participants, alongside the competition kit sent to you by mail."
    },
    {
      question: "I lost my competition kit. Can I get another?",
      answer: "Yes, you can. Send a message to the WhatsApp group admin. He or she will refer your number to the personnel in charge. Your kit will be resent to your mail."
    },
    {
      question: "On the competition day, if my internet connection got obstructed and I couldn’t submit at the appointed time, can I still forward my answers later?",
      answer: "No. That is why you are strictly advised to use a stable internet connection and a perfect gadget. Adequate preparation on your part will save your day."
    },
    {
      question: "Can I be part of this competition if I am not a Christian?",
      answer: "Yes, you can. This competition is open to all lovers of knowledge. However, note that a book of the Bible is part of the five books you will be required to read. This is because a Christian organization runs this competition. The door is wide open if you do not mind reading the Bible."
    },
    {
      question: "Is there an age limit?",
      answer: "As long as you are a reader, you can be part of this competition. There is no age barrier."
    },
    {
      question: "What do I do if my E-mail gets blocked or hacked?",
      answer: "In this case, send a message to one of the admins of the WhatsApp group meant for the competition. Ensure to include the email used to register and the current email in your message. Also, include your full name."
    },
    {
      question: "Is this competition only open to people in Nigeria, Africa?",
      answer: "No. You can be a participant from any part of the world. This is an online competition. However, the competition is officially situated in Nigeria, Africa."
    },
    {
      question: "How legit is this competition?",
      answer: "In case you still doubt us, this competition is completely legit. We have done five editions successfully, and here is the sixth. It is run by the Solomonayo Foundation; a Christian establishment committed to enhancing lives."
    },
    {
      question: "Can I register for this competition after the deadline for registration?",
      answer: "Registration for this competition closes after the deadline for registration. Therefore, endeavor to register within the time frame of the registration processes."
    },
    {
      question: "What if I do not participate in the competition after registration, can I be refunded?",
      answer: "No. The Foundation has a standing policy of no refund except in exceptional cases considered by the Foundation."
    },
    {
      question: "Can someone do the competition on my behalf?",
      answer: "No. It is against the policy of the Foundation to do the competition on behalf of another person. Such an act is considered malpractice, and there is a penalty for that."
    }
  ];

  const handleClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => handleClick(index)}>
            <h3 className="faq-question">{index + 1}. {faq.question}</h3>
            <div className={`faq-answer ${activeIndex === index ? "active" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      <div className="faq-recap">
        <h2>A recap of our procedures:</h2>
        <p>
          Not too complicated as you might have anticipated. Now, when you pay, you send us proof of payment, and we verify and forward the registration form to you. As soon as you or the payee fill out and we have their details, we forward the kit by email. Everything in 24-48 hours.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
