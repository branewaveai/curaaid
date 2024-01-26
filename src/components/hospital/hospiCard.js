import React from "react";
import "../styles/hospiCard.css";

const HospiCard = ({ image, name, location }) => {
  return (
    <div className="hospi-card">
      <div className="hospi-card-image">
        <img src={image} alt="Doctor" className="hospi-image" />
      </div>
      <div className="hospi-card-details">
        <h3>{name}</h3>
        <p>{location}</p>
      </div>
    </div>
  );
};

const HospiList = ({ hospitals }) => {
  return (
    <div className="hospi-list">
      {hospitals.map((hospital, index) => (
        <HospiCard key={index} {...hospital} />
      ))}
    </div>
  );
};

export default HospiList;