import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./components/homePage/home";
import Home from "./components/homePage/home";
import Blogs from "./pages/blogs";
import Doctors from "./pages/doctors";
import Hospitals from "./pages/hospitals";
import Treatments from "./pages/treatments";
import SignUp from "./signup/signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/homePage/home" element={<Home/>} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
