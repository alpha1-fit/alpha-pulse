import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import alphaPulseLogo from "../assets/PSX_20230414_155911- 1.png";
const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="header" fixed="top" expand color="dark" dark>
      <a href="/">
        <NavItem>
          <img
            src={alphaPulseLogo}
            alt="AlphaPulse Logo"
            style={{ height: "50px", width: "50px" }}
          />
        </NavItem>
      </a>
      <NavbarBrand href="/">AlphaPulse</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink to="/workoutindex">Workouts</NavLink>
          </NavItem>
          {logged_in && (
            <>
              <div className="navitem">
                <NavItem>
                  <NavLink to="/workoutnew/new">Create Workouts</NavLink>
                </NavItem>
              </div>
              <div className="navitem">
                <NavItem>
                  <a href={sign_out_route}>Sign Out</a>
                </NavItem>
              </div>
            </>
          )}
          {!logged_in && (
            <>
              <div className="navitem">
                <NavItem>
                  <a href={sign_in_route}>Sign In</a>
                </NavItem>
              </div>
              <div className="navitem">
                <NavItem>
                  <a href={new_user_route}>Sign Up</a>
                </NavItem>
              </div>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
    
  );
};
export default Header;
