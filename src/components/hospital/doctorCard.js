import React from "react";
import "../styles/doctorCard.css";

const DoctorCard = ({ image, name, phoneNumber, exp, degree, location }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-card-image">
        <img src={image} alt="Doctor" className="doctor-image" />
      </div>
      <div className="doctor-card-details">
        <h3>{name}</h3>
        <p>{exp} years of experience</p>
        <p>{degree}</p>
        <p class="treatment-from">
          Chairman - Max Institute Of Laparoscopic, Endoscopic, Bariatric
          Surgery &amp; Allied Surgical Specialities
        </p>
        {/* <p>{phoneNumber}</p> */}
        <p>{location}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
