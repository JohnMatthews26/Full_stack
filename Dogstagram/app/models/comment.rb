class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :photo
  validates :user_id, presence: true
  validates :photo_id, presence: true
  validates :body, presence: true
end
