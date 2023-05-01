import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateComment from "../components/pages/CreateComment";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "@testing-library/jest-dom";

const createCommentSpy = jest.fn()

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}))


describe("<CreateComment />", () => {
  const mockComment = {
    title: "Terminator",
    comment: "Ill be back...",
    workout_id: 1,
    user_id: 1
  }

  const mockUser1 = {
    email: 'test@testing1.com',
    id: 1
  }

  const renderIn = () => {
    render(
      <BrowserRouter>
        <CreateComment
          createComment={createCommentSpy}
          logged_in={true}
          current_user={mockUser1}
          workout_id={1} />
      </BrowserRouter>
    )
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders the page", () => {
    renderIn()
  })

  it("has a form with entries for title and comment", () => {
    renderIn()

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
    renderIn()

    expect(
      screen.getByRole("button", {
        name: /submit/i,
      })
    ).toBeInTheDocument
  })

  it("has a button to cancel", () => {
    renderIn()

    expect(
      screen.getByRole("button", {
        name: /cancel/i,
      })
    ).toBeInTheDocument
  })

  it("allows data entry and submission", async () => {
    const user = userEvent.setup()
    renderIn()


    let titleBox = screen.getByRole('textbox', {
      name: /title/i
    })

    let commentBox = screen.getByRole('textbox', {
      name: /comment/i
    })

    let confirmButton = screen.getByRole("button", {
      name: /submit/i,
    })

    await user.type(titleBox, mockComment.title)
    await user.type(commentBox, mockComment.comment)
    await user.click(confirmButton)

    expect(titleBox).toHaveValue(mockComment.title)
    expect(commentBox).toHaveValue(mockComment.comment)
    expect(createCommentSpy).toHaveBeenCalled()
    expect(mockUseNavigate).toHaveBeenCalled()
  })

  it("returns to the index on cancel click", async () => {
    const user = userEvent.setup()
    renderIn()

    let cancelButton = screen.getByRole("button", {
      name: /cancel/i,
    })
    await user.click(cancelButton)

    expect(mockUseNavigate).toHaveBeenCalled()
  })
})
