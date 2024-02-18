import { Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { doPostRequest } from "../Request";
import "../components/styles/treatments.css";
import { CONST_KEYS, TreatmentsDetails } from "../config";
import Footer from "./footer";
const TreatmentPage = () => {
  const [treatments, setTreatments] = useState([]);
  const fetchdata = () => {
    var myHeaders = new Headers();
    var tt = localStorage.getItem(CONST_KEYS.token);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append('SessionToken',localStorage.getItem(CONST_KEYS.token) )
    console.log(tt);
    var reqJson = {
      method: "GET",
      headers: myHeaders,
      
    };
    doPostRequest(
      TreatmentsDetails,
      reqJson,
      (resp) => {
        var loginResp = resp;
        console.log(loginResp);
        if (loginResp.status === "SUCCESS") {
          console.log("Treatment Data fetched");
        } else {
          toast.error("Internal Error", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      },
      (err) => {
        toast.error("Failed", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    );
  };
  useEffect(() => {
    const data = fetchdata();
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
          { description: "ASD Closure 8" },
        ],
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
          { description: "ASD Closure 8" },
        ],
      },
      {
        id: 3,
        name: "Treatment 3",
        description: "Description of Treatment 1",
        asdClosures: [
          { description: "ASD Closure 1" },
          { description: "ASD Closure 2" },
          { description: "ASD Closure 3" },
          { description: "ASD Closure 4" },
          { description: "ASD Closure 5" },
          { description: "ASD Closure 6" },
          { description: "ASD Closure 7" },
          { description: "ASD Closure 8" },
        ],
      },
      {
        id: 4,
        name: "Treatment 4",
        description: "Description of Treatment 1",
        asdClosures: [
          { description: "ASD Closure 1" },
          { description: "ASD Closure 2" },
          { description: "ASD Closure 3" },
          { description: "ASD Closure 4" },
          { description: "ASD Closure 5" },
          { description: "ASD Closure 6" },
          { description: "ASD Closure 7" },
          { description: "ASD Closure 8" },
        ],
      },
      // Add more treatments as needed
    ];

    setTreatments(Treatments);
  }, []);

  return (
    <div className="treatment-container">
      {" "}
      {treatments.map((treatment) => (
        <div key={treatment.id} className="treatment-row">
          <Paper elevation={3} className="treatment">
            <Typography
              variant="h5"
              gutterBottom
              style={{ textAlign: "left", marginLeft: "40px" }}
            >
              {" "}
              {treatment.name}{" "}
            </Typography>{" "}
            <Typography
              variant="body1"
              paragraph
              style={{ textAlign: "left", marginLeft: "40px" }}
            >
              {" "}
              {treatment.description}{" "}
            </Typography>{" "}
            <div className="asd-closure-row">
              {" "}
              {treatment.asdClosures.map((asd, index) => (
                <Paper key={index} elevation={3} className="asd-closure-box">
                  <Typography
                    variant="body2"
                    style={{ textAlign: "center", color: "#3586f0" }}
                  >
                    {" "}
                    {asd.description}{" "}
                  </Typography>{" "}
                </Paper>
              ))}{" "}
            </div>{" "}
          </Paper>{" "}
        </div>
      ))}{" "}
      <div style={{ width: "100%" }}>
        <Footer />
      </div>{" "}
    </div>
  );
};

export default TreatmentPage;
