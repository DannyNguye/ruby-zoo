class Animal < ApplicationRecord
  validates :name, presence: true
  validates :species, presence: true
  validates :sex, presence: true
  validates :habitat, presence: true

  has_many :reviews
end
