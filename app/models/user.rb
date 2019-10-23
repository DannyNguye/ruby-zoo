class User < ApplicationRecord
  validates :username, presence: true

  has_many :animals 
  has_many :reviews

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  mount_uploader :profile_photo, ProfilePhotoUploader
end
