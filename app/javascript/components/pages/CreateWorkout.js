import React, {useState} from 'react'
import { FormGroup, Label, Input, Form,Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const CreateWorkout = ({ logged_in, current_user, createWorkout }) => {
  const navigate = useNavigate()
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    workout_type: "",
    duration: "",
    schedule: "",
    description:"",
    user_id: current_user?.id
  })

  const handleChange = (e) => {
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    createWorkout(newWorkout)
    navigate("/WorkoutIndex")
  }
  
  return (
    <>
      <h1 className='new-header'>Are you ready to become Alpha?</h1>
      <Form>
        <FormGroup>
          <Label for="name">
            Workout Name
          </Label>
            <Input
              name="name"
              placeholder="What is the workout name"
              type="text"
              required="true"
              onChange={handleChange}
            />
        </FormGroup>
        
        <FormGroup>
          <Label for="workout_type">
            Workout Type
          </Label>
            <Input
              name="workout_type"
              placeholder="What is the type of workout?"
              type="text"
              required="true"
              onChange={handleChange}
            />
        </FormGroup>
        
        <FormGroup>
          <Label for="duration">
            Duration
          </Label>
            <Input
              name="duration"
              placeholder="How long does this exercise take?"
              type="text"
              required="true"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="schedule">
            Schedule
          </Label>
            <Input
              name="schedule"
              placeholder="When would you like to schedule?"
              type="text"
              required="true"
              onChange={handleChange}
            />
        </FormGroup>

        <FormGroup>
          <Label for="description">
            Description
          </Label>
            <Input
              name="description"
              placeholder="Describe the workout!"
              type="textarea"
              required="true"
              onChange={handleChange}
            />
        </FormGroup>
    
        <Button onClick={handleSubmit} name="submit">
              Submit
        </Button>
      </Form>
    </>
  )
}
 

export default CreateWorkout