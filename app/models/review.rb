class Review < ApplicationRecord
  validates :rating, presence: true, :inclusion => { :in => 1..5 }
  validates :body, presence: true
  validates :title, presence: true

  belongs_to :animal
  belongs_to :user
  has_many :votes
end
