// Navbar.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setIsLoggedIn } from "../../actions/loginActions";
import logo from "../../assets/icons/Logo.jpeg";
import LoginDialog from "../../login/login";
import styles from "./navStyles.module.css";

function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [isActive, setIsActive] = useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    console.log("isLoggedIn state changed:", isLoggedIn);
  }, [isLoggedIn]);

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

  const handleLogout = () => {
    
    toast.success("Logout successful!");
    dispatch(setIsLoggedIn (false));
    localStorage.clear();
    localStorage.setItem("token", "");
  };
  const handleLogin = () => {
    
    toast.success("Login successful!");
    closeLoginDialog();
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <div className={`${styles.leftNav}`}>
            <Link to="/" className={`${styles.logo}`}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className={`${styles.centerNav}`}>
            <div
              className={`${styles.navMenu} ${isActive ? styles.active : ""}`}
            >
              <Link
                to="/home"
                className={`${styles.navLink}`}
                onClick={removeActive}
              >
                Home
              </Link>
              <Link
                to="/treatments"
                className={`${styles.navLink}`}
                onClick={removeActive}
              >
                Treatments
              </Link>
              <Link
                to="/hospitals"
                className={`${styles.navLink}`}
                onClick={removeActive}
              >
                Hospitals
              </Link>
              <Link
                to="/doctors"
                className={`${styles.navLink}`}
                onClick={removeActive}
              >
                Doctors
              </Link>
              <Link
                to="/blogs"
                className={`${styles.navLink}`}
                onClick={removeActive}
              >
                Blogs
              </Link>
              <Link
                to="/dashboard"
                className={`${styles.navLink}`}
                onClick={removeActive}
              >
                Dashboard
              </Link>
            </div>
          </div>
          {isLoggedIn ? (
            <div>
              <div className={`${styles.personIcon}`}> &#128100;</div>
              <span>{localStorage.getItem("name")}</span>
              <div className={`${styles.logoutLink}`} onClick={handleLogout}>
                Logout
              </div>
            </div>
          ) : (
            // Render login button
            <div className={`${styles.loginLink}`} onClick={openLoginDialog}>
              Login
            </div>
          )}
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}> </span>
            <span className={`${styles.bar}`}> </span>
            <span className={`${styles.bar}`}> </span>
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
