// src/components/readersclub/ReadersClub.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./readersclub.css";

const ReadersClub = () => {
  return (
    <section className="readersclub-section">
      <h2>The Reader's Club</h2>
      <p>
        Here in the club, we foster reading culture by promoting reading and discussions among members. With a vision to enrich minds and inspire all-round growth, we engage in reading 2 different books a month and share our knowledge with each other. The club aims to cultivate a community that values knowledge and mastery.
      </p>
      <Link to="/next-edition">
        <button className="next-edition-button">Upcoming Edition</button>
      </Link>
    </section>
  );
};

export default ReadersClub;
