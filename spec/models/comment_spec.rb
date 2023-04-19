require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe "validations" do
    it "is invalid without a title" do
      comment = user.workout.comments.create(comment: "great workout!", workout_id: 1, user_id: 1)
      expect(comment.errors[:title]).to_not be_empty
    end
    
    it "is invalid without a comment" do
        comment = user.workout.comments.create(title: "Tough workout", workout_id: 1, user_id: 1)
        expect(comment.errors[:comment]).to_not be_empty
    end
    
    it "is invalid without a workout_id" do
        comment = user.workout.comments.create(title: "Tough workout", comment: "great workout!", user_id: 1)
      expect(comment.errors[:workout_id]).to_not be_empty
    end
    
    it "is invalid without a user_id" do
        comment = user.workout.comments.create(title: "Tough workout", comment: "great workout!", workout_id: 1)
      expect(comment.errors[:user_id]).to_not be_empty
    end
  end
end
