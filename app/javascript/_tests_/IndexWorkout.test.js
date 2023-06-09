import React from 'react'
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route, Outlet } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import IndexWorkouts from "../components/pages/IndexWorkouts"
import "@testing-library/jest-dom"

const toggleModalSpy = jest.fn()
const mockDeleteWorkout = jest.fn()
const mockUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}))

describe("<IndexWorkouts />", () => {
  const mockWorkouts = [
    {
      id: 1,
      name: "test1",
      workout_type: "testa",
      duration: 1800,
      schedule: "2023-04-18 00:00",
      description: "easy day",
      user_id: 1
    },
    {
      id: 2,
      name: "test2",
      workout_type: "testb",
      duration: 1800,
      schedule: "2023-04-18 10:00",
      description: "medium day",
      user_id: 2
    },
    {
      id: 3,
      name: "test3",
      workout_type: "testc",
      duration: 1800,
      schedule: "2023-04-18 08:00",
      description: "hard day",
      user_id: 1
    },
    {
      id: 4,
      name: "test4",
      workout_type: "testd",
      duration: 1800,
      schedule: "2023-04-18 18:00",
      description: "rest day",
      user_id: 2
    }
  ]

  const renderIn = () => {
    render(
      <MemoryRouter initialEntries={["/workoutindex"]}>
        <Routes>
          <Route path="/workoutindex" element={<IndexWorkouts
            logged_in={true}
            workouts={mockWorkouts}
            current_user={{ name: "tester", id: 1 }}
            toggleNewWorkout={toggleModalSpy}
          />}
          />
          <Route path="/workoutshow/:id" element={<Outlet/>} />
        </Routes>
      </MemoryRouter>
    )
  }

  const renderOut = () => {
    render(
      <MemoryRouter initialEntries={["/workoutindex"]}>
        <Routes>
          <Route path="/workoutindex" element={
            <IndexWorkouts
              logged_in={false}
              workouts={mockWorkouts}
              current_user={{}}
              toggleNewWorkout={toggleModalSpy}
            />}
          />
          <Route path="/workoutshow/:id" element={<Outlet/>}/>
        </Routes>
      </MemoryRouter>
    )
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders when logged in", () => {
    renderIn()
  })

  it("renders when logged out", () => {
    renderOut()
  })

  it("opens the modal when the button is clicked", async () => {
    const user = userEvent.setup()
    renderIn()

    let newWorkoutButton = screen.getByRole('button', {
      name: /create new workout/i
    })

    await user.click(newWorkoutButton)

    expect(toggleModalSpy).toHaveBeenCalled()
  })

  it("displays all workouts when the button is clicked", async () => {
    const user = userEvent.setup()
    renderIn()

    let toggleButton = screen.getByRole('button', {
      name: /all workouts/i
    })

    let card1Heading = screen.getByRole('heading', {
      name: /test1/i
    })

    let card2Heading = screen.getByRole('heading', {
      name: /test2/i
    })

    let card3Heading = screen.getByRole('heading', {
      name: /test3/i
    })

    let card4Heading = screen.getByRole('heading', {
      name: /test4/i
    })

    await user.click(toggleButton)

    let allButton = screen.getByRole('menuitem', {
      name: /all workouts/i,
    })

    await user.click(allButton)

    let cards = screen.getAllByRole('link')

    expect(card1Heading).toBeInTheDocument
    expect(card2Heading).toBeInTheDocument
    expect(card3Heading).toBeInTheDocument
    expect(card4Heading).toBeInTheDocument
    expect(cards).toHaveLength(4)
  })

  it("displays only my workouts when the button is clicked", async () => {
    const user = userEvent.setup()
    renderIn()

    let toggleButton = screen.getByRole('button', {
      name: /all workouts/i
    })

    let card1Heading = screen.getByRole('heading', {
      name: /test1/i
    })

    let card2Heading = screen.getByRole('heading', {
      name: /test2/i
    })

    let card3Heading = screen.getByRole('heading', {
      name: /test3/i
    })

    let card4Heading = screen.getByRole('heading', {
      name: /test4/i
    })

    await user.click(toggleButton)
    let mineButton = screen.getByRole('menuitem', {
      name: /my workouts/i
    })

    await user.click(mineButton)
    
    let cards = screen.getAllByRole('link')

    expect(card1Heading).toBeInTheDocument
    expect(card2Heading).not.toBeInTheDocument
    expect(card3Heading).toBeInTheDocument
    expect(card4Heading).not.toBeInTheDocument
    expect(cards).toHaveLength(2)
  })

  it("has a link for each workout to view details", async () => {
    const user = userEvent.setup()
    renderIn()

    let links = screen.getAllByRole('link', { name: /see details/i })

    expect(links).toHaveLength(4)

    expect(links[0]).toHaveAttribute('href', `/workoutshow/1`)

    await user.click(links[0])

    expect(mockUseNavigate).toHaveBeenCalled
  })

})