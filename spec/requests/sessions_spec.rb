require 'rails_helper'
require 'devise/test/controller_helpers'

RSpec.describe Users::SessionsController, type: :controller do
  include Devise::Test::ControllerHelpers

  describe "DELETE #destroy" do
    let(:user) { create(:user) }

    it "renders a JSON success message" do
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

      user = User.last

      sign_in user
  
      delete :destroy
      expect(response).to have_http_status(:ok)
      expect(response.content_type).to eq('application/json; charset=utf-8')
      expect(JSON.parse(response.body)).to eq({
        "status" => 200,
        "message" => "logged out successfully"
      })
    end
  end
end
