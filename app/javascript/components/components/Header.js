import React, { useState } from "react"
import {
  Nav,
  NavItem,
  Navbar,
  NavbarBrand
} from "reactstrap"
import { NavLink } from "react-router-dom"
import alphaPulseLogo from "../assets/PSX_20230414_155911- 1.png"

const Header = ({ toggleSignUp, toggleSignIn, toggleNewWorkout, logged_in, logout }) => {
  const signUpClick = () => {
    toggleSignUp()
  }

  const signInClick = () => {
    toggleSignIn()
  }

  const newWorkoutClick = () => {
    toggleNewWorkout()
  }

  return (
    <div className='Header'>
      <Navbar fixed="top" expand color="dark" dark>
        <NavbarBrand href="/"><img className="logo" src={alphaPulseLogo} alt='AlphaPulse Logo' />AlphaPulse</NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/workoutindex">Workouts</NavLink>
            </NavItem>
            {logged_in && (
              <>
                <div className="navitem">
                  <NavItem>
                    <a onClick={newWorkoutClick}>Create Workout</a>
                  </NavItem>
                </div>
                <div className="navitem">
                  <NavItem>
                    <a onClick={logout}>Sign Out</a>
                  </NavItem>
                </div>
              </>
            )}
            {!logged_in && (
              <>
                <div className="navitem">
                  <NavItem>
                    <a onClick={signInClick}>Sign In</a>
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
      </Navbar>
    </div>
  )
}

export default Header
