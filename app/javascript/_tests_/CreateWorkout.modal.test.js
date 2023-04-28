import React from "react";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import CreateWorkout from "../components/components/CreateWorkout";

const createWorkoutSpy = jest.fn()

const toggleModalSpy = jest.fn()

jest.spyOn(window, 'alert').mockImplementation(() => { })

describe("<CreateWorkout />", () => {
  const renderIn = () => {
    render(
      <BrowserRouter>
        <CreateWorkout logged_in={true} current_user={{ name: "tester", id: 1 }} createWorkout={createWorkoutSpy} toggle={toggleModalSpy} />
      </BrowserRouter>
    )
  }

  const renderOut = () => {
    render(
      <BrowserRouter>
        <CreateWorkout logged_in={false} current_user={{}} createWorkout={createWorkoutSpy} toggle={toggleModalSpy} />
      </BrowserRouter>
    )
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("Renders without crashing", () => {
    renderIn()
  })

  it("Has a form for entering data", () => {
    renderIn()

    let header = screen.getByRole('heading', {
      name: /new workout!/i
    })
    let nameBox = screen.getByRole('textbox', {
      name: /name/i
    })
    let typeBox = screen.getByRole('textbox', {
      name: /workout type/i
    })
    let durationBox = screen.getByLabelText(/duration/i)
    let dateBox = screen.getByLabelText(/scheduled date/i)
    let timeBox = screen.getByLabelText(/scheduled time/i)
    let descriptionBox = screen.getByRole('textbox', {
      name: /description/i
    })

    expect(header).toBeInTheDocument
    expect(nameBox).toBeInTheDocument
    expect(typeBox).toBeInTheDocument
    expect(durationBox).toBeInTheDocument
    expect(dateBox).toBeInTheDocument
    expect(timeBox).toBeInTheDocument
    expect(descriptionBox).toBeInTheDocument
  })

  it("Has form buttons", () => {
    renderIn()

    let closeButton = screen.getByRole('button', {
      name: /close/i
    })
    let submitButton = screen.getByRole('button', {
      name: /submit/i
    })
    let cancelButton = screen.getByRole('button', {
      name: /cancel/i
    })

    expect(closeButton).toBeInTheDocument
    expect(submitButton).toBeInTheDocument
    expect(cancelButton).toBeInTheDocument
  })

  it("Closes without action when the x is clicked", () => {
    renderIn()
    let closeButton = screen.getByRole('button', {
      name: /close/i
    })
    fireEvent.click(closeButton)

    expect(createWorkoutSpy).toHaveBeenCalledTimes(0)
    expect(toggleModalSpy).toHaveBeenCalledTimes(1)
  })

  it("Closes without action when the cancel is clicked", () => {
    renderIn()
    let cancelButton = screen.getByRole('button', {
      name: /cancel/i
    })
    fireEvent.click(cancelButton)

    expect(createWorkoutSpy).toHaveBeenCalledTimes(0)
    expect(toggleModalSpy).toHaveBeenCalledTimes(1)
  })

  it("Allows form entry", async () => {
    const user = userEvent.setup()
    renderIn()
    let newWorkout = {
      name: "Easy",
      workout_type: "lift",
      duration: "01:15",
      schedule_date: "2023-04-18",
      schedule_time: "10:00",
      description: "Hard",
      id: 1
    }

    let nameBox = screen.getByRole('textbox', {
      name: /name/i
    })
    let typeBox = screen.getByRole('textbox', {
      name: /workout type/i
    })
    let durationBox = screen.getByLabelText(/duration/i)
    let dateBox = screen.getByLabelText(/scheduled date/i)
    let timeBox = screen.getByLabelText(/scheduled time/i)
    let descriptionBox = screen.getByRole('textbox', {
      name: /description/i
    })

    await user.type(nameBox, newWorkout.name)
    await user.type(typeBox, newWorkout.workout_type)
    await user.type(durationBox, newWorkout.duration)
    await user.type(dateBox, newWorkout.schedule_date)
    await user.type(timeBox, newWorkout.schedule_time)
    await user.type(descriptionBox, newWorkout.description)

    expect(nameBox).toHaveValue(newWorkout.name)
    expect(typeBox).toHaveValue(newWorkout.workout_type)
    expect(durationBox).toHaveValue(newWorkout.duration)
    expect(dateBox).toHaveValue(newWorkout.schedule_date)
    expect(timeBox).toHaveValue(newWorkout.schedule_time)
    expect(descriptionBox).toHaveValue(newWorkout.description)
  })

  it("Creates an alert when a non-user clicks submit", async () => {
    const user = userEvent.setup()
    renderOut()

    let submitButton = screen.getByRole('button', {
      name: /submit/i
    })

    await user.click(submitButton)

    expect(window.alert).toHaveBeenCalled()
  })

  it("Allows users to submit a new workout", async () => {
    const user = userEvent.setup()
    renderIn()

    let submitButton = screen.getByRole('button', {
      name: /submit/i
    })

    await user.click(submitButton)

    expect(createWorkoutSpy).toHaveBeenCalled()
  })
})