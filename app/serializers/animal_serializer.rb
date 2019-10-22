class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :imageurl
end
