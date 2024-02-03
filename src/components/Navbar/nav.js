// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/icons/Logo.jpeg";
import LoginDialog from "../../login/login"; // Update the path based on your project structure
import styles from "./navStyles.module.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  const openLoginDialog = () => {
    setLoginDialogOpen(true);
  };

  const closeLoginDialog = () => {
    setLoginDialogOpen(false);
  };

  const handleLogin = () => {
    // Your login logic here
    // ...

    // For simplicity, let's consider the login is successful
    toast.success("Login successful!");
    closeLoginDialog();
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <Link to="/" className={`${styles.logo}`}>
            <img src={logo} alt="Logo" />
          </Link>{" "}
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Link to="/home" className={`${styles.navLink}`}>
                Home{" "}
              </Link>{" "}
            </li>{" "}
            <li onClick={removeActive}>
              <Link to="/treatments" className={`${styles.navLink}`}>
                Treatments{" "}
              </Link>{" "}
            </li>{" "}
            <li onClick={removeActive}>
              <Link to="/hospitals" className={`${styles.navLink}`}>
                Hospitals{" "}
              </Link>{" "}
            </li>{" "}
            <li onClick={removeActive}>
              <Link to="/doctors" className={`${styles.navLink}`}>
                Doctors{" "}
              </Link>{" "}
            </li>{" "}
            <li onClick={removeActive}>
              <Link to="/blogs" className={`${styles.navLink}`}>
                Blogs{" "}
              </Link>{" "}
            </li>{" "}
            <li onClick={removeActive}>
              <Link to="/dashboard" className={`${styles.navLink}`}>
                Dashboard{" "}
              </Link>{" "}
            </li>{" "}
            {/* Other menu items */}{" "}
            <li onClick={openLoginDialog} className={`${styles.navLink}`}>
              Login{" "}
            </li>{" "}
          </ul>{" "}
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}> </span>{" "}
            <span className={`${styles.bar}`}> </span>{" "}
            <span className={`${styles.bar}`}> </span>{" "}
          </div>{" "}
        </nav>{" "}
      </header>{" "}
      {/* Add the LoginDialog */}{" "}
      {isLoginDialogOpen && (
        <LoginDialog
          isOpen={isLoginDialogOpen}
          onClose={closeLoginDialog}
          onLogin={handleLogin}
        />
      )}{" "}
      <ToastContainer position="top-center" autoClose={5000} />{" "}
    </div>
  );
}

export default Navbar;
