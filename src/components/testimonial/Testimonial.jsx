// src/components/testimonials/Testimonials.jsx
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './testimonial.css';

const testimonials = [
  {
    id: 1,
    name: "Miss Fejiro Edewor",
    post: "Testimonies From Past Candidates",
    desc: "The Solomon Ayo book reading competition keeps getting bigger. I remember the first edition, and the winner was to go home with 50k. It was big money to me then. I participated in the 1st, 2nd and finally won 100k in the 3rd edition.",
  },
  {
    id: 2,
    name: "Miss Haddasah Esther",
    post: "Testimonies From Past Candidates",
    desc: "I dedicated much of my time to reading, studying, and understanding the books line by line in the previous book competition. Initially, the prize was the incentive, but as I continued with the books, there was so much value.",
  },
  {
    id: 3,
    name: "Mr. John Babarinde",
    post: "Testimonies From Past Candidates",
    desc: "You haven't seen a better Competition. I have been part of this third year now and a member of the Reader's Club. A competition with integrity, filled with great blessings.",
  },
  {
    id: 4,
    name: "Mr. Temitayo Kuewumi",
    post: "Testimonies From Past Candidates",
    desc: "I participated the previous year, and in addition to the rewards, I believe Mrs. Solomon Ayo is utilizing this to promote the culture of reading books subtly and to aid in personal growth.",
  },
  {
    id: 5,
    name: "Mr. Arowojolu Emmanuel",
    post: "Testimonies From Past Candidates",
    desc: "The life-transforming reading competition is here again. Wow. I participated in the first edition, and the lessons from the books blessed my life. I recommend the competition for all.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-container">
      <div className="title">
    
        <p></p>
      </div>

      <div className="slider-container">
        <blockquote>
          <img className="top-quote quote" src="/blockquote.svg" alt="quote" />
          <img className="bottom-quote quote" src="/blockquote.svg" alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {testimonials.map((review) => (
            <SplideSlide key={review.id}>
              <div className="content">
                <p className="text">{review.desc}</p>
                <div className="info">
                  <p className="user">{review.name}</p>
                  <p className="post">{review.post}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
