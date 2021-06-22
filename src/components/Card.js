import React from "react";
import StyledCard from "../styles/Card";
import contents from "../assets/Contents";

const Card = ({ type }) => {
  const content = contents[type];
  return (
    <StyledCard bgColor={content.bgColor}>
      <div>
        <img src={content.logo} />
      </div>
      <h3 className="card__title">{type}</h3>
      <p className="card__body">{content.body}</p>
      <button className="card__button" type="button">
        Learn More
      </button>
    </StyledCard>
  );
};

export default Card;
