// LoginDialog.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginDialog = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = () => {
    // Check if the user exists (you may want to implement an API call here)
    const userExists = checkIfUserExists();

    if (userExists) {
      // For simplicity, let's consider OTP is sent successfully
      setIsOtpSent(true);
    } else {
      // Show toast for user not found
      toast.error('User not found. Would you like to register?', {
        // Add registration option in the toast
        toastId: 'custom-toast',
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
        onClose: () => {}, // Prevent auto-close on click
        render: ({ closeToast }) => (
          <div>
            <p>User not found. Would you like to register?</p>
            <button onClick={() => handleRegister(closeToast)}>
              Register Now
            </button>
          </div>
        ),
      });

      // You can redirect to the registration page or provide a registration option here
      // For simplicity, let's reset the phone number
      setPhoneNumber('');
    }
  };

  const handleLogin = () => {
    // Perform login logic (you may want to implement an API call here)

    // For simplicity, let's consider the login is successful
    alert('Login successful!');

    // Close the login dialog
    onClose();
  };

  const handleRegister = (closeToast) => {
    // Perform registration logic
    // For simplicity, you can navigate to the registration page using react-router Link
    closeToast(); // Close the toast

    // You can redirect to the registration page or provide a registration option here
    // For simplicity, let's navigate to the registration page using react-router
    // Make sure to add a route for the registration page in your router configuration
    // (e.g., <Route path="/register" element={<Register />} />)
    window.location.href = '/register'; // Redirect to the registration page
  };

  const checkIfUserExists = () => {
    // Implement your logic to check if the user exists (you may want to use an API call)
    // For simplicity, let's consider a hardcoded user
    const registeredUsers = ['1234567890']; // Sample registered phone numbers
    return registeredUsers.includes(phoneNumber);
  };

  return (
    <div>
      <h2>Login</h2>
      <label>Phone Number:</label>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleSendOtp}>Send OTP</button>

      {isOtpSent && (
        <>
          <label>Enter OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}

      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
};

export default LoginDialog;
