import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doPostRequest } from "../Request";
import { clearSession, getItem, setItem } from "../Utils/utils"; // Import your storage utils here
import { LoginUser } from "../config";

const LoginDialog = ({ isOpen, onClose, onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(30);
  const [isLoading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // For menu anchor element
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!getItem("userName"));

  const handleSendOtp = () => {
    setIsOtpSent(true);
    setIsSendButtonDisabled(true);
    startCountdown();
  };

  const startCountdown = () => {
    let seconds = 30;

    const countdownInterval = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);


      if (seconds === 0) {
        clearInterval(countdownInterval);
        setIsSendButtonDisabled(false);
        setSecondsRemaining(30);
      }
    }, 3000);
  };

  const handleLogin = () => {
    if (!phoneNumber) {
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
    if (!otp) {
      toast.error("please enter otp", {
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
    const userName = "John Doe";
    setItem("userName", userName);
    setIsLoggedIn(!!getItem("userName"));
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type","application/json");
    var reqJson = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        contactNumber: phoneNumber,
        // key2: "value2",
      }),
    }

    doPostRequest(
      LoginUser, reqJson,
      (resp)=>{
        var loginResp = JSON.parse(resp);
        if(loginResp.status==='SUCCESS'){
          console.log("Logedin Succesfully");


          //sendOtpForverification(); we will call here for sending otp;
          navigate("/dashboaard");
        }
        else{
          toast.error("Login Failed",{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar:false,
            closeOnClick: true,
            pauseOnHover:true,
            draggable:true,
            progress: undefined,
            theme: "light",
          })
          setLoading(false)
          navigate("/home")
        }
      },
      (err)=>{
        setLoading(false);
        toast.error("Failed",{
          position:"top-right",
          autoClose: 3000,
            hideProgressBar:false,
            closeOnClick: true,
            pauseOnHover:true,
            draggable:true,
            progress: undefined,
            theme: "light",
        })
        navigate("/home")
      }
    )
    // onLogin();
    onClose();
  };

  // Handle menu open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle logout
  const handleLogout = () => {
    // Clear user-related cookies or session data
    clearSession();
    // Additional logout logic if needed
    handleMenuClose();
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <>
      {/* Person icon and user name or login button */}
      {/* Login Dialog */}
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle sx={{ backgroundColor: "#f0f8ff", color: "black" }}>
          Login
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "#f0f8ff", padding: "16px" }}>
          <TextField
            label="Phone Number"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendOtp}
            disabled={isSendButtonDisabled}
            sx={{ mt: 2, backgroundColor: "darkgreen", color: "white" }}
          >
            {isSendButtonDisabled
              ? `Resend OTP in ${secondsRemaining} seconds`
              : "Send OTP"}
          </Button>
          {isOtpSent && (
            <>
              <TextField
                label="Enter OTP"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                sx={{ mt: 2, backgroundColor: "darkgreen", color: "white" }}
              >
                Login
              </Button>
            </>
          )}
          <p>
            Don't have an account?{" "}
            <Link to="/signup" onClick={onClose} style={{ color: "darkgreen" }}>
              Register here
            </Link>
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginDialog;
