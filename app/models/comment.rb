class Comment < ApplicationRecord
  belongs_to :workout
  belongs_to :user
  validates :title, :comment, presence: true
end
