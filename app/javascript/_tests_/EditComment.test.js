import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";
import EditComment from "../components/pages/EditComment";
import { MemoryRouter, Routes, Route, Outlet } from "react-router-dom";
import "@testing-library/jest-dom";

const editCommentSpy = jest.fn()

const deleteWorkoutSpy = jest.fn()

const mockUseNavigate = jest.fn()

jest.spyOn(window, 'alert').mockImplementation(() => { })

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}))

describe("<EditComment />", () => {
  const mockComments = [{
    title: "Terminator",
    comment: "Ill be back...",
    workout_id: 1,
    user_id: 1,
    id: 1
  }]

  const newComment = {
    title: "Nice!",
    comment: "Great work!"
  }

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
            element={ <Outlet/ > }
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
                current_user={mockUser2}
                workout_id={1}
                comments={mockComments}
              />
            }
          />
          <Route
            path='/workoutshow/:id'
            element={ <Outlet/ > }
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
            element={ <Outlet/ > }
          />
        </Routes>
      </MemoryRouter>
    )
  }

  const noComments = () => {
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
                comments={[]}
              />
            }
          />
          <Route
            path='/workoutshow/:id'
            element={ <Outlet/ > }
          />
        </Routes>
      </MemoryRouter>
    )
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders the page", () => {
    logOutView()
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

  it("allows submit when required elements are input", async () => {
    const user = userEvent.setup()
    user1LogIn()

    let titleField = screen.getByRole('textbox', {
      name: /title/i
    })
    await user.type(titleField, newComment.title)

    expect(titleField).toHaveValue(newComment.title)

    let commentField = screen.getByRole('textbox', {
      name: /comment/i
    })
    await user.type(commentField, newComment.comment)

    expect(commentField).toHaveValue(newComment.comment)

    let confirmButton = screen.getByRole("button", {
      name: /submit/i,
    })
    await user.click(confirmButton)

    expect(editCommentSpy).toHaveBeenCalled()
    expect(mockUseNavigate).toHaveBeenCalled()
  })

  it("returns to the index on cancel click", async () => {
    const user = userEvent.setup()
    user1LogIn()

    let cancelButton = screen.getByRole("button", {
      name: /cancel/i,
    })
    await user.click(cancelButton)

    expect(mockUseNavigate).toHaveBeenCalled()
  })

  it("provides an alert if there are no comments", () => {
    noComments()
    expect(window.alert).toHaveBeenCalled()
  })

  it("does not allow users to edit others' comments", async () => {
    const user = userEvent.setup()
    user2LogIn()

    let confirmButton = screen.getByRole("button", {
      name: /submit/i,
    })
    await user.click(confirmButton)

    expect(editCommentSpy).toHaveBeenCalledTimes(0)
    expect(window.alert).toHaveBeenCalled()
  })
})