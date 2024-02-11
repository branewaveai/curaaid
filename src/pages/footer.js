import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f0f0f0", padding: "20px 0", width: "100%", position: "relative", bottom: 0 }}>
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h6">Column 1</Typography>
            
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h6">Column 2</Typography>
            
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h6">Column 3</Typography>
            
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h6">Column 4</Typography>
            
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
