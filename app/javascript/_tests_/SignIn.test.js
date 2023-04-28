import React from "react";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import SignIn from "../components/components/SignIn";

const createSessionSpy = jest.fn()

const toggleModalSpy = jest.fn()

describe("<SignIn />", () => {
  const renderModal = () => {
    render(
      <BrowserRouter>
        <SignIn newSession={createSessionSpy} toggle={toggleModalSpy} />
      </BrowserRouter>
    )
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("Renders without crashing", () => {
    renderModal()
  })

  it("Has a form for entering data", () => {
    renderModal()

    let emailInput = screen.getByRole('textbox', {
      name: /email/i
    })

    let passwordInput = screen.getByLabelText("Password");

    expect(emailInput).toBeInTheDocument
    expect(passwordInput).toBeInTheDocument
  })

  it("Has form buttons", () => {
    renderModal()

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

  it("Closes without action when the x or cancel is clicked", () => {
    renderModal()
    let closeButton = screen.getByRole('button', {
      name: /close/i
    })
    fireEvent.click(closeButton)

    expect(createSessionSpy).toHaveBeenCalledTimes(0)
    expect(toggleModalSpy).toHaveBeenCalledTimes(1)
  })

  it("Allows form entry", () => {
    renderModal()

    let userEmail = "test@gmail.com"

    let userPassword = "abc123"

    let emailInput = screen.getByRole('textbox', {
      name: /email/i
    })

    let passwordInput = screen.getByLabelText("Password")


    fireEvent.change(emailInput, {
      target: {
        value: userEmail
      }
    })

    fireEvent.change(passwordInput, {
      target: {
        value: userPassword
      }
    })

    expect(emailInput).toHaveValue(userEmail)
    expect(passwordInput).toHaveValue(userPassword)
  })

  it("Submits data when submit is clicked", () => {
    renderModal()

    let userEmail = "test@gmail.com"

    let userPassword = "abc123"

    let emailInput = screen.getByRole('textbox', {
      name: /email/i
    })

    let passwordInput = screen.getByLabelText("Password")


    fireEvent.change(emailInput, {
      target: {
        value: userEmail
      }
    })

    fireEvent.change(passwordInput, {
      target: {
        value: userPassword
      }
    })

    let submitButton = screen.getByRole('button', {
      name: /submit/i
    })

    fireEvent.click(submitButton)

    expect(createSessionSpy).toHaveBeenCalledTimes(1)
    expect(toggleModalSpy).toHaveBeenCalledTimes(1)
  })
})