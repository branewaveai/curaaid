import React from "react";
import { Link } from "react-router-dom";
import "../styles/doctorCard.css";

const DoctorCard = ({ doctorId, image, name, exp, degree, location }) => {
  return (
    <Link to={`/doctors/${doctorId}`} className="doctor-card-link">
      <div className="doctor-card">
        <div className="doctor-card-image">
          <img src={image} alt="Doctor" className="doctor-image" />
        </div>{" "}
        <div className="doctor-card-details">
          <h3> {name} </h3>{" "}
          <p>
            {" "}
            {exp}
            years of experience{" "}
          </p>{" "}
          <p> {degree} </p> <p> {location} </p>{" "}
        </div>{" "}
      </div>{" "}
    </Link>
  );
};

export default DoctorCard;
