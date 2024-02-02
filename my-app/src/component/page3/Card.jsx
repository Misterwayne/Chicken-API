import React, { useState } from "react";
import "./Card.css";

const RenderCard = ({ text, imagePath, description }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img src={imagePath} alt="Card Background" />
      <div className={isHovering ? "cardText2" : "cardText"}>
        <b>{isHovering ? description : text}</b>
      </div>
    </div>
  );
};

export default RenderCard;