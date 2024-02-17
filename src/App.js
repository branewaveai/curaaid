import React from "react";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { setIsLoggedIn } from "./actions/loginActions";
import Navbar from "./components/Navbar/nav";
import Home from "./components/homePage/home";
import Login from "./login/login";
import Blogs from "./pages/blogs";
import Dashboard from "./pages/dashboard";
// import Doctors from "./pages/doctorsList";
import Doctors from "../src/pages/doctorMainPage";
import "./App.css";
import Hospitals from "./pages/hospitals";
import Treatments from "./pages/treatment1";
import ProtectedRoute from "./privateRoute";
import DoctorAppointments from "./signup/appointment";
import SignUp from "./signup/signup";

function App() {
  const dispatch = useDispatch();
  if (localStorage.getItem("token")) {
    dispatch(setIsLoggedIn(true));
  }
  const doctorList = [
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
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors" element={<Doctors doctorList={doctorList} />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/doctors/:doctorId/appointments"
          element={<DoctorAppointments />}
        />
        <Route path="/appointments" element={<DoctorAppointments />} />
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
