import React, { useCallback, useEffect, useState } from "react";
import DoctorCard from "../components/hospital/doctorCard";
import "../components/styles/doctorCard.css"; // Make sure to import your CSS file

const HorizontalScrollableDoctorList = ({ doctorsToShowPerPage }) => {
  const doctors = [
    {
      doctorId: 1,
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      doctorId: 2,
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      doctorId: 3,
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      doctorId: 4,
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      doctorId: 5,
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      doctorId: 6,
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      doctorId: 7,
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      doctorId: 8,
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      doctorId: 9,
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      doctorId: 10,
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      doctorId: 11,
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      doctorId: 12,
      name: "Dr. John Doe",
      phoneNumber: "123-456-7890",
      image:
        "https://s3-ap-south-1.amazonaws.com/images.hospals.com/uploads/images/img_635cbd759383c1667022197.png",
      exp: 45,
      degree: "MBBS, DM - Cardiology",
      location: "Bangalore",
    },
    {
      doctorId: 13,
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
    {
      doctorId: 14,
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
    {
      doctorId: 15,
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
    {
      doctorId: 16,
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
    {
      doctorId: 17,
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
    {
      doctorId: 18,
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
    {
      doctorId: 19,
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
  ];
  const itemsPerPage =  doctorsToShowPerPage || 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentDoctors, setCurrentDoctors] = useState([]);
  const [columns, setColumns] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const calculateColumns = useCallback(() => {
    if (windowWidth >= 1200) {
      return 4;
    } else if (windowWidth >= 768 && windowWidth < 1200) {
      return 2;
    } else {
      return 1;
    }
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const newColumns = calculateColumns();
    setColumns(newColumns);

    const newTotalPages = Math.ceil(doctors.length / itemsPerPage);
    setTotalPages(newTotalPages);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const doctorsToDisplay = doctors.slice(indexOfFirstItem, indexOfLastItem);
    console.log(indexOfFirstItem + " " + indexOfLastItem);
    setCurrentDoctors(doctorsToDisplay);
  }, [currentPage, itemsPerPage, calculateColumns]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="horizontal-scrollable-list">
      <div
        className="doctor-list-container"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {currentDoctors.map((doctor) => (
          <DoctorCard key={doctor.doctorId} {...doctor} />
        ))}{" "}
      </div>{" "}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          &lt; Prev{" "}
        </button>{" "}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}{" "}
          </button>
        ))}{" "}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next &gt;{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
};

export default HorizontalScrollableDoctorList;
