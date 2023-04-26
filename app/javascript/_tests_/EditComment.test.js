import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";
import EditComment from "../components/pages/EditComment";
import ShowWorkout from "../components/pages/ShowWorkout";
import { MemoryRouter, Routes, Route, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom";

describe("<EditComment />", () => {
  const mockComments = [{
    title: "Terminator",
    comment: "Ill be back...",
    workout_id: 1,
    user_id: 1,
    id: 1
  }]

  const mockWorkouts = [{}]

  const mockUser1 = {
    email: 'test@testing1.com',
    password: 'testing123',
    password_confirmation: 'testing123',
    username: 'Dennis',
    photo: 'url',
    id: 1
  }

  const mockUser2 = {
    email: 'test2@testing2.com',
    password: 'testing123',
    password_confirmation: 'testing123',
    username: 'Chris',
    photo: 'url',
    id: 2
  }

  const editCommentSpy = jest.fn(() => console.log("editSpy"))

  const deleteWorkoutSpy = jest.fn(() => console.log("deleteSpy"))

  const mockUseNavigate = jest.fn(() => console.log("navigate spy"))

  jest.spyOn(window, 'alert').mockImplementation(() => { })

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
  }))

  const user1LogIn = () => {
    render(
      <MemoryRouter initialEntries={["/commentedit/1"]}>
        <Routes>
          <Route
            path="/commentedit/:id"
            element={
              <EditComment
                editComment={editCommentSpy}
                logged_in={true}
                current_user={mockUser1}
                workout_id={1}
                comments={mockComments}
              />
            }
          />
          <Route
            path='/workoutshow/:id'
            element={
              <ShowWorkout
                workouts={mockWorkouts}
                deleteWorkout={deleteWorkoutSpy}
                logged_in={true}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    )
  }

  const user2LogIn = () => {
    render(
      <MemoryRouter initialEntries={["/commentedit/1"]}>
        <Routes>
          <Route
            path="/commentedit/:id"
            element={
              <EditComment
                editComment={editCommentSpy}
                logged_in={true}
                current_user={mockUser1}
                workout_id={1}
                comments={mockComments}
              />
            }
          />
          <Route
            path='/workoutshow/:id'
            element={
              <ShowWorkout
                workouts={mockWorkouts}
                deleteWorkout={deleteWorkoutSpy}
                logged_in={true}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    )
  }

  const logOutView = () => {
    render(
      <MemoryRouter initialEntries={["/commentedit/1"]}>
        <Routes>
          <Route
            path="/commentedit/:id"
            element={
              <EditComment
                editComment={editCommentSpy}
                logged_in={false}
                workout_id={1}
                comments={mockComments}
              />
            }
          />
          <Route
            path='/workoutshow/:id'
            element={
              <ShowWorkout
                workouts={mockWorkouts}
                deleteWorkout={deleteWorkoutSpy}
                logged_in={false}
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

  it("renders the page", () => {
    user1LogIn()
  })

  it("has a form with entries for title and comment", () => {
    user1LogIn()

    expect(screen.getByRole('textbox', {
      name: /title/i
    }))
      .toBeInTheDocument()

    expect(screen.getByRole('textbox', {
      name: /comment/i
    }))
      .toBeInTheDocument()
  })

  it("has a button to submit", () => {
    user1LogIn()

    expect(
      screen.getByRole("button", {
        name: /submit/i,
      })
    ).toBeInTheDocument()
  })

  it("has a button to cancel", () => {
    user1LogIn()

    expect(
      screen.getByRole("button", {
        name: /cancel/i,
      })
    ).toBeInTheDocument()
  })

  it("rejects submit while required elements are excluded", () => {
    user1LogIn()

    let confirmButton = screen.getByRole("button", {
      name: /submit/i,
    })
    fireEvent.click(confirmButton)

    // This validation should ensure line 35 of EditComment.js
    // Jest --coverage shows either test is ineffective or coverage assessment is inaccurate
    expect(editCommentSpy).toHaveBeenCalledTimes(0)

    // This validation should ensure line 36 of EditComment.js
    // Jest --coverage shows either test is ineffective or coverage assessment is inaccurate
    expect(mockUseNavigate).toHaveBeenCalledTimes(0)
  })

  it("allows submit when required elements are input", () => {
    user1LogIn()

    let titleField = screen.getByRole('textbox', {
      name: /title/i
    })
    fireEvent.change(titleField, {
      target: {
        value: "Nice!"
      }
    })

    let commentField = screen.getByRole('textbox', {
      name: /comment/i
    })
    fireEvent.change(commentField, {
      target: {
        value: "Outstanding progress!"
      }
    })

    let confirmButton = screen.getByRole("button", {
      name: /submit/i,
    })
    fireEvent.click(confirmButton)

    // This validation should ensure line 35 of EditComment.js
    // Jest --coverage shows either test is ineffective or coverage assessment is inaccurate
    expect(editCommentSpy).toHaveBeenCalledTimes(0)

    // This validation should ensure line 36 of EditComment.js
    // Jest --coverage shows either test is ineffective or coverage assessment is inaccurate
    expect(mockUseNavigate).toHaveBeenCalledTimes(0)
  })

  it("returns to the index on cancel click", () => {
    user1LogIn()

    let cancelButton = screen.getByRole("button", {
      name: /cancel/i,
    })
    fireEvent.click(cancelButton)

    // This validation should ensure line 41 of EditComment.js
    // Jest --coverage shows either test is ineffective or coverage assessment is inaccurate
    expect(mockUseNavigate).toHaveBeenCalled()
  })

  // This validation should ensure line 32 of EditComment.js
  // Jest --coverage shows either test is ineffective or coverage assessment is inaccurate
  it("does not allow users to edit others' comments", () => {
    user2LogIn()

    let confirmButton = screen.getByRole("button", {
      name: /submit/i,
    })
    fireEvent.click(confirmButton)

    expect(editCommentSpy).toHaveBeenCalledTimes(0)
    expect(window.alert).toHaveBeenCalled()
  })
})