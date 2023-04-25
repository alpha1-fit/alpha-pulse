require 'rails_helper'

RSpec.describe User, type: :model do
  describe "User validations" do
    it "is valid with valid inputs" do
      user = User.create(username: "RTester", photo: "url", email: 'test2@testing.com', password: 'test123', password_confirmation: 'test123')
      expect(user.errors).to be_empty
    end

    it "is invalid without a username" do
      user = User.create(photo: "url", email: 'test2@testing.com', password: 'test123', password_confirmation: 'test123')

      expect(user.errors[:username]).to_not be_empty
    end

    it "is invalid without a photo" do
      user = User.create(username: "RTester", email: 'test2@testing.com', password: 'test123', password_confirmation: 'test123')
      expect(user.errors[:photo]).to_not be_empty
    end

    it "is invalid without a email" do
      user = User.create(username: "RTester", photo: "url", password: 'test123', password_confirmation: 'test123')
      expect(user.errors[:email]).to_not be_empty
    end

    it "is invalid without a password" do
      user = User.create(username: "RTester", photo: "url", email: 'test2@testing.com', password_confirmation: 'test123')
      expect(user.errors[:password]).to_not be_empty
    end

    it "is invalid if password and password confirmation are different" do
      user = User.create(username: "RTester", photo: "url", email: 'test2@testing.com', password: 'test123', password_confirmation: 'test124')
      expect(user).to_not be_valid
    end

    it "is invalid with a repeated username" do
      user1 = User.create(username: "RTester", photo: "url", email: 'test2@testing.com', password: 'test123', password_confirmation: 'test123')
      expect(user1.errors).to be_empty

      user2 = User.create(username: "RTester", photo: "url", email: 'test3@testing.com', password: 'test123', password_confirmation: 'test123')
      expect(user2.errors).to_not be_empty
    end

    it "is invalid with a repeated email" do
      user1 = User.create(username: "RTester", photo: "url", email: 'test2@testing.com', password: 'test123', password_confirmation: 'test123')
      expect(user1.errors).to be_empty

      user2 = User.create(username: "BTester", photo: "url", email: 'test2@testing.com', password: 'test123', password_confirmation: 'test123')
      expect(user2.errors).to_not be_empty
    end
  end
end
