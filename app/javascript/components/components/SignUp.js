import React, { useState } from 'react'
import { FormGroup, Label, Input, Form, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const SignUp = ({ createUser, toggle }) => {

  const [newUser, setNewUser] = useState({
    email: "",
    username: "",
    photo: "https://previews.123rf.com/images/apoev/apoev1805/apoev180500010/101108029-default-placeholder-fitness-trainer-in-a-t-shirt-half-length-portrait-photo-avatar-gray-color.jpg",
    password: "",
    password_confirmation: ""
  }
  )

  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createUser({user: newUser})
    toggle()
  }

  const toggleModal = () => {
    toggle()
  }

  return (
    <div className='sign-up' id="sign-up-modal">
      <Modal isOpen={true} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Sign Up!</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" placeholder="username" type="text" required={true} autoComplete='username' onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">email</Label>
              <Input id="email" name="email" placeholder="email" type="email" required={true} autoComplete='username' onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="photo">Photo</Label>
              <Input id="photo" name="photo" placeholder="photo" type="text" required={true} autoComplete='username' onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" placeholder="password" type="password" required={true} autoComplete='new-password' onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password_confirmation">Confirm password</Label>
              <Input id="password_confirmation" name="password_confirmation" placeholder="password_confirmation" type="password" required={true} autoComplete='new-password' onChange={handleChange} />
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

export default SignUp