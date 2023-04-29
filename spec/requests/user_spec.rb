require 'rails_helper'
require 'devise/test/controller_helpers'

RSpec.describe Users::RegistrationsController, type: :controller do
  include Devise::Test::ControllerHelpers

  describe 'POST #create' do
    it 'creates a new user' do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      expect {
        post :create, params: {
          user: {
            email: 'user1@example.com',
            password: '123abcd',
            password_confirmation: '123abcd',
            username: 'tester1',
            photo: 'url'
          } 
        }
      }.to change { User.count }.by(1)
    end

    it 'fails when out of model specs' do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      post :create, params: {
        user: {
          email: 'user1@example.com',
          password: '123abcd',
          password_confirmation: '123abcd',
          username: 'tester1',
          photo: 'url'
        } 
      }
      post :create, params: {
        user: {
          email: 'user1@example.com',
          password: '123abcd',
          password_confirmation: '123abcd',
          username: 'tester1',
          photo: 'url'
        } 
      }

      expect(response).to have_http_status(422)
    end
  end

  describe 'PATCH #update' do
    it 'updates user attributes' do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      post :create, params: {
        user: {
          email: 'user2@example.com',
          password: '123abcd',
          password_confirmation: '123abcd',
          username: 'tester2',
          photo: 'url'
        }
      }
      
      user = User.last

      sign_in user

      patch :update, params: {
        user: {
          username: 'test123'
        }
      }

      updated_user = User.find(user.id)

      expect(updated_user.errors).to be_empty

      # Recommend additional testing in the future
    end
  end
end
