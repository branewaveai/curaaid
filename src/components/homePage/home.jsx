// pages/index.js
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import DoctorList from "../../pages/doctors";
import "./home.css";
const Home = () => {
  return (
    <Container className="container">
      <Typography variant="h2">Welcome to CuraAid</Typography>
     
      <Grid container spacing={3}>
        {/* Main Content */}
        <Grid item xs={12}>
          <Typography variant="h4">Top Doctors</Typography>
          <DoctorList />
        </Grid>
        <Grid item xs = {12}>
        <Typography variant="h4">Our Hospitals</Typography>
        <DoctorList/>
        </Grid>
      </Grid>

      {/* Additional element */}
      <div className="additional-element">
        <Typography>This is an additional element.</Typography>
      </div>
    </Container>
  );
};

export default Home;
