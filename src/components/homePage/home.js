// pages/index.js
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import DoctorList from "../../pages/doctorsList";
import Features from "./Features";
import "./home.css";
import TopPage from "./topPage";
const Home = () => {
  return (
    <Container className="container">
      <Typography variant="h2" style={{ fontFamily: "Roboto Slab, serif" }}>
        <span> Unveiling our </span> <br />
        <span> mission and vision </span>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
         
        </Grid>
      </Grid>
      <TopPage/>
      <Features />
      <Grid container spacing={1}>
        
        {/* Main Content */}
        <Grid item xs={12}>
          <Typography variant="h4"> Our Team of Expert Doctors </Typography>
          <DoctorList doctorsToShowPerPage={4}  />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4"> Our Hospitals </Typography> 
          <DoctorList />
        </Grid>
      </Grid>
      {/* Additional element */}
      <div className="additional-element">
        <Typography> This is an additional element. </Typography>
      </div>
    </Container>
  );
};

export default Home;
