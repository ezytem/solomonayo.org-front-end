import React from "react";
import { Link } from "react-router-dom";
import "./competition.css";

const Competition = () => {
  return (
    <section className="competition-section">
      <h2>Online Book Reading Competition</h2>
      <p>
        This vision of having a Christian online book reading Competition springs from the Reader’s Club arm of the organization. It is a Christian-based competition. However, participation is open to all. Yearly, the organizer chooses books that leave lasting impressions and knowledge. This ranges from spiritual to personal growth, relationships, and finance. The Solomonayo Online Book Reading Competition comes up once every year. You can always check this page to determine when the next edition will be.
      </p>
      <div className="button-container">
        <Link to="/next-edition">
          <button className="next-edition-button">Upcoming Edition</button>
        </Link>
        <Link to="/previous-editions">
          <button className="next-edition-button">Previous Editions</button>
        </Link>
        <Link to="/testimonials">
          <button className="next-edition-button">Testimonials</button>
        </Link>
      </div>
    </section>
  );
};

export default Competition;
