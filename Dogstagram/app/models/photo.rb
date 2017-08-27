class Photo < ApplicationRecord
  validates :user_id, presence: true
  validates :url, presence: true
  belongs_to :user
  has_many :likes
end
