require 'rails_helper'

RSpec.describe "Workouts", type: :request do
  let (:user) {User.create username: "RTester", photo: "url", email: 'test3@testing.com', password: 'test123', password_confirmation: 'test123'}

  describe "GET/index" do
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
        Adjust weight by comfortablity"
      )

      get "/workouts"
      workout = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(workout.length).to eq 1
    end
  end

  describe "POST/create" do
    it "creates a workout" do
      workout_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      post "/workouts", params: workout_params

      expect(response).to have_http_status(200)

      workout = Workout.first

      expect(workout.name).to eq workout_params[:workout][:name]
      expect(workout.workout_type).to eq workout_params[:workout][:workout_type]
      expect(workout.user_id).to eq workout_params[:workout][:user_id]
      expect(workout.duration).to eq workout_params[:workout][:duration]
      expect(workout.schedule).to eq workout_params[:workout][:schedule]
      expect(workout.description).to eq workout_params[:workout][:description]
    end

    it "does not create a workout with invalid data" do
      bad_params = {
        workout: {
          name: nil,
          workout_type: nil,
          user_id: nil,
          duration: nil,
          schedule: nil,
          description: nil
        }
      }

      post "/workouts", params: bad_params

      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['name']).to include "can't be blank"
      expect(json['user']).to include "must exist"
      expect(json['description']).to include "can't be blank"
    end
  end

  describe "PATCH/update" do
    it "updates a workout name" do
      workout_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      post "/workouts", params: workout_params

      expect(response).to have_http_status(200)

      workout = Workout.first

      updated_workout_params = {
        workout: {
        name: "Luis",
        workout_type: "Powerlifting",
        user_id: 1,
        duration: 1500,
        schedule: '2023-04-18 00:00',
        description: "TESTBench press: 4 sets of 12, (60-75% of Bodyweight)
        Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
        Bodyweight Dips: 4 sets of 12
        Push ups: 4 sets to failure
        Adjust weight by comfortablity"
        }
      }

      patch "/workouts/#{workout.id}", params: updated_workout_params

      expect(response).to have_http_status(200)

      updated_workout = Workout.find(workout.id)

      expect(updated_workout.name).to eq updated_workout_params[:workout][:name]
    end

    it "updates a workout type" do
      workout_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      post "/workouts", params: workout_params

      expect(response).to have_http_status(200)

      workout = Workout.first

      updated_workout_params = {
        workout: {
        name: "Luis",
        workout_type: "Powerlifting",
        user_id: 1,
        duration: 1500,
        schedule: '2023-04-18 00:00',
        description: "TESTBench press: 4 sets of 12, (60-75% of Bodyweight)
        Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
        Bodyweight Dips: 4 sets of 12
        Push ups: 4 sets to failure
        Adjust weight by comfortablity"
        }
      }

      patch "/workouts/#{workout.id}", params: updated_workout_params

      expect(response).to have_http_status(200)

      updated_workout = Workout.find(workout.id)

      expect(updated_workout.workout_type).to eq updated_workout_params[:workout][:workout_type]
    end

    it "updates a workout user" do
      workout_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      post "/workouts", params: workout_params

      expect(response).to have_http_status(200)

      workout = Workout.first

      updated_workout_params = {
        workout: {
          name: "Luis",
          workout_type: "Powerlifting",
          user_id: 1,
          duration: 1500,
          schedule: '2023-04-18 00:00',
          description: "TESTBench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      patch "/workouts/#{workout.id}", params: updated_workout_params

      expect(response).to have_http_status(200)

      updated_workout = Workout.find(workout.id)

      expect(updated_workout.user_id).to eq updated_workout_params[:workout][:user_id]
    end

    it "updates a workout duration" do
      workout_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      post "/workouts", params: workout_params

      expect(response).to have_http_status(200)

      workout = Workout.first

      updated_workout_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 1500,
          schedule: '2023-04-18 00:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      patch "/workouts/#{workout.id}", params: updated_workout_params

      expect(response).to have_http_status(200)

      updated_workout = Workout.find(workout.id)

      expect(updated_workout.duration).to eq updated_workout_params[:workout][:duration]
    end

    it "updates a workout schedule" do
      workout_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
            Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
            Bodyweight Dips: 4 sets of 12
            Push ups: 4 sets to failure
            Adjust weight by comfortablity"
        }
      }

      post "/workouts", params: workout_params

      expect(response).to have_http_status(200)

      workout = Workout.first

      updated_workout_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 10:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
            Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
            Bodyweight Dips: 4 sets of 12
            Push ups: 4 sets to failure
            Adjust weight by comfortablity"
        }
      }

      patch "/workouts/#{workout.id}", params: updated_workout_params

      expect(response).to have_http_status(200)

      updated_workout = Workout.find(workout.id)

      expect(updated_workout.schedule).to eq updated_workout_params[:workout][:schedule]
    end

    it "updates a workout description" do
      workout_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      post "/workouts", params: workout_params

      expect(response).to have_http_status(200)

      workout = Workout.first

      updated_workout_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: "TESTBench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      patch "/workouts/#{workout.id}", params: updated_workout_params

      expect(response).to have_http_status(200)

      updated_workout = Workout.find(workout.id)

      expect(updated_workout.description).to eq updated_workout_params[:workout][:description]
    end

    it "does not update with invalid name" do
      workout_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      post "/workouts", params: workout_params

      expect(response).to have_http_status(200)

      workout = Workout.first

      bad_params = {
        workout: {
          name: nil,
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      patch "/workouts/#{workout.id}", params: bad_params

      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)

      expect(json['name']).to include "can't be blank"
    end

    it "does not update with invalid user" do
      workout_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      post "/workouts", params: workout_params

      expect(response).to have_http_status(200)

      workout = Workout.first

      bad_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: nil,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      patch "/workouts/#{workout.id}", params: bad_params

      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)

      expect(json['user']).to include "must exist"
    end

    it "does not update with invalid description" do
      workout_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
        }
      }

      post "/workouts", params: workout_params

      expect(response).to have_http_status(200)

      workout = Workout.first

      bad_params = {
        workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '2023-04-18 00:00',
          description: nil
        }
      }

      patch "/workouts/#{workout.id}", params: bad_params

      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)

      expect(json['description']).to include "can't be blank"
    end
  end

  # Developed in anticipation of delete coding in controller
  # describe "DELETE/destroy" do
  #   it "removes an element from the table" do
  #     workout_params = {
  #       workout: {
  #         name: "Arnold",
  #         workout_type: "Weightlifting",
  #         user_id: 1,
  #         duration: 90,
  #         schedule: '2023-04-18 00:00',
  #         description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)
  #         Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
  #         Bodyweight Dips: 4 sets of 12
  #         Push ups: 4 sets to failure
  #         Adjust weight by comfortablity"
  #       }
  #     }

  #     post "/workouts", params: workout_params

  #     expect(response).to have_http_status(200)

  #     workout = Workout.first

  #     delete "/workouts/#{workout.id}"

  #     expect(response).to have_http_status(200)

  #     expect { Workout.find(workout.id) }.to raise_error(ActiveRecord::RecordNotFound)
  #   end
  # end
end