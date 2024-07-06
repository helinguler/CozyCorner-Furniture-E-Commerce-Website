import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (223)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          At CozyCorner, we work exclusively with natural materials such as
          solid wood, genuine leather, real marble, and natural hazeran.
          Therefore, there may be slight texture, marks, and color tone
          differences between the product you purchase and the visuals on our
          website. We prefer to use genuine leathers with their natural marks
          and textures throughout their lifespan, believing that it adds value
          to our products. This way, your product becomes uniquely yours, with
          details like fingerprint marks.
        </p>
        <p>
          At CozyCorner, all our products are made to order, with an average
          delivery time of 3-4 weeks.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
