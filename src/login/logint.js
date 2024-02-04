// src/components/LoginDialog.js
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { doPostRequest } from "../Request";
import { setItem } from "../Utils/utils";
import {
    setIsLoggedIn,
    setIsOtpSent,
    setIsSendButtonDisabled,
    setLoading,
    setOtp,
    setPhoneNumber,
    setSecondsRemaining,
} from "../actions/loginActions";
import { LoginUser } from "../config";
const LoginDialog = (props) => {
  const {
    login,
    setPhoneNumber,
    setOtp,
    setIsOtpSent,
    setIsSendButtonDisabled,
    setSecondsRemaining,
    setLoading,
    setIsLoggedIn,
  } = props;

  const navigate = useNavigate();
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

  const handleSendOtp = () => {
    setIsOtpSent(true);
    setIsSendButtonDisabled(true);
    startCountdown();

    // ... (your existing logic for sending OTP)
  };

  const handleLogin = () => {
    if (!login.phoneNumber || !login.otp) {
      toast.error("Please enter both phone number and OTP.", {
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
        contactNumber: login.phoneNumber,
        otp: login.otp,
      }),
    };

    // Make the login API call
    doPostRequest(
      LoginUser,
      reqJson,
      (resp) => {
        var loginResp = JSON.parse(resp);
        if (loginResp.status === "SUCCESS") {
          console.log("Logged in Successfully");

          // Update the login status in Redux
          setIsLoggedIn(true);

          // Optionally, you can set user details in storage
          const userName = "John Doe";
          setItem("userName", userName);

          // Redirect to the dashboard
          navigate("/dashboard");
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

          // Update the login status in Redux
          setIsLoggedIn(false);
        }

        // Reset loading state
        setLoading(false);
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

        // Update the login status in Redux
        setIsLoggedIn(false);

        // Navigate to the home page on error
        navigate("/home");
      }
    );
  };

  return (
    <Dialog open={login.isOpen} onClose={props.onClose}>
      <DialogTitle sx={{ backgroundColor: "#f0f8ff", color: "black" }}>
        Login{" "}
      </DialogTitle>{" "}
      <DialogContent sx={{ backgroundColor: "#f0f8ff", padding: "16px" }}>
        <TextField
          label="Phone Number"
          type="tel"
          value={login.phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendOtp}
          disabled={login.isSendButtonDisabled}
          sx={{ mt: 2, backgroundColor: "darkgreen", color: "white" }}
        >
          {login.isSendButtonDisabled
            ? `Resend OTP in ${login.secondsRemaining} seconds`
            : "Send OTP"}{" "}
        </Button>{" "}
        {login.isOtpSent && (
          <>
            <TextField
              label="Enter OTP"
              type="text"
              value={login.otp}
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
              Login{" "}
            </Button>{" "}
          </>
        )}{" "}
        <p>
          Don 't have an account?{" "}
          <Link
            to="/signup"
            onClick={props.onClose}
            style={{ color: "darkgreen" }}
          >
            Register here{" "}
          </Link>{" "}
        </p>{" "}
      </DialogContent>{" "}
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapDispatchToProps = {
  setPhoneNumber,
  setOtp,
  setIsOtpSent,
  setIsSendButtonDisabled,
  setSecondsRemaining,
  setLoading,
  setIsLoggedIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
