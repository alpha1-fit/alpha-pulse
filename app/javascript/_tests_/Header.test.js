import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent, act } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../components/components/Header";
import Home from "../components/pages/Home";
import IndexWorkouts from "../components/pages/IndexWorkouts";

const toggleSignInSpy = jest.fn()

const toggleSignUpSpy = jest.fn()

const signOutSpy = jest.fn()

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}))

describe("<Header />", () => {
  const loggedInRender = () => {
    render(
      <MemoryRouter>
        <Header toggleSignIn={toggleSignInSpy} toggleSignUp={toggleSignUpSpy} logout={signOutSpy} logged_in={true} />
        <Routes>
          <Route path="/"
            element={<Home />}
          />
          <Route path="workoutindex"
            element={<IndexWorkouts logged_in={true} current_user={{}} workouts={[]}/>}
          />
        </Routes>
      </MemoryRouter>
    )
  }

  const loggedOutRender = () => {
    render(
      <MemoryRouter>
        <Header toggleSignIn={toggleSignInSpy} toggleSignUp={toggleSignUpSpy} logout={signOutSpy} logged_in={false} />
        <Routes>
          <Route path="/"
            element={<Home />}
          />
          <Route path="workoutindex"
            element={<IndexWorkouts logged_in={false} current_user={{}} workouts={[]}/>}
          />
        </Routes>
      </MemoryRouter>
    )
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders without crashing", () => {
    loggedInRender()
  })

  it("has clickable links for a registered user", () => {
    loggedInRender()

    let logo = screen.getByRole('img', {
      name: /alphapulse logo/i
    })

    expect(logo).toBeInTheDocument

    let createLink = screen.getByRole('link', {
      name: /create workouts/i
    })

    expect(createLink).toBeInTheDocument

    let logoutLink = screen.getByText(/sign out/i)

    expect(logoutLink).toBeInTheDocument

    fireEvent.click(logoutLink)

    expect(signOutSpy).toHaveBeenCalled()
  });

  it("has clickable links for an unregistered user", () => {
    loggedOutRender()

    let workoutsLink = screen.getByRole('link', {
      name: /workouts/i
    })

    let signupLink = screen.getByText(/sign up/i)

    let signinLink = screen.getByText(/sign in/i)

    act(() => {
      fireEvent.click(workoutsLink)
    })

    expect(mockUseNavigate).toHaveBeenCalled

    act(() => {
      fireEvent.click(signupLink)
    })

    expect(toggleSignUpSpy).toHaveBeenCalled()
    
    act(() => {
      fireEvent.click(signinLink)
    })
    expect(toggleSignInSpy).toHaveBeenCalled()
  });
});
