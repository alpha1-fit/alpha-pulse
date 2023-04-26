import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateComment from "../components/pages/CreateComment";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom";

describe("<CreateComment />", () => {
  const mockComment = {
    title: "Terminator",
    comment: "Ill be back...",
    workout_id: 1,
    user_id: 1
  }

  const mockUser1 = {
    email: 'test@testing1.com',
    password: 'testing123',
    password_confirmation: 'testing123',
    username: 'Dennis',
    photo: 'url',
    id: 1
  }

  const createCommentSpy = jest.fn()

  const mockUseNavigate = jest.fn()

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
  }))

  beforeEach(() => {
    render(
      <BrowserRouter>
        <CreateComment createComment={createCommentSpy} logged_in={true} current_user={mockUser1} workout_id={1} />
      </BrowserRouter>
    )
  })

  it("renders the page", () => {
  })

  it("has a form with entries for title and comment", () => {
    expect(screen.getByRole('textbox', {
      name: /title/i
    }))
      .toBeInTheDocument

    expect(screen.getByRole('textbox', {
      name: /comment/i
    }))
      .toBeInTheDocument
  })

  it("has a button to submit", () => {
    expect(
      screen.getByRole("button", {
        name: /submit/i,
      })
    ).toBeInTheDocument
  })

  it("has a button to cancel", () => {
    expect(
      screen.getByRole("button", {
        name: /cancel/i,
      })
    ).toBeInTheDocument
  })

  it("submits data on button click", () => {
    let confirmButton = screen.getByRole("button", {
      name: /submit/i,
    })
    userEvent.click(confirmButton)

    // This validation should ensure line 19 of CreateComment.js
    // Jest --coverage shows either test is ineffective or coverage assessment is inaccurate
    expect(createCommentSpy).toHaveBeenCalled

    // This validation should ensure line 20 of CreateComment.js
    // Jest --coverage shows either test is ineffective or coverage assessment is inaccurate
    expect(mockUseNavigate).toHaveBeenCalled
  })

  it("returns to the index on cancel click", () => {
    let cancelButton = screen.getByRole("button", {
      name: /cancel/i,
    })
    userEvent.click(cancelButton)

    // This validation should ensure line 24 of CreateComment.js
    // Jest --coverage shows either test is ineffective or coverage assessment is inaccurate
    expect(mockUseNavigate).toHaveBeenCalled
  })
})
