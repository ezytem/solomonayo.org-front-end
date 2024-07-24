// src/components/vision/VisionObjectives.jsx
import React from "react";
import "./visionobjective.css";

const VisionObjectives = () => {
  return (
    <div className="vision-objectives-container">
      <div className="vision-objectives-card">
        <div className="vision-objectives-text">
          <h2>Vision and Objectives</h2>
          <p>Our primary aim is to restore and promote a strong reading culture, particularly among the youth.</p>
          <p>To equip readers who will be world leaders.</p>
          <p>And finally, proclaiming Christ and telling the world that Christ and a passion for reading can be rewarding.</p>
          <button>Watch The Story</button>
        </div>
      </div>
      <div className="vision-objectives-images">
        <div className="image-group">
          <img src="/images/Reading_BC.webp" alt="Reading Path" className="image-card" />
          <img src="/images/about.webp" alt="About" className="image-card center-image" />
        </div>
        <img src="/images/about2.webp" alt="About 2" className="image-card single-image" />
      </div>
    </div>
  );
};

export default VisionObjectives;
