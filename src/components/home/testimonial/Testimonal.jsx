// src/components/home/testimonial/Testimonal.jsx
import React, { useState, useEffect } from "react";
import { testimonal } from "../../../dummydata";
import Heading from "../../common/heading/Heading";
import "./style.css";

const Testimonal = () => {
  const [startAnimation, setStartAnimation] = useState(true);

  useEffect(() => {
    const container = document.querySelector(".content");
    if (container) {
      container.addEventListener("mouseenter", () => {
        setStartAnimation(false);
      });
      container.addEventListener("mouseleave", () => {
        setStartAnimation(true);
      });
    }
  }, []);

  return (
    <section className="testimonal padding">
      <div className="container">
        <Heading subtitle="TESTIMONIAL" title="Our Successful Winners" />

        <div className={`content grid ${startAnimation ? "animate-scroll" : ""}`}>
          {testimonal.map((val) => (
            <div key={val.id} className="items shadow">
              <div className="box">
                <div className="name">
                  <h2>{val.name}</h2>
                  <span>{val.post}</span>
                </div>
              </div>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
