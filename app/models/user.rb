class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :workouts
  has_many :comments
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :username, presence: true
end