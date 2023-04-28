import React, { useState } from "react"
import { FormGroup, Label, Input, Form, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const CreateWorkout = ({ logged_in, current_user, toggle, createWorkout }) => {
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    workout_type: "",
    duration: "",
    schedule: "",
    description:"",
    user_id: current_user?.id
  })

  const toggleModal = () => {
    toggle()
  }

  const [scheduleDate, setScheduleDate] = useState("")
  const [scheduleTime, setScheduleTime] = useState("")

  const handleChange = (e) => {
    setNewWorkout({...newWorkout, [e.target.name]: e.target.value })
  }

  const changeDuration = (e) => {
    // Break time input into hours and minutes
    // parseInt to convert to integers
    // Add 60 * hours to minutes to get integer value for time
    setNewWorkout({...newWorkout, [e.target.name]: `${parseInt(e.target.value.substring(0,2)) * 60 + parseInt(e.target.value.substring(3,5))}`})
  }

  const changeDate = (e) => {
    setScheduleDate(e.target.value)
    let newSchedule = `${e.target.value} ${scheduleTime}`
    setNewWorkout({...newWorkout, ["schedule"]: newSchedule})
  }

  const changeTime = (e) => {
    setScheduleTime(e.target.value)
    let newSchedule = `${scheduleDate} ${e.target.value}`
    setNewWorkout({...newWorkout, ["schedule"]: newSchedule})
  }

  const handleSubmit = () => {
    if(!logged_in) {
      alert("Thank you for trying αlphaPulse. Please log in or sign up to continue!")
    } else {
      createWorkout(newWorkout)
      toggle()
    }
  }

  return (
    <div className="create-workout" id="create-workout-modal">
      <Modal isOpen={true} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>New Workout!</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="name" type="text" required={true} autoComplete='name' onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="workout_type">Workout type</Label>
              <Input id="workout_type" name="workout_type" placeholder="workout_type" type="text" required={true} autoComplete='workout_type' onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="duration">Duration</Label>
              <Input id="duration" name="duration" placeholder="duration" type="time" required={true} autoComplete='duration' onChange={changeDuration} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="scheduled_date">Scheduled date</Label>
              <Input id="scheduled_date" name="scheduled_date" placeholder="scheduled_date" type="date" required={true} autoComplete='scheduled_date' onChange={changeDate} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="schedule_time">Scheduled time</Label>
              <Input id="schedule_time" name="schedule_time" placeholder="schedule_time" type="time" required={true} autoComplete='schedule_time' onChange={changeTime} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Input id="description" name="description" placeholder="description" type="textarea" required={true} autoComplete='description' onChange={handleChange} />
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

export default CreateWorkout