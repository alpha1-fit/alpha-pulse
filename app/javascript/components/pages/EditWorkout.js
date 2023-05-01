import React, { useEffect, useState } from 'react'
import { FormGroup, Label, Input, Form, Button } from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'

const EditWorkout = ({ workouts, current_user, updateWorkout }) => {
  const [editWorkout, setEditWorkout] = useState()
  const navigate = useNavigate()
  const { id } = useParams()
  useEffect(() => {
    if (workouts.length > 0) {
      let currentWorkout = Array.isArray(workouts) && workouts.find(
        (workout) => workout.id === +id
      )

      setEditWorkout({
        name: currentWorkout.name,
        workout_type: currentWorkout.workout_type,
        duration: currentWorkout.duration,
        schedule: currentWorkout.schedule,
        description: currentWorkout.description,
        user_id: current_user?.id,
      });
    }
  }, [workouts]);

  const [scheduleDate, setScheduleDate] = useState("")
  const [scheduleTime, setScheduleTime] = useState("")

  const handleChange = (e) => {
    setEditWorkout({ ...editWorkout, [e.target.name]: e.target.value });
  };

  const editDuration = (e) => {
    setEditWorkout({ ...editWorkout, [e.target.name]: `${parseInt(e.target.value.substring(0, 2)) * 60 + parseInt(e.target.value.substring(3, 5))}` })
  }

  const editDate = (e) => {
    setScheduleDate(e.target.value)
    let updatedSchedule = `${e.target.value} ${scheduleTime}`
    setEditWorkout({ ...editWorkout, ["schedule"]: updatedSchedule })
  }

  const editTime = (e) => {
    setScheduleTime(e.target.value)
    let updatedSchedule = `${scheduleDate} ${e.target.value}`
    setEditWorkout({ ...editWorkout, ["schedule"]: updatedSchedule })
  }


  const handleSubmit = () => {
    if (editWorkout) {
      updateWorkout(editWorkout, id);
      navigate(`/workoutshow/${id}`);
    }
  };

  const cancelEdit = () => {
    navigate(`/workoutshow/${id}`)
  }

  return (
    <>
      <h1 className='new-header'>Edit a Workout</h1>
      <Form>
        <FormGroup>
          <Label htmlFor="name">
            <div>Workout Name</div>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="What is the workout name"
            type="text"
            required={true}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="workout_type">
            Workout Type
          </Label>
          <Input
            id="workout_type"
            name="workout_type"
            placeholder="What is the type of workout?"
            type="text"
            required={true}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="duration">
            Duration
          </Label>
          <Input
            id="duration"
            name="duration"
            placeholder="How long does this exercise take?"
            type="time"
            required={true}
            onChange={editDuration}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="schedule_date">
            Schedule date
          </Label>
          <Input
            id="schedule_date"
            name="schedule_date"
            placeholder="When would you like to schedule?"
            type="date"
            required={true}
            onChange={editDate}
          />

          <Label htmlFor="schedule_time">
            Schedule time
          </Label>
          <Input
            id="schedule_time"
            name="schedule_time"
            placeholder="When would you like to schedule?"
            type="time"
            required={true}
            onChange={editTime}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">
            Description
          </Label>
          <Input
            id="description"
            name="description"
            placeholder="Describe the workout!"
            type="textarea"
            required={true}
            onChange={handleChange}
          />
        </FormGroup>

        <Button onClick={handleSubmit} name="submit">
          Submit
        </Button>
        <Button onClick={cancelEdit} name="cancel">
          Cancel
        </Button>
      </Form>
    </>
  )
}

export default EditWorkout