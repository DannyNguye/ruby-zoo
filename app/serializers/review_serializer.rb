class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :rating, :body, :user_id
end
