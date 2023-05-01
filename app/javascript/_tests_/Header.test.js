import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import "@testing-library/jest-dom"
import Header from "../components/components/Header"
import Home from "../components/pages/Home"
import IndexWorkouts from "../components/pages/IndexWorkouts"

const toggleSignInSpy = jest.fn()

const toggleSignUpSpy = jest.fn()

const toggleNewWorkoutSpy = jest.fn()

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
        <Header toggleSignIn={toggleSignInSpy} toggleSignUp={toggleSignUpSpy} logout={signOutSpy} toggleNewWorkout={toggleNewWorkoutSpy} logged_in={true} />
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
        <Header toggleSignIn={toggleSignInSpy} toggleSignUp={toggleSignUpSpy} logout={signOutSpy} toggleNewWorkout={toggleNewWorkoutSpy} logged_in={false} />
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

  it("has clickable links for a registered user", async () => {
    const user = userEvent.setup()
    loggedInRender()

    let logo = screen.getByRole('img', {
      name: /alphapulse logo/i
    })

    expect(logo).toBeInTheDocument

    let createLink = screen.getByText(/create workout/i)

    expect(createLink).toBeInTheDocument

    await user.click(createLink)

    expect(toggleNewWorkoutSpy).toHaveBeenCalled()

    let togglerButton = screen.getByRole('button', {
      name: /toggle navigation/i
    })

    expect(togglerButton).toBeInTheDocument

    await user.click(togglerButton)
    screen.logTestingPlaygroundURL()

    let logoutLink = screen.getByText(/sign out/i)

    expect(logoutLink).toBeInTheDocument

    await user.click(logoutLink)

    expect(signOutSpy).toHaveBeenCalled()
  })

  it("has clickable links for an unregistered user", async () => {
    const user = userEvent.setup()
    loggedOutRender()

    let workoutsLink = screen.getByRole('link', {
      name: /workouts/i
    })

    let signupLink = screen.getByText(/sign up/i)

    let signinLink = screen.getByText(/sign in/i)

    await user.click(workoutsLink)

    expect(mockUseNavigate).toHaveBeenCalled

    await user.click(signupLink)

    expect(toggleSignUpSpy).toHaveBeenCalled()
    
    await user.click(signinLink)

    expect(toggleSignInSpy).toHaveBeenCalled()
  })
})
