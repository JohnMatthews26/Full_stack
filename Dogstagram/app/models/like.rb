class Like < ApplicationRecord
  belongs_to :user
  belongs_to :photo
  validates :user_id, presence: true
  validates :photo_id, presence: true
end
