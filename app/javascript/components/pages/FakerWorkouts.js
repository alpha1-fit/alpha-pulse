import React from 'react'
import fakeWorkouts from '../fakeWorkouts'
import {Card, CardText, CardTitle, CardSubtitle, CardBody, Button} from  'reactstrap'

const FakerWorkouts = () => {
  return (
    <>
    <h1>Workouts!</h1>
    {fakeWorkouts.map((value,index) => {
      return (
        
    <Card style={{ width: '18rem' }} key={index}>
      <img 
      src={value.image} 
      alt="App Image"  
      />
    <CardBody className="Cards">
    <CardTitle tag="h5">
      name: {value.name}
    </CardTitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      workout_type: ${value.workout_type}
    </CardSubtitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      duration: {value.duration}
    </CardSubtitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      schedule: {value.schedule}
    </CardSubtitle>
    <CardSubtitle className="mb-2 text-muted" tag="h6">
      description: {value.description}
    </CardSubtitle>
        <a href={`/workoutshow/${value.id}`}>See Details</a>
    </CardBody>
</Card>
  )
}
  )}
  </>
  )
}

export default FakerWorkouts