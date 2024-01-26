import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

const DocListFromTreatments = ({ treatmentId }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`/api/doctors?tid=${treatmentId}`);
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, [treatmentId]);

  return (
    <div>
      {" "}
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}{" "}
    </div>
  );
};

export default DocListFromTreatments;
