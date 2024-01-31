import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearSession, getItem, setItem } from "../Utils/utils"; // Import your storage utils here

const LoginDialog = ({ isOpen, onClose, onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(30);
  const [isLoading, setLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // For menu anchor element
  const navigate = useNavigate();

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
    }, 1000);
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
    // Simulating a successful login for the example
    // In a real-world scenario, you would handle authentication and session management here
    const userName = "John Doe"; // Replace with the actual user name
    setItem("userName", userName);
    onLogin();
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
      {getItem("userName") ? (
        <IconButton
          onClick={handleMenuOpen}
          color="inherit"
          size="large"
          sx={{ ml: 2 }}
        >
          <PersonIcon />
        </IconButton>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ ml: 2, backgroundColor: "darkgreen", color: "white" }}
        >
          Login
        </Button>
      )}

      {/* Menu for user actions */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

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
