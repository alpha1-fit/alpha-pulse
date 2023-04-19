require 'rails_helper'

RSpec.describe Workout, type: :model do
  describe "validations" do
    it "is invalid without a name" do
      workout = user.workouts.create(type: "run", user_id: 1, duration: 20, schedule: '04/19/2023 00:00', description: "midnight run")
      expect(workout.errors[:name]).to_not be_empty
    end
    
    it "is invalid without a type" do
      workout = user.workouts.create(name: "Night Run", user_id: 1, duration: 20, schedule: '04/19/2023 00:00', description: "midnight run")
      expect(workout.errors[:type]).to_not be_empty
    end
    
    it "is invalid without a user_id" do
      workout = user.workouts.create(name: "Night Run", type: "run", duration: 20, schedule: '04/19/2023 00:00', description: "midnight run")
      expect(workout.errors[:user_id]).to_not be_empty
    end
    
    it "is invalid without a duration" do
      workout = user.workouts.create(name: "Night Run", type: "run", user_id: 1, schedule: '04/19/2023 00:00', description: "midnight run")
      expect(workout.errors[:duration]).to_not be_empty
    end
  end
end
