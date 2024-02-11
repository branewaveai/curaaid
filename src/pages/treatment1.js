import { Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import '../components/styles/treatments.css';
import Footer from "./footer";

const TreatmentPage = () => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    const Treatments = [
      { 
        id: 1, 
        name: "Treatment 1", 
        description: "Description of Treatment 1", 
        asdClosures: [
          { description: "ASD Closure 1" },
          { description: "ASD Closure 2" },
          { description: "ASD Closure 3" },
          { description: "ASD Closure 4" },
          { description: "ASD Closure 5" },
          { description: "ASD Closure 6" },
          { description: "ASD Closure 7" },
          { description: "ASD Closure 8" }
        ] 
      },
      { 
        id: 2, 
        name: "Treatment 2", 
        description: "Description of Treatment 2", 
        asdClosures: [
          { description: "ASD Closure 1" },
          { description: "ASD Closure 2" },
          { description: "ASD Closure 3" },
          { description: "ASD Closure 4" },
          { description: "ASD Closure 5" },
          { description: "ASD Closure 6" },
          { description: "ASD Closure 7" },
          { description: "ASD Closure 8" }
        ] 
      },
      // Add more treatments as needed
    ];

    setTreatments(Treatments);
  }, []);

  return (
    <div className="treatment-container">
      {treatments.map((treatment) => (
        <div key={treatment.id} className="treatment-row">
          <Paper elevation={3} className="treatment">
            <Typography variant="h5" gutterBottom style={{ textAlign: 'left',marginLeft:'40px' }}>{treatment.name}</Typography>
            <Typography variant="body1" paragraph style={{ textAlign: 'left',marginLeft:'40px'  }}>{treatment.description}</Typography>
          
            <div className="asd-closure-row">
              {treatment.asdClosures.map((asd, index) => (
                <Paper key={index} elevation={3} className="asd-closure-box">
                  <Typography variant="body2" style={{ textAlign: 'center',color: '#3586f0' }}>{asd.description}</Typography>
                </Paper>
              ))}
            </div>
          </Paper>
        </div>
      ))}
      <Footer/>
    </div>
  );
};

export default TreatmentPage;
