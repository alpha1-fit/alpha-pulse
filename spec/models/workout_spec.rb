require 'rails_helper'

RSpec.describe Workout, type: :model do
  let (:user) {User.create username: "RTester", photo: "url", email: 'test3@testing.com', password: 'test123', password_confirmation: 'test123'}

  describe "validations" do
    it "is valid with valid input" do
      workout = user.workouts.create(
        name: "Night Run",
        workout_type: "run",
        duration: 20,
        schedule: '04/19/2023 00:00',
        description: "midnight run"
      )
      expect(workout.errors).to be_empty
    end

    it "is invalid without a name" do
      workout = user.workouts.create(
        workout_type: "run",
        duration: 20,
        schedule: '04/19/2023 00:00',
        description: "midnight run"
      )
      expect(workout.errors[:name]).to_not be_empty
    end

    it "is invalid wihtout a description" do
      workout = user.workouts.create(
        name: "Night Run",
        workout_type: "run",
        duration: 20,
        schedule: '04/19/2023 00:00'
      )
      expect(workout.errors[:description]).to_not be_empty
    end

    it "belongs to a user" do
      workout = Workout.create(
        name: "Night Run",
        workout_type: "run",
        duration: 20,
        schedule: '04/19/2023 00:00'
      )
      expect(workout).to_not be_valid
    end
  end
end
