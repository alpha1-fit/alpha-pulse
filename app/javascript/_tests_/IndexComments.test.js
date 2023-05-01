import React from 'react'
import { render, screen } from "@testing-library/react"
import { BrowserRouter, useNavigate } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import IndexComments from "../components/pages/IndexComments"
import "@testing-library/jest-dom"

const deleteCommentSpy = jest.fn()
const mockUseNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}))

describe("<IndexWorkouts />", () => {
  const testUser = { username: 'Dennis', id: 1 }
  const myTestComment = { title: 'Terminator', comment: 'Ill be back...', workout_id: 1, user_id: 1, id: 1 }
  const otherTestComment = { title: 'Zen', comment: 'what a great stretch!', workout_id: 1, user_id: 3, id: 2 }

  const renderIn = () => {
    render(
      <BrowserRouter>
        <IndexComments current_user={testUser} comments={[myTestComment, otherTestComment]} deleteComment={deleteCommentSpy}/>
      </BrowserRouter>
    )
  }

  const renderOut = () => {
    render(
      <BrowserRouter>
        <IndexComments current_user={{}} comments={[myTestComment, otherTestComment]} deleteComment={deleteCommentSpy}/>
      </BrowserRouter>
    )
  }

  it("renders when logged in", () => {
    renderIn()
  })

  it("renders when logged out", () => {
    renderOut()
  })

  it("renders cards", () => {
    renderIn()

    let card1 = screen.getByRole('heading', {
      name: /terminator/i
    })

    let card2 = screen.getByRole('heading', {
      name: /zen/i
    })

    expect(card1).toBeInTheDocument
    expect(card2).toBeInTheDocument
  })

  it("allows users to edit their own comments", async () => {
    const user = userEvent.setup()
    renderIn()

    let editButton = screen.getByRole('link', {
      name: /edit/i
    })

    await user.click(editButton)

    expect(mockUseNavigate).toHaveBeenCalled

  })

  it("allows users to delete their own comments", async () => {
    const user = userEvent.setup()
    renderIn()

    let deleteButton = screen.getByRole('button', {
      name: /delete/i
    })

    await user.click(deleteButton)

    expect(deleteCommentSpy).toHaveBeenCalled()

  })
})