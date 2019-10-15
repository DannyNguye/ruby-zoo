class Review < ApplicationRecord
  validates :rating, presence: true
  validates :review_body, presence: true

  belongs_to :animal 
end
