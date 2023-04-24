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

  const [scheduleDate, setScheduleDate] = useState("")
  const [scheduleTime, setScheduleTime] = useState("")

  const handleChange = (e) => {
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value })
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
    console.log(newWorkout)
    if(!logged_in) {
      alert("Thank you for trying AlphaPulse. Please log in or sign up to continue!")
    } else {
      createWorkout(newWorkout)
      navigate("/WorkoutIndex")
    }
  }

  const cancelCreate = () => {
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
              type="time"
              required="true"
              onChange={changeDuration}
            />
        </FormGroup>

        <FormGroup>
          <Label for="schedule">
            Schedule
          </Label>
            <Input
              name="schedule_date"
              placeholder="When would you like to schedule?"
              type="date"
              required="true"
              onChange={changeDate}
            />
              <Input
              name="schedule_time"
              placeholder="When would you like to schedule?"
              type="time"
              required="true"
              onChange={changeTime}
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
        <Button onClick={cancelCreate} name="cancel">
              Cancel
        </Button>
      </Form>
    </>
  )
}
 

export default CreateWorkout