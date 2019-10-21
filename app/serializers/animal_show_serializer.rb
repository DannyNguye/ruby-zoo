class AnimalShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :species, :sex, :habitat, :diet, :description, :current_user, :logged_in

  has_many :reviews

  def current_user
    scope[0]
  end

  def logged_in
    scope[1]
  end
end
