class Animal < ApplicationRecord
  validates :name, presence: true
  validates :species, presence: true
  validates :sex, presence: true
  validates :habitat, presence: true

  belongs_to :user 
  has_many :reviews
end
