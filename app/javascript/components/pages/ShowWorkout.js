import React from "react"
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap'
import { NavLink, useParams, useNavigate } from "react-router-dom"


const ShowWorkout = ({ workouts, deleteWorkout }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  let selectedWorkout = Array.isArray(workouts) && workouts.find(
    (workout) => workout.id === +id
  );
  
  const handleSubmit = () => {
    deleteWorkout(selectedWorkout.id)
    navigate("/workoutindex")
  }
  return (
    <div className='workout-show-align'>
    {selectedWorkout && (
      <Card
      className='workout-show'
      style={{
        width: '25%',
        marginTop: '0px'
      }}
    >
      <CardBody>
        <CardTitle tag="h5">
          {selectedWorkout.name}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Workout_type: {selectedWorkout.workout_type}
        </CardSubtitle>
        <CardText>
          Duration: {selectedWorkout.duration}
        </CardText>
        <CardText>
          Schedule: {selectedWorkout.schedule}
        </CardText>
        <CardText>
          Description: {selectedWorkout.description}
        </CardText>
      <Button><NavLink to={`/WorkoutEdit/${selectedWorkout.id}`} className="nav-link">
          Edit a Workout
          </NavLink></Button>
      <Button onClick={handleSubmit}>Delete Workout Profile</Button>
      </CardBody>
    </Card>
    )}
  </div>
  )
}

export default ShowWorkout