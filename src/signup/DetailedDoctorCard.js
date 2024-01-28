import SecurityIcon from '@mui/icons-material/Lock';
import PatientsIcon from '@mui/icons-material/People';
import ExperienceIcon from '@mui/icons-material/Star';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const DetailedDoctorCard = ({ doctor }) => {
  const { name, image, exp, degree, patientsConsulted } = doctor;

  return (
    <Card style={{ backgroundColor: '#33FFFC', borderRadius: 16, overflow: 'hidden' }}>
      <Grid container spacing={2}>
        {/* Left Image */}
        <Grid item xs={12} sm={4}>
          <CardMedia component="img" alt={name} height="300" image={image} />
        </Grid>

        {/* Middle Content */}
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Typography variant="h6">{name}</Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
              <ExperienceIcon color="primary" />
              <Typography variant="body2" color="textSecondary" style={{ marginLeft: 5 }}>
                {`${exp} years of experience`}
              </Typography>
            </div>
            <Typography variant="body2" color="textSecondary" paragraph>
              {degree}
            </Typography>
            {/* Add more content as needed, e.g., awards */}

            {/* Last Layout */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <PatientsIcon color="primary" />
              <Typography variant="body2" color="textSecondary" style={{ marginLeft: 5, marginRight: 20 }}>
                {`${patientsConsulted} patients consulted`}
              </Typography>
              <SecurityIcon color="primary" />
              <Typography variant="body2" color="textSecondary" style={{ marginLeft: 5 }}>
                Privacy and Security
              </Typography>
            </div>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DetailedDoctorCard;
