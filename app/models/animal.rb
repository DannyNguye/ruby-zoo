class Animal < ApplicationRecord
  validates :name, presence: true
  validates :species, presence: true
  validates :sex, presence: true
  validates :habitat, presence: true

  mount_uploader :photo, AnimalPhotoUploader

  has_many :reviews
end
