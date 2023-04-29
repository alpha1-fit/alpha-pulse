import React, { useState } from "react"
import { FormGroup, Label, Input, Form, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const SignIn = ({ newSession, toggle }) => {
  const [sessionUser, setSessionUser] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setSessionUser({...sessionUser, [e.target.name]: e.target.value })
  }

  const toggleModal = () => {
    toggle()
  }

  const handleSubmit = async () => {
    await newSession({ user: sessionUser })
    toggle()
  }

  return (
    <div className="sign-in" id="sign-in-modal">
      <Modal isOpen={true} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Sign In!</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="email">email</Label>
              <Input id="email" name="email" placeholder="email" type="email" required={true} autoComplete='username' onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" placeholder="password" type="password" required={true} autoComplete='new-password' onChange={handleChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default SignIn