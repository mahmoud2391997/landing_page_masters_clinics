import React, { FunctionComponent } from "react";
import "./TourCard.css";

type Props = {
  image: string;
  name: string;
  price: number;
  description?: string;
};

const TourCard: FunctionComponent<Props> = ({ image, name, price ,description}) => {
  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <div>
        <div className="tour-card__header">
          <span className="tour-card__name">{name}</span>
<div className="tour-card__price-wrapper">
  <div className="tour-card__price">{price}</div>
  <div className="tooltip">Price per person</div>
</div>        </div>
        <p className="tour-card__description">
          {description}
        </p>
      </div>
      <div className="tour-card__footer">
        
        <button className="tour-card__button">احجزي الان</button>
      </div>
    </div>
  );
};

export default TourCard;
