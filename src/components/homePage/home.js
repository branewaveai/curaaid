// pages/index.js
import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import DoctorList from "../../pages/doctors";
import Features from "./Features";
import "./home.css";


const Home = () => {
  return (
    
    <Container className="container">
      <Typography variant="h2">
        <span>Unvieling our </span>
        <br></br> <span>mission and vision</span>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* Your first block of content */}
          "I'm testing"
        </Grid>

        {/* Social Links */}
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Typography variant="h4">Connect with Us</Typography>
            </Grid>
            <Grid item>
              {/* Your social links go here */}
              <Button
                variant="contained"
                color="primary"
                href="your-social-link"
              >
                Facebook
              </Button>
              {/* Add more social links as needed */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Features/>
      <Grid container spacing={1}>
        {/* Main Content */}
        <Grid item xs={12}>
          <Typography variant="h4"> Our Team of Expert Doctors </Typography>
          <DoctorList />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4"> Our Hospitals </Typography> <DoctorList />
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
