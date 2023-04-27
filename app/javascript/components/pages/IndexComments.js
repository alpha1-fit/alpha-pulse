import React from 'react';
import FakerComments from './FakerComments';
import { Card, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Example from '../components/DropDown';

const IndexComments = ({ logged_in, current_user, workout_id = 1, comments }) => {
  const handleDelete = () => {

  }

  return (
    <div className="content">
      {logged_in && comments.map((comment, index) => {
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
              {current_user.id == comment.user_id &&
                <>
                  <Button><NavLink to={`/commentedit/${comment.id}`}>Edit</NavLink></Button>
                  <Button onClick={handleDelete}>Delete</Button>
                </>}
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
    </div>
  );
}

export default IndexComments