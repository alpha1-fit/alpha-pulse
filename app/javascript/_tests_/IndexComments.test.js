import React from 'react'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import IndexComments from "../components/pages/IndexComments"
import "@testing-library/jest-dom"

describe("<IndexWorkouts />", () => {
  const testUser = {username: 'Dennis', id: 1}
  const myTestComment = {title: 'Terminator', comment: 'Ill be back...', workout_id: 1, user_id: 1, id: 1}
  const otherTestComment = {title: 'Zen', comment: 'what a great stretch!', workout_id: 1, user_id: 3, id: 1}

  it("renders the component", () => {
    render(
      <BrowserRouter>
        <IndexComments logged_in={true} current_user={testUser} comments={[myTestComment, otherTestComment]}/>
      </BrowserRouter>)
  })

  it("renders when logged out", () => {
    render(
      <BrowserRouter>
        <IndexComments logged_in={false} current_user={testUser} comments={[myTestComment, otherTestComment]}/>
      </BrowserRouter>)
  })
})