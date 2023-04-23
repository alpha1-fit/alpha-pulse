import React, {useState} from 'react'
import { FormGroup, Label, Input, Form,Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const CreateWorkout = ({ createWorkout }) => {
  const navigate = useNavigate()
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    workout_type: "",
    duration: "",
    schedule: "",
    description:""
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
              onChange={handleChange}
            />
        </FormGroup>


        <FormGroup>
          <Label for="type">
            Workout Type
          </Label>
            <Input
              name="type"
              placeholder="What is the type of workout?"
              type="text"
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
              type="text"
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