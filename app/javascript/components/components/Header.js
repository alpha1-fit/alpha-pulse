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

const Header = ({toggleSignUp, logged_in, sign_in_route, sign_out_route}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const signUpClick = () => {
    toggleSignUp()
  }

  return (
    <div className='Header'>
      <Navbar fixed="top" expand color="dark" dark>
        <NavbarBrand href="/"><img className="logo" src={alphaPulseLogo} alt='AlphaPulse Logo' />AlphaPulse</NavbarBrand>
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
                    <a onClick={signUpClick}>Sign Up</a>
                  </NavItem>
                </div>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Header
