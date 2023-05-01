import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import EditWorkout from "../components/pages/EditWorkout"
import { MemoryRouter, Routes, Route } from "react-router-dom"

const updateWorkoutSpy = jest.fn()
const mockUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}))

describe("<EditWorkout />", () => {
  const mockWorkouts = [
    {
      id: 1,
      name: "test1",
      workout_type: "testa",
      duration: "01:20",
      schedule_date: "2023-04-18",
      schedule_time: "00:00",
      description: "easy day",
      user_id: 1
    },
    {
      id: 2,
      name: "test2",
      workout_type: "testb",
      duration: "00:45",
      schedule_date: "2023-04-18",
      schedule_time: "10:00",
      description: "medium day",
      user_id: 2
    }
  ]

  const renderComponent = () => {
    render(
      <MemoryRouter initialEntries={["/workoutedit/1"]}>
        <Routes>
          <Route
            path="/workoutedit/:id"
            element={
              <EditWorkout
                workouts={mockWorkouts}
                current_user={{ name: "tester", id: 1 }}
                updateWorkout={updateWorkoutSpy}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    )
  }

  const emptyRender = () => {
    render(
      <MemoryRouter initialEntries={["/workoutedit/1"]}>
        <Routes>
          <Route
            path="/workoutedit/:id"
            element={
              <EditWorkout
                workouts={[]}
                current_user={{ name: "tester", id: 1 }}
                updateWorkout={updateWorkoutSpy}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    )
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("it renders without crashing", () => {
    renderComponent()
  })

  it('displays a form for entering updates', () => {
    renderComponent()

    let headingElement = screen.getByRole('heading', { name: /edit a workout/i })
    expect(headingElement).toBeInTheDocument()

    let workoutNameLabel = screen.getByText(/workout name/i)
    expect(workoutNameLabel).toBeInTheDocument()
 
    let workoutTypeLabel = screen.getByText(/workout type/i)
    expect(workoutTypeLabel).toBeInTheDocument()
  
    let scheduleDateLabel = screen.getByText(/schedule date/i)
    expect(scheduleDateLabel).toBeInTheDocument()

    let scheduleTimeLabel = screen.getByText(/schedule time/i)
    expect(scheduleTimeLabel).toBeInTheDocument()
 
    let descriptionLabel = screen.getByText(/description/i)
    expect(descriptionLabel).toBeInTheDocument()
 
    let durationLabel = screen.getByText(/duration/i)
    expect(durationLabel).toBeInTheDocument()
  })

  it("has buttons for interaction", () => {
    renderComponent()

    let submitButton = screen.getByRole('button', {
      name: /submit/i
    })

    let cancelButton = screen.getByRole('button', {
      name: /cancel/i
    })

    expect(submitButton).toBeInTheDocument
    expect(cancelButton).toBeInTheDocument
  })

  it("allows the user to edit and submit", async () => {
    const user = userEvent
    renderComponent()
  
    let workoutNameInput = screen.getByLabelText(/workout name/i)
    let workoutTypeInput = screen.getByLabelText(/workout type/i)
    let scheduleDateInput = screen.getByLabelText(/schedule date/i)
    let scheduleTimeInput = screen.getByLabelText(/schedule time/i)
    let descriptionInput = screen.getByLabelText(/description/i)
    let durationInput = screen.getByLabelText(/duration/i)
  
    let submitButton = screen.getByRole('button', { name: /submit/i })
  
    await user.type(workoutNameInput, mockWorkouts[1].name)
    await user.type(workoutTypeInput, mockWorkouts[1].workout_type)
    await user.type(scheduleDateInput, mockWorkouts[1].schedule_date)
    await user.type(scheduleTimeInput, mockWorkouts[1].schedule_time)
    await user.type(descriptionInput, mockWorkouts[1].description)
    await user.type(durationInput, mockWorkouts[1].duration)
  
    expect(workoutNameInput).toHaveValue(mockWorkouts[1].name)
    expect(workoutTypeInput).toHaveValue(mockWorkouts[1].workout_type)
    expect(scheduleDateInput).toHaveValue(mockWorkouts[1].schedule_date)
    expect(scheduleTimeInput).toHaveValue(mockWorkouts[1].schedule_time)
    expect(descriptionInput).toHaveValue(mockWorkouts[1].description)
    expect(durationInput).toHaveValue(mockWorkouts[1].duration)
  
    await user.click(submitButton)
    expect(updateWorkoutSpy).toHaveBeenCalled()
  })

  it("allows the user to cancel updates", async () => {
    const user = userEvent
    renderComponent()

    let cancelButton = screen.getByRole('button', {
      name: /cancel/i
    })

    await user.click(cancelButton)

    expect(mockUseNavigate).toHaveBeenCalled()
  })

  it("doesn't render an empty workout", async () => {
    const user = userEvent.setup()
    emptyRender()
   
    let submitButton = screen.getByRole('button', { name: /submit/i })

    await user.click(submitButton)

    expect(updateWorkoutSpy).not.toHaveBeenCalled()
  })
})
