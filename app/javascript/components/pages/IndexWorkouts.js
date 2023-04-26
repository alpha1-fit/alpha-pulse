import React, { useState } from 'react';
import FakerWorkouts from './FakerWorkouts';
import { Card, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Toggle from '../components/DropDown';

const IndexWorkouts = ({ logged_in, workouts, current_user }) => {
  const [filteredWorkouts, setFilteredWorkouts] = useState(workouts);

  const filterWorkouts = (userId) => {
    if (userId === "all") {
      setFilteredWorkouts(workouts);
    } else {
      const filteredWorkouts = workouts.filter(workout => workout.user_id === userId);
      setFilteredWorkouts(filteredWorkouts);
    }
  };

  return (
    <div className="card">
      {logged_in && filteredWorkouts.map((value) => (
        <Card style={{ width: '18rem' }} key={value.id}>
          <img
            src={value.image}
            alt="App Image"
          />
          <CardBody className="Card">
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
            <a href={`/workoutshow/${value.id}`}>See Details</a>
          </CardBody>
        </Card>
      ))}
      {!logged_in && <FakerWorkouts />}
      <div>
        <Button>
          <NavLink to={`/workoutnew/new`}>Create New Workout</NavLink>
        </Button>
      </div>
      <div>
        <Toggle
          loggedIn={logged_in}
          currentUser={current_user}
          filterWorkouts={filterWorkouts}
        />
      </div>
    </div>
  );
};

export default IndexWorkouts;