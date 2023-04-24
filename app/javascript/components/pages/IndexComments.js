import React from 'react';
import FakerComments from './FakerComments';
import { Card, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Example from '../components/DropDown';

const IndexComments = ({ logged_in, workout_id, comments }) => {
  return (
    <div className="card">
      {logged_in && comments.filter(comment => comment.workout_id === workout_id).map((comment, index) => {
        return (
          <Card style={{ width: '18rem' }} key={index}>
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
      {!logged_in && <FakerComments />}
      <div>
        <Button>
          <NavLink to={`/commentnew/new`}>Create New Comment</NavLink>
        </Button>
      </div>
      <div>
      <Example />
      </div>
    </div>
  );
}

export default IndexComments