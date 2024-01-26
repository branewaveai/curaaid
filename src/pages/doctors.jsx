import React from "react";
import DoctorCard from "../components/hospital/doctorCard";
import "../components/styles/doctors.css";

const DoctorList = ({ doctors }) => (
  <div className="doctor-list">
    {" "}
    {doctors.map((doctor, index) => (
      <DoctorCard key={index} {...doctor} />
    ))}{" "}
  </div>
);

const HorizontalScrollableDoctorList = () => {
  const doctors = [
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    // Add more doctors as needed
  ];

  return (
    <div className="horizontal-scrollable-list">
      <DoctorList doctors={doctors} />{" "}
    </div>
  );
};

export default HorizontalScrollableDoctorList;
