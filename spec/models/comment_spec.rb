require 'rails_helper'

RSpec.describe Comment, type: :model do
  let (:user1) {User.create username: "RTester", photo: "url", email: 'test3@testing.com', password: 'test123', password_confirmation: 'test123'}

  let (:user2) {User.create username: "BTester", photo: "url", email: 'test4@testing.com', password: 'test123', password_confirmation: 'test123'}

  describe "comment validations" do
    it "is valid with valid inputs" do
      workout = user1.workouts.create(
        name: "Night Run",
        workout_type: "run",
        duration: 20,
        schedule: '04/19/2023 00:00',
        description: "midnight run"
      )
      comment1 = workout.comments.create(
        title: "Tough workout",
        comment: "great workout!",
        user_id: user1.id
      )
      expect(comment1.errors).to be_empty

      comment2 = workout.comments.create(
        title: "Killed it!",
        comment: "Great job!",
        user_id: user2.id)
      expect(comment2.errors).to be_empty
    end

    it "is invalid without a title" do
      workout = user1.workouts.create(
        name: "Night Run",
        workout_type: "run",
        duration: 20,
        schedule: '04/19/2023 00:00',
        description: "midnight run"
      )
      comment = workout.comments.create(
        comment: "Great job!",
        user_id: user2.id
      )
      expect(comment.errors[:title]).to_not be_empty
    end
    
    it "is invalid without a comment" do
      workout = user1.workouts.create(
        name: "Night Run",
        workout_type: "run",
        duration: 20,
        schedule: '04/19/2023 00:00',
        description: "midnight run"
      )
      comment = workout.comments.create(
        title: "Killed it!",
        user_id: user2.id
      )
      expect(comment.errors[:comment]).to_not be_empty
    end
    
    it "is invalid without a user_id" do
      workout = user1.workouts.create(
        name: "Night Run",
        workout_type: "run",
        duration: 20,
        schedule: '04/19/2023 00:00',
        description: "midnight run"
      )
      comment = workout.comments.create(
        title: "Killed it!",
        comment: "Great job!"
      )
      expect(comment).to_not be_valid
    end

    it "is invalid without a workout_id" do
      comment = Comment.create(
        title: "Tough workout",
        comment: "great workout!",
        user_id: user1.id
      )
      expect(comment).to_not be_valid
    end

    it "is associated with a user and a workout" do
      workout = user1.workouts.create(
        name: "Night Run",
        workout_type: "run",
        duration: 20,
        schedule: '04/19/2023 00:00',
        description: "midnight run"
      )
      comment = workout.comments.create(
        title: "Tough workout",
        comment: "great workout!",
        user_id: user1.id
      )
      expect(comment.workout).to eq(workout)
      expect(comment.user).to eq(user1)
    end
  end
end
