// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/icons/Logo.jpeg";
import LoginDialog from "../../login/login";
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
          </Link>
          <div className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <Link to="/home" className={`${styles.navLink}`} onClick={removeActive}>
              Home
            </Link>
            <Link to="/treatments" className={`${styles.navLink}`} onClick={removeActive}>
              Treatments
            </Link>
            <Link to="/hospitals" className={`${styles.navLink}`} onClick={removeActive}>
              Hospitals
            </Link>
            <Link to="/doctors" className={`${styles.navLink}`} onClick={removeActive}>
              Doctors
            </Link>
            <Link to="/blogs" className={`${styles.navLink}`} onClick={removeActive}>
              Blogs
            </Link>
            <Link to="/dashboard" className={`${styles.navLink}`} onClick={removeActive}>
              Dashboard
            </Link>
            {/* Other menu items */}
            <div className={`${styles.loginLink}`} onClick={openLoginDialog}>
              Login
            </div>
          </div>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
      {/* Add the LoginDialog */}
      {isLoginDialogOpen && (
        <LoginDialog
          isOpen={isLoginDialogOpen}
          onClose={closeLoginDialog}
          onLogin={handleLogin}
        />
      )}
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
}

export default Navbar;