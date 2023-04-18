import React from 'react'
import { Nav, NavItem } from 'reactstrap'

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  return (
    <div className='Header'>
    <Nav>
      {logged_in ? <>
        <NavItem>
          <a href={sign_out_route} className='nav-link'>
            Sign Out
          </a>
        </NavItem>
      </> : <>
        <NavItem>
          <a href={sign_in_route} className='nav-link'>
            Sign In
          </a>
          <a href={new_user_route} className='nav-link'>
            Sign Up
          </a>
        </NavItem>
      </>}

    </Nav>
    </div>
  )
}

export default Header