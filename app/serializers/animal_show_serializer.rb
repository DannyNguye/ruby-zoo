class AnimalShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :sex, :habitat, :diet, :description

  has_many :reviews
end
