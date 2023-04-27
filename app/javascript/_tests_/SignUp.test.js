import React from "react";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import SignUp from "../components/components/SignUp";

const createUserSpy = jest.fn()

const toggleModalSpy = jest.fn()

describe("<SignUp />", () => {
  const renderModal = () => {
    render(
      <BrowserRouter>
        <SignUp createUser={createUserSpy} toggle={toggleModalSpy} />
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

    let usernameInput = screen.getByRole('textbox', {
      name: /username/i
    })

    let emailInput = screen.getByRole('textbox', {
      name: /email/i
    })
    
    let photoInput = screen.getByRole('textbox', {
      name: /photo/i
    })

    let passwordInput = screen.getByLabelText("Password");
    
    let password_confirmationInput = screen.getByLabelText(/confirm password/i)

    expect(usernameInput).toBeInTheDocument
    expect(emailInput).toBeInTheDocument
    expect(photoInput).toBeInTheDocument
    expect(passwordInput).toBeInTheDocument
    expect(password_confirmationInput).toBeInTheDocument
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

    expect(createUserSpy).toHaveBeenCalledTimes(0)
    expect(toggleModalSpy).toHaveBeenCalledTimes(1)
  })

  it("Allows form entry", () => {
    renderModal()

    let newUsername = "tester"

    let usernameInput = screen.getByRole('textbox', {
      name: /username/i
    })

    fireEvent.change(usernameInput, {
      target: {
        value: newUsername
      }
    })

    expect(usernameInput).toHaveValue(newUsername)
  })

  it("Submits data when submit is clicked", () => {
    renderModal()

    let mockUser = {
      email: "test1@gmail.com",
      username: "test1",
      photo: "url",
      password: "abc123",
      password_confirmation: "abc123"
    }

    let usernameInput = screen.getByRole('textbox', {
      name: /username/i
    })
    let emailInput = screen.getByRole('textbox', {
      name: /email/i
    })
    let photoInput = screen.getByRole('textbox', {
      name: /photo/i
    })
    let passwordInput = screen.getByLabelText("Password")
    let password_confirmationInput = screen.getByLabelText(/confirm password/i)

    fireEvent.change(usernameInput, {
      target: {
        value: mockUser.username
      }
    })
    fireEvent.change(emailInput, {
      target: {
        value: mockUser.email
      }
    })
    fireEvent.change(photoInput, {
      target: {
        value: mockUser.photo
      }
    })
    fireEvent.change(passwordInput, {
      target: {
        value: mockUser.password
      }
    })
    fireEvent.change(password_confirmationInput, {
      target: {
        value: mockUser.password_confirmation
      }
    })

    let submitButton = screen.getByRole('button', {
      name: /submit/i
    })

    fireEvent.click(submitButton)

    expect(createUserSpy).toHaveBeenCalledTimes(1)
    expect(toggleModalSpy).toHaveBeenCalledTimes(1)
  })
})