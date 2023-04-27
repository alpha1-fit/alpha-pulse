import React, { useState } from "react"
import { FormGroup, Label, Input, Form,Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const CreateComment = ({logged_in, current_user, workout_id, createComment}) => {
  const navigate = useNavigate()
  const [newComment, setNewComment] = useState({
    title: "",
    comment: "",
    workout_id: "",
    user_id: current_user.id
  })

  const handleChange = (e) => {
    setNewComment({...newComment, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createComment(newComment)
    navigate(`/WorkoutShow/${workout_id}`)
  }

  const cancelCreate = () => {
    navigate(`/WorkoutShow/${workout_id}`)
  }

  return (
    <div className="comment-section">
      <Form>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" placeholder="What is the comement title?" type="text" required={true} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="comment">Comment</Label>
          <Input id="comment" name="comment" placeholder="What is the comement?" type="textarea" required={true} onChange={handleChange} />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
              Submit
        </Button>
        <Button onClick={cancelCreate} name="cancel">
              Cancel
        </Button>
      </Form>
    </div>
  )
}

export default CreateComment