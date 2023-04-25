require 'rails_helper'

RSpec.describe "comments", type: :request do
  let (:user1) {User.create username: "RTester", photo: "url", email: 'test3@testing.com', password: 'test123', password_confirmation: 'test123'}
  let (:user2) {User.create username: "BTester", photo: "url", email: 'test4@testing.com', password: 'test123', password_confirmation: 'test123'}
  let (:workout) {Workout.create name: "Arnold", workout_type: "Weightlifting", user_id: 1, duration: 90, schedule: '2023-04-18 00:00', description: "Bench press: 4 sets of 12, (60-75% of Bodyweight)\n Bench press Incline: 4 sets of 12, (60-75% of Bodyweight)\n Bodyweight Dips: 4 sets of 12\n Push ups: 4 sets to failure\n Adjust weight by comfortablity"}

  # Draft backend tests for comment controller, pending implementation
  # describe "GET/index" do
  #   it "gets a list of comments" do 
  #     workout.comments.create(title: "Tough workout", comment: "great workout!", user_id: user1.id)

  #     get "/comments"
  #     comments = JSON.parse(response.body)
  #     expect(response).to have_http_status(200)
  #     expect(comments.length).to eq 1
  #   end
  # end

  # describe "POST/create" do
  #   it "creates a comment" do
  #     comment_params = {
  #       comment: {
  #         title: "Tough workout",
  #         comment: "great workout!",
  #         user_id: user1.id,
  #         workout_id: workout.id
  #       }
  #     }

  #     post "/comments", params: comment_params

  #     expect(response).to have_http_status(200)

  #     comment = Comment.first

  #     expect(comment.title).to eq comment_params[:comment][:title]
  #     expect(comment.comment).to eq comment_params[:comment][:comment]
  #     expect(comment.user_id).to eq comment_params[:comment][:user_id]
  #     expect(comment.workout_id).to eq comment_params[:comment][:workout_id]
  #   end

  #   it "does not create a workout with invalid data" do
  #     bad_params = {
  #       comment: {
  #         title: nil,
  #         comment: nil,
  #         user_id: nil,
  #         workout_id: nil
  #       }
  #     }

  #     post "/comments", params: bad_params

  #     expect(response).to have_http_status(422)
  #     json = JSON.parse(response.body)

  #     expect(json['title']).to include "can't be blank"
  #     expect(json['user']).to include "must exist"
  #     expect(json['workout']).to include "must exist"
  #     expect(json['comment']).to include "can't be blank"
  #   end
  # end

  # describe "PATCH/update" do
  #   it "updates a workout" do
  #     comment_params = {
  #       comment: {
  #         title: "Tough workout",
  #         comment: "great workout!",
  #         user_id: user1.id,
  #         workout_id: workout.id
  #       }
  #     }

  #     post "/comments", params: comment_params

  #     expect(response).to have_http_status(200)

  #     comment = Comment.first

  #     updated_comment_params = {
  #       comment: {
  #         title: "Fun run",
  #         comment: "What a rush!",
  #         user_id: user1.id,
  #         workout_id: workout.id
  #       }
  #     }

  #     patch "/comments/#{comment.id}", params: updated_comment_params

  #     expect(response).to have_http_status(200)

  #     updated_comment = Comment.find(comment.id)

  #     expect(updated_comment.title).to eq updated_comment_params[:comment][:title]
  #     expect(updated_comment.comment).to eq updated_comment_params[:comment][:comment]
  #     expect(updated_comment.user_id).to eq updated_comment_params[:comment][:user_id]
  #     expect(updated_comment.workout_id).to eq updated_comment_params[:comment][:workout_id]
  #   end

  #   it "does not update with invalid data" do
  #     comment_params = {
  #       comment: {
  #         title: "Tough workout",
  #         comment: "great workout!",
  #         user_id: user1.id,
  #         workout_id: workout.id
  #       }
  #     }

  #     post "/comments", params: comment_params

  #     expect(response).to have_http_status(200)

  #     comment = Comment.first

  #     bad_params = {
  #       comment: {
  #         title: nil,
  #         comment: nil,
  #         user_id: nil,
  #         workout_id: nil
  #       }
  #     }

  #     patch "/comments/#{comment.id}", params: bad_params

  #     expect(response).to have_http_status(422)
  #     json = JSON.parse(response.body)

  #     expect(json['title']).to include "can't be blank"
  #     expect(json['user']).to include "must exist"
  #     expect(json['workout']).to include "must exist"
  #     expect(json['comment']).to include "can't be blank"
  #   end
  # end

  # describe "DELETE/destroy" do
  #   it "removes an element from the table" do
  #     comment_params = {
  #       comment: {
  #         title: "Tough workout",
  #         comment: "great workout!",
  #         user_id: user1.id,
  #         workout_id: workout.id
  #       }
  #     }

  #     post "/comments", params: comment_params

  #     expect(response).to have_http_status(200)

  #     comment = Comment.first

  #     delete "/comments/#{comment.id}"

  #     expect(response).to have_http_status(200)

  #     expect { Comment.find(comment.id) }.to raise_error(ActiveRecord::RecordNotFound)
  #   end
  # end
end