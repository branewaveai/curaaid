// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/icons/Logo.jpeg";
import styles from './navStyles.module.css';
function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
        <Link to="/" className={`${styles.logo}`}>
        <img src={logo} alt="Logo" />
      </Link>

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to="/home" className={`${styles.navLink}`}>
                Home
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/blogs" className={`${styles.navLink}`}>
                Blogs
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/doctors" className={`${styles.navLink}`}>
                Doctors
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/hospitals" className={`${styles.navLink}`}>
                Hospitals
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/treatments" className={`${styles.navLink}`}>
                Treatments
              </Link>
            </li>
            <li onClick={removeActive}>
              <Link to="/login" className={`${styles.navLink}`}>
                Login
              </Link>
            </li>
          </ul>

          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
