import React from "react";
import "../App.css";

const Card = ({ image, title, instructor, lessons, rating, duration, price, discount }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
        {discount && <div className="discount-badge">{discount}</div>}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-instructor">{instructor}</p>
        <p className="card-lessons">{lessons}</p>
        <p className="card-duration">{duration}</p>
        <div className="card-footer">
          <span className="card-rating">⭐ {rating}</span>
          <button className="buy-now-btn">{price ? `Buy Now - $${price}` : "Free"}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
