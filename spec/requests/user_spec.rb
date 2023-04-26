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
            email: 'user@example.com',
            password: '123abcd',
            username: 'tester',
            photo: 'url'
          } 
        }
      }.to change { User.count }.by(1)
    end
  end

  describe 'PATCH #update' do
    it 'updates user attributes' do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      post :create, params: {
        user: {
          email: 'user@example.com',
          password: '123abcd',
          username: 'tester',
          photo: 'url'
        }
      }
      user = User.last

      sign_in user

      patch :update, params: {
        user: {
          username: 'newusername',
          id: user.id,
        }
      }

      newUser = User.find(user.id)

      # Future validation
      expect(newUser.username).to eq('tester')
    end
  end
end
