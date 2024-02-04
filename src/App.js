import React from "react";
import { useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { setIsLoggedIn } from "./actions/loginActions";
import Navbar from "./components/Navbar/nav";
import Home from "./components/homePage/home";
import Login from "./login/login";
import Blogs from "./pages/blogs";
import Dashboard from "./pages/dashboard";
import Doctors from "./pages/doctors";
import Hospitals from "./pages/hospitals";
import Treatments from "./pages/treatments";
import ProtectedRoute from "./privateRoute";
import DoctorAppointments from "./signup/appointment";
import SignUp from "./signup/signup";

function App() {
  const dispatch = useDispatch();
  if(localStorage.getItem('token')){

    dispatch(setIsLoggedIn(true));
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors" element={<Doctors />} />
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
