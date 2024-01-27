// Import necessary dependencies
import { IconButton } from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/doctorCard.css";

// Define the DoctorCard component
const DoctorCard = ({ doctorId, image, name, exp, degree, location }) => {
  
  const navigate = useNavigate();

  // This function will be called when the "Book Appointment" button is clicked
  const handleBookAppointmentClick = () => {
    // Navigate to the appointment page for the specific doctor
    console.log("I'm navigating to appointments");
    // navigate('/appointments');
    navigate('/doctors/${doctorId}/appointments');
  };

  return (
    <div className="doctor-card">
      <div className="doctor-card-image">
        <img src={image} alt="Doctor" className="doctor-image" />
      </div>
      <div className="doctor-card-details">
        <h3>{name}</h3>
        <p>{exp} years of experience</p>
        <p>{degree}</p>
        <p>{location}</p>
        {/* Use Link to navigate to the appointment page */}
        <Link to={`/doctors/${doctorId}/appointments`} className="book-appointment-link">
          {/* IconButton for the video call icon */}
          <IconButton onClick={handleBookAppointmentClick}>
            <VideoCallIcon />
          </IconButton>
          {/* Text for the button */}
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
