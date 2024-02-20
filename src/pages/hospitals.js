import { Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import EnquiryForm from "./EnquiryForm"; // Import the EnquiryForm component

const AboutHospitalsPage = () => {
  const [enquireHospitalIndex, setEnquireHospitalIndex] = useState(-1);

  const hospitals = [
    {
      image: "hospital1.jpg",
      name: "ABC Hospital",
      location: "Bangalore",
      estdYear: 1990,
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: "hospital2.jpg",
      name: "XYZ Hospital",
      location: "Mumbai",
      estdYear: 1985,
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more hospitals as needed
  ];

  const handleEnquireClick = (index) => {
    setEnquireHospitalIndex(index);
  };

  return (
    <div style={{ margin: "50px auto", maxWidth: "800px" }}>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        About Hospitals
      </Typography>
      {hospitals.map((hospital, index) => (
        <Paper key={index} elevation={3} style={{ padding: "20px", marginBottom: "20px", position: "relative" }}>
          <div style={{ display: "flex", gap: "20px", marginBottom: "50px" }}>
            <div>
              <img src={hospital.image} alt={hospital.name} style={{ width: "200px", height: "200px", borderRadius: "10px" }} />
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="h5">{hospital.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Location: {hospital.location}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                Established Year: {hospital.estdYear}
              </Typography>
              <Typography variant="body1">{hospital.about}</Typography>
              <button onClick={() => handleEnquireClick(index)} style={{ marginTop: "10px" }}>Enquire</button>
            </div>
          </div>
          {enquireHospitalIndex === index && (
            <div style={{ position: "absolute", top: "0", right: "0", width: "300px", padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "10px" }}>
              <EnquiryForm />
            </div>
          )}
        </Paper>
      ))}
    </div>
  );
};

export default AboutHospitalsPage;
