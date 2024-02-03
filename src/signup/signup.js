import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doPostRequest } from "../Request";
import Logo from "../assets/icons/Logo.jpeg"; // Update the path to your logo
import styles from "./styles"; // Import the styles
const Signup = ({ history }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    country: "",
    state: "",
    pincode: "",
  });
  const [isLoading,setLoading] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    // Simulate user registration and OTP verification (replace with actual backend logic)
    try {
      if (!formData.phoneNumber) {
        toast.error("please enter phoneNumber", {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "Light",
        });
        return;
      }
      if (!formData.fullName) {
        toast.error("please enter name", {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "Light",
        });
        return;
      }
      
      setLoading(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var reqJson = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          contactNumber: formData.phoneNumber,
          fullName: formData.fullName,
          country: formData.country,
          pincode : formData.pincode,
          // key2: "value2",
        }),
      };

      doPostRequest(
        Signup,
        reqJson,
        (resp) => {
          var loginResp = JSON.parse(resp);
          if (loginResp.status === "SUCCESS") {
            console.log("Signup Succesfully");

            //sendOtpForverification(); we will call here for sending otp;
            navigate("/dashboaard");
          } else {
            toast.error("Login Failed", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setLoading(false);
            navigate("/home");
          }
        },
        (err) => {
          setLoading(false);
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
          navigate("/home");
        }
      );
      // onLogin();

      // Assuming AuthService.signup returns a boolean indicating successful registration
      // const isRegistered = await AuthService.signup(formData);
      const isRegistered = true;
      if (isRegistered) {
        // Display a toast message for successful registration
        toast.success(
          "Registration successful. Please check your phone for OTP."
        );

        // Redirect to the login page after a successful registration
        history.push("/login");
      } else {
        // Display a toast message if the user already exists
        toast.warn("User already exists. Please login.");

        // Redirect to the login page for an existing user
        history.push("/login");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      // Handle error as needed
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      marginTop={-10}
    >
      <img src={Logo} alt="Logo" style={styles.logo} />
      <Box
        width={400}
        padding={3}
        boxShadow={3}
        borderRadius={8}
        bgcolor="white"
        textAlign="center"
      >
        <Typography variant="h5" gutterBottom>
          Signup
        </Typography>
        <TextField
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          style={{ width: "100%" }}
          margin="normal"
        />
        <TextField
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          style={{ width: "100%" }}
          margin="normal"
        />
        <TextField
          label="Country"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          style={{ width: "100%" }}
          margin="normal"
        />
        <TextField
          label="State"
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          style={{ width: "100%" }}
          margin="normal"
        />
        <TextField
          label="Pincode"
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleInputChange}
          style={{ width: "100%" }}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignup}
          style={{ width: "100%", marginTop: "16px" }}
        >
          Signup
        </Button>
        <p>
          Already have an account? <Link to="/Login">Login here</Link>
        </p>
      </Box>
      {/* ToastContainer for displaying toast messages */}
      <ToastContainer />
    </Box>
  );
};

export default Signup;
