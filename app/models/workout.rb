class Workout < ApplicationRecord
  belongs_to :user
  has_many :comments
  validates :name, :description, presence: true
end
