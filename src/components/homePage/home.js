// Filename - pages/index.js
import "./home.css";

import React from "react";
import HorizontalScrollableDoctorList from "../../pages/doctors";
import HospiList from "../hospital/hospiCard";

const Home = () => {
  const hospitals = [
    {
      name: "Fortis Hospital Bangalore, Bannerghatta Road",
      image:
        "https://www.healthtrip.com/wp-content/uploads/2018/02/forties-delhi.jpg",
      location: "Bangalore",
    },
    {
      name: "Apollo Hospital Delhi, Sarita Vihar",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      location: "Delhi",
    },
    // Add more doctors as needed
  ];
  return (
    <div>
      <h1> Welcome to CuraAid </h1>{" "}
      {/* <DoctorCard
                        image="../assets/images/doctor1.jpg"
                        name="Anant"
                        phone="9759948777"
                      /> */}{" "}
      <h2> Top Doctors </h2> <HorizontalScrollableDoctorList />
      <h2> Top Hospitals </h2> <HospiList hospitals={hospitals} />{" "}
    </div>
  );
};

export default Home;
