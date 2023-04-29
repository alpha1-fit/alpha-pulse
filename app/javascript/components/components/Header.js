import React, { useState } from "react"
import {
  Nav,
  NavItem,
  Navbar,
  NavbarBrand
} from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import alphaPulseLogo from "../assets/PSX_20230414_155911- 1.png"
import SignUp from "./SignUp"
import SignIn from "./SignIn";

const Header = ({ toggleNewWorkout, logged_in }) => {
  const [showSignUp, setShowSignUp] = useState(false)

  const [showSignIn, setShowSignIn] = useState(false)

  const navigate = useNavigate()

  const toggleShowSignUp = () => {
    setShowSignUp(!showSignUp)
  }

  const toggleShowSignIn = () => {
    setShowSignIn(!showSignIn)
  }

  const logoutClick = () => {
    destroySession()
  }

  const newWorkoutClick = () => {
    toggleNewWorkout()
  }

  const createUser = (user) => {
    fetch('/users/signup', {
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      },

      method: "POST"
    })
      .then((response) => response.json())
      .then(() => navigate(0))
      .catch((errors) => console.log("User create errors:", errors))
  }

  const createSession = (user) => {
    fetch('/users/login', {
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      },

      method: "POST"
    })
      .then((response) => response.json())
      .then(() => navigate(0))
      .catch((errors) => console.log("Session errors:", errors))
  }

  const destroySession = () => {
    fetch(`/users/logout`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
      .then((response) => response.json())
      .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <div className='Header'>
      {showSignUp && <SignUp createUser={createUser} toggle={toggleShowSignUp} />}
      {showSignIn && <SignIn newSession={createSession} toggle={toggleShowSignIn} />}
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
                  <a onClick={logoutClick}>Sign Out</a>
                </NavItem>
              </div>
            </>
          )}
          {!logged_in && (
            <>
              <div className="navitem">
                <NavItem>
                  <a onClick={toggleShowSignIn}>Sign In</a>
                </NavItem>
              </div>
              <div className="navitem">
                <NavItem>
                  <a onClick={toggleShowSignUp}>Sign Up</a>
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
