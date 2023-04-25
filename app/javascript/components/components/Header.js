import React, { useState } from 'react'
import {
  Nav,
  NavItem,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavbarText,
} from 'reactstrap'
import { NavLink } from 'react-router-dom';
import alphaPulseLogo from '../assets/PSX_20230414_155911- 1.png'



const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
                <NavItem>
                  <NavLink to="/workoutnew/new">Create Workouts</NavLink>
                </NavItem>
                <NavItem>
                  <a href={sign_out_route}>Sign Out</a>
                </NavItem>
              </>
            )}
            {!logged_in && (
              <>
                <NavItem>
                  <a href={sign_in_route}>Sign In</a>
                </NavItem>
                <NavItem>
                  <a href={new_user_route}>Sign Up</a>
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