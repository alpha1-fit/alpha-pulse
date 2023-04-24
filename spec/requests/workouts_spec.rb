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

  describe "PATCH /update" do
    it "updates a workout" do
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
      updated_workout = workout.find(workout.id)
      expect(response).to have_http_status(200)
      expect(updated_workout.name).to eq "Arnold"
      expect(updated_workout.workout_type).to eq "Weightlifting"
      expect(updated_workout.user_id).to eq user_id
      expect(updated_workout.duration).to eq 90
      expect(updated_workout.schedule).to eq '2023-04-18 00:00'
      expect(updated_workout.description).to eq "TESTBench press: 4 sets of 12, (60-75% of Bodyweight)
      Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
      Bodyweight Dips: 4 sets of 12
      Push ups: 4 sets to failure
      Adjust weight by comfortablity"
    end

    it "does not update a workout without a name" do
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
      workout = Workout.first
      updated_workout_params = {
        workout: {
        name: "",
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
      updated_workout = Workout.find(workout.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['name']).to include "can't be blank"
    end
    it "does not update a workout without a workout type" do
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
        workout = Workout.first
        updated_workout_params = {
          workout: {
          name: "Arnold",
          workout_type: "",
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
        updated_workout = Workout.find(workout.id)
        expect(response.status).to eq 422
        json = JSON.parse(response.body)
        expect(json['workout_type']).to include "can't be blank"
    end
    it "does not update a workout without a user id" do
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
          workout = Workout.first
          updated_workout_params = {
            workout: {
            name: "Arnold",
            workout_type: "Weightlifting",
            user_id: ,
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
          updated_workout = Workout.find(workout.id)
          expect(response.status).to eq 422
          json = JSON.parse(response.body)
          expect(json['user_id']).to include "can't be blank"
    end
    it "does not update a workout without a duration" do
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
      workout = Workout.first
      updated_workout_params = {
        workout: {
        name: "Arnold",
        workout_type: "Weightlifting",
        user_id: 1,
        duration: ,
        schedule: '2023-04-18 00:00',
        description: "TESTBench press: 4 sets of 12, (60-75% of Bodyweight)
        Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
        Bodyweight Dips: 4 sets of 12
        Push ups: 4 sets to failure
        Adjust weight by comfortablity"
        }
      }
      patch "/workouts/#{workout.id}", params: updated_workout_params
      updated_workout = Workout.find(workout.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['duration']).to include "can't be blank"
    end
    it "does not update a workout without a schedule" do
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
        workout = Workout.first
        updated_workout_params = {
          workout: {
          name: "Arnold",
          workout_type: "Weightlifting",
          user_id: 1,
          duration: 90,
          schedule: '',
          description: "TESTBench press: 4 sets of 12, (60-75% of Bodyweight)
          Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)
          Bodyweight Dips: 4 sets of 12
          Push ups: 4 sets to failure
          Adjust weight by comfortablity"
          }
        }
        patch "/workouts/#{workout.id}", params: updated_workout_params
        updated_workout = Workout.find(workout.id)
        expect(response.status).to eq 422
        json = JSON.parse(response.body)
        expect(json['schedule']).to include "can't be blank"
    end
    it "does not update a workout without a description" do
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
          workout = Workout.first
          updated_workout_params = {
            workout: {
            name: "",
            workout_type: "Weightlifting",
            user_id: 1,
            duration: 90,
            schedule: '2023-04-18 00:00',
            description: ""
            }
          }
          patch "/workouts/#{workout.id}", params: updated_workout_params
          updated_workout = Workout.find(workout.id)
          expect(response.status).to eq 422
          json = JSON.parse(response.body)
          expect(json['description']).to include "can't be blank"
    end
  end

end