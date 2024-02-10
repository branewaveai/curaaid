import FlightIcon from "@mui/icons-material/Flight";
import CarIcon from "@mui/icons-material/LocalTaxi";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import "./features.css"; // Import the CSS file

const useStyles = styled((theme) => ({
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    height: "100%", // Set height to 100%
  },
  greenLine: {
    backgroundColor: theme.palette.primary.main,
    height: "2px",
    width: "100%",
  },
}));

const Features = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const icons = [
    <FlightIcon key="flight" fontSize="large" />,
    <CarIcon key="car" fontSize="large" />,
    <LocationOnIcon key="location" fontSize="large" />,
  ];

  return (
    <div style={{ width: "78%", margin: "0 auto" }}> {/* Set width to 80% and center align */}
      <Typography variant="h4" sx={{ textAlign: "left" }} className="feature-heading">
        Features
        <span></span>
      </Typography>
      <Grid container>
        {icons.map((icon, index) => (
          <Grid item xs={isSmallScreen ? 12 : undefined} key={index}>
            <div className={classes.iconContainer}>
              {icon}
              {index < icons.length - 1 && (
                <div className={classes.greenLine} />
              )}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Features;
