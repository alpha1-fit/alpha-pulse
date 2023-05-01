import React from "react"
import { render, screen } from "@testing-library/react"
import ShowWorkout from "../components/pages/ShowWorkout"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import userEvent from "@testing-library/user-event"

const mockDeleteWorkout = jest.fn()
const mockDeleteComment = jest.fn()
const mockUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}))
jest.spyOn(window, 'alert').mockImplementation(() => { })

describe("<ShowWorkout />", () => {
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
    }
  ]

  const mockComments = [
    {
      title: "comment1",
      comment: "commenta",
      workout_id: 1,
      user_id: 1
    },
    {
      title: "comment2",
      comment: "commentb",
      workout_id: 1,
      user_id: 2
    }
  ]

  afterEach(() => {
    jest.clearAllMocks()
  })

  const renderIn = () => {
    render(
      <MemoryRouter initialEntries={["/workoutshow/1"]}>
        <Routes>
          <Route
            path="/workoutshow/:id"
            element={<ShowWorkout
              workouts={mockWorkouts}
              logged_in={true}
              deleteWorkout={mockDeleteWorkout}
              comments={mockComments}
              deleteComment={mockDeleteComment}
              current_user={{id: 1}}
            />}
          />
          <Route path="/workoutindex" />
          <Route path="/workoutedit/:id" />
          <Route path="/commentnew" />
        </Routes>
      </MemoryRouter>
    )
  }

  const renderOut = () => {
    render(
      <MemoryRouter initialEntries={["/workoutshow/1"]}>
        <Routes>
          <Route
            path="/workoutshow/:id"
            element={<ShowWorkout
              workouts={mockWorkouts}
              logged_in={false}
              deleteWorkout={mockDeleteWorkout}
              comments={mockComments}
              deleteComment={mockDeleteComment}
              current_user={{}}
            />}
          />
          <Route path="/workoutindex" />
          <Route path="/workoutedit/:id" />
          <Route path="/commentnew" />
        </Routes>
      </MemoryRouter>
    )
  }

  it("allows users to view a workout", () => {
    renderIn()
  })

  it("allows visitors to view a demo", () => {
    renderOut()
  })

  it("shows an alert for visitors trying to delete a workout", async () => {
    const user = userEvent.setup()
    renderOut()

    let newCommentButton = screen.getByRole('link', {
      name: /add a comment/i
    })

    let editWorkoutButton = screen.getByRole('link', {
      name: /edit a workout/i
    })

    let deleteButton = screen.getByRole('button', {
      name: /delete workout profile/i
    })

    await user.click(deleteButton)

    expect(alert)
  })

  it("allows a user to delete one of their workouts", async () => {
    const user = userEvent.setup()
    renderIn()


    let deleteButton = screen.getByRole('button', {
      name: /delete workout profile/i
    })

    await user.click(deleteButton)

    expect(mockDeleteWorkout).toHaveBeenCalled()
    expect(mockUseNavigate).toHaveBeenCalled()
  })

})
