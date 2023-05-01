import React, { useState } from "react"
import {
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse
} from "reactstrap"
import { NavLink } from "react-router-dom"
import alphaPulseLogo from "../assets/PSX_20230414_155911- 1.png"

const Header = ({ toggleSignUp, toggleSignIn, toggleNewWorkout, logged_in, logout }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const signUpClick = () => {
    toggleSignUp()
  }

  const signInClick = () => {
    toggleSignIn()
  }

  const logoutClick = () => {
    logout()
  }

  const newWorkoutClick = () => {
    toggleNewWorkout()
  }

  return (
    <div className='Header'>
      <Navbar fixed="top" color="dark" dark expand="lg">
        <NavbarBrand href="/"><img className="logo" src={alphaPulseLogo} alt='AlphaPulse Logo' />AlphaPulse</NavbarBrand>
        <NavbarToggler onClick={toggle}></NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/workoutindex">Workouts</NavLink>
            </NavItem>
            {logged_in && (
              <>
                  <NavItem>
                    <a onClick={newWorkoutClick}>Create Workout</a>
                  </NavItem>
                  <NavItem>
                    <a onClick={logoutClick}>Sign Out</a>
                  </NavItem>
              </>
            )}
            {!logged_in && (
              <>
                  <NavItem>
                    <a onClick={signInClick}>Sign In</a>
                  </NavItem>
                  <NavItem>
                    <a onClick={signUpClick}>Sign Up</a>
                  </NavItem>
              </>
            )}
          </Nav>
          </Collapse>
      </Navbar>
    </div>
  )
}

export default Header