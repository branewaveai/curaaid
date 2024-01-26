// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/homePage/home" activeStyle>
            Home
          </NavLink>
          
          <NavLink to="/treatments" activeStyle>
            Treatments
          </NavLink>
          <NavLink to="/hospitals" activeStyle>
            Hospitals
          </NavLink>
          <NavLink to="/doctors" activeStyle>
            Doctors
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
