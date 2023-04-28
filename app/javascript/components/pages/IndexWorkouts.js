import React, { useState } from 'react';
import FakerWorkouts from './FakerWorkouts';
import { Card, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Toggle from '../components/DropDown';
import fakeWorkouts from "../fakeWorkouts";

const IndexWorkouts = ({ logged_in, workouts, current_user , toggleNewWorkout}) => {
  const [filteredWorkouts, setFilteredWorkouts] = useState(logged_in ? workouts : fakeWorkouts)

  const filterWorkouts = (userId) => {
    if (userId === "all") {
      setFilteredWorkouts(workouts);
    } else {
      const filteredWorkouts = workouts.filter(workout => workout.user_id === userId);
      setFilteredWorkouts(filteredWorkouts);
    }
  }

  const newWorkoutClick = () => {
    toggleNewWorkout()
  }

  return (
    <>
      <div className="buttonCreate">
        <Toggle
          loggedIn={logged_in}
          currentUser={current_user}
          filterWorkouts={filterWorkouts}
        />
        <br></br>
        <div className="fakecontent">
          <div className="card">
            {filteredWorkouts.map((value) => (
              <Card style={{ width: '18rem' }} key={value.id}>
                <div className="realcards">
                  <CardBody className="CardIndex">
                    <CardTitle tag="h5">
                      name: {value.name}
                    </CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      <div className="description">workout_type: {value.workout_type}</div>
                    </CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      <div className="description">duration: {value.duration}</div>
                    </CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      <div className="description">schedule: {value.schedule}</div>
                    </CardSubtitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      <div className="description">description: {value.description}</div>
                    </CardSubtitle>
                    <NavLink to={`/workoutshow/${value.id}`}>See Details</NavLink>
                  </CardBody>
                </div>
              </Card>
            ))}
            <div className="buttonCreate">
              <Button onClick={newWorkoutClick}>Create New Workout</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexWorkouts;