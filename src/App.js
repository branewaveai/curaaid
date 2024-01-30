import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/nav";
import Home from "./components/homePage/home";
import Login from "./login/login";
import Blogs from "./pages/blogs";
import Dashboard from "./pages/dashboard";
import Doctors from "./pages/doctors";
import Hospitals from "./pages/hospitals";
import Treatments from "./pages/treatments";
import DoctorAppointments from "./signup/appointment";
import SignUp from "./signup/signup";

const ProtectedRoute = ({ element }) => {
  // If user is authenticated, render the protected element, else redirect to login
  return localStorage.getItem("token") ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {" "}
        {/* Public Routes */} <Route path="/" element={<Home />} />{" "}
        <Route path="/home" element={<Home />} />{" "}
        <Route path="/treatments" element={<Treatments />} />{" "}
        <Route path="/hospitals" element={<Hospitals />} />{" "}
        <Route path="/doctors" element={<Doctors />} />{" "}
        <Route path="/blogs" element={<Blogs />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/signup" element={<SignUp />} />{" "}
        <Route
          path="/doctors/:doctorId/appointments"
          element={<DoctorAppointments />}
        />{" "}
        <Route path="/appointments" element={<DoctorAppointments />} />{" "}
        {/* Protected Routes */}{" "}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
      </Routes>{" "}
    </Router>
  );
}

export default App;
