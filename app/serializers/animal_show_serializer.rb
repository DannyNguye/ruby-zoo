class AnimalShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :sex, :habitat, :diet, :description, :imageurl, :current_user, :logged_in

  has_many :reviews

  def current_user
    scope[:current_user]
  end

  def logged_in
    scope[:logged_in]
  end
end
