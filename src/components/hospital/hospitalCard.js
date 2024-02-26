// Import necessary dependencies
import { CardContent, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/doctorCard.css";
import "../styles/hospiCard.css";

const HospitalCard = ({ hospitalId, image, name, estd, location }) => {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    console.log("I'm navigating to appointments");
    navigate(`/doctors/${hospitalId}/appointments`);
  };

  return (
    <div className="hospital-card">
      <div className="hospital-card-image">
        <img src={image} alt="Doctor" className="hospital-image" />
      </div>
      <CardContent className="hospital-card-details ">
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          ESTD :{estd}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          {location}
        </Typography>
      </CardContent>
    </div>
  );
};

export default HospitalCard;
