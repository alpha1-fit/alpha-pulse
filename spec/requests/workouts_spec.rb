require 'rails_helper'

RSpec.describe "Workouts", type: :request do
  describe "GET /index" do
    it "gets a list of workouts" do 
        user.workouts.create(
            name: "Arnold",
            workout_type: "Weightlifting",
            user_id: 1,
            duration: 90,
            schedule: '2023-04-18 00:00',
            description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
            Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
            Bodyweight Dips: 4 sets of 12
            Push ups: 4 sets to failure
            Adjust weight by comfortablity")

      get "/home/index"
      workout = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(response).to have_http_status(:success)
    end
  end

end

