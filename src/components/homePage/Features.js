import FlightIcon from "@mui/icons-material/Flight";
import CarIcon from "@mui/icons-material/LocalTaxi";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
const useStyles = styled((theme) => ({
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  greenLine: {
    backgroundColor: theme.palette.primary.main, // Use your desired green color
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
    // Add more icons as needed
  ];
  return (
    <>
      <Typography variant="h3">Features</Typography>
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
    </>
  );
};

export default Features;