import React, { useEffect, useState } from "react";
import DoctorCard from "../components/hospital/doctorCard";
import "../components/styles/doctorCard.css"; // Make sure to import your CSS file

const HorizontalScrollableDoctorList = () => {
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
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
    {
      doctorId: 2,
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
    {
      doctorId: 2,
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
    {
      doctorId: 2,
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
    {
      doctorId: 2,
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
    {
      doctorId: 2,
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    },
    {
      doctorId: 2,
      name: "Dr. Jane Smith",
      phoneNumber: "987-654-3210",
      image:
        "https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg?fmt=webp&w=500",
      exp: 18,
      degree: "MBBS, MD",
      location: "Delhi",
    }, // Add more doctors as needed
  ];

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateColumns = () => {
    if (windowWidth >= 1200) {
      return 5;
    } else if (windowWidth >= 768 && windowWidth < 1200) {
      return 3;
    } else {
      return 1;
    }
  };

  const columns = calculateColumns();
  const totalItems = doctors.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="horizontal-scrollable-list">
      <div
        className="doctor-list-container"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "16px",
        }}
      >
        {currentDoctors.map((doctor) => (
          <DoctorCard key={doctor.doctorId} {...doctor} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage}>&lt; Prev</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage}>Next &gt;</button>
      </div>
    </div>
  );
};

export default HorizontalScrollableDoctorList;
