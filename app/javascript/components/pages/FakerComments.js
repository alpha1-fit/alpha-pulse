import React from 'react'
import fakeComments from '../fakeComments'
import { Card, CardText, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap'

const FakerComments = () => {
  return (
    <>
      <h1>Comments!</h1>
      {fakeComments.map((comment, index) => {
        return (
          <Card style={{ width: '18rem' }} key={comment.id}>
            <CardBody className="Cards">
              <CardTitle tag="h5">
                title: {comment.title}
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                comment: {comment.comment}
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                workout: {comment.workout_id}
              </CardSubtitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                user: {comment.user_id}
              </CardSubtitle>
              <a href={`/Commentshow/${comment.id}`}>See Details</a>
            </CardBody>
          </Card>
        )
      }
      )}
    </>
  )
}

export default FakerComments