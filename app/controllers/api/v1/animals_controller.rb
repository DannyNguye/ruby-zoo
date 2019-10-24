class Api::V1::AnimalsController < ApiController
  before_action :authenticate_user!, except: [:show, :index]

  def index
    if params["/animals"]
      if params["/animals"][:name] == ""
        animals = Animal.all.order(:name)
      else
        animals = Animal.where(name: params["/animals"][:name]).or(Animal.where(species: params["/animals"][:name])).or(Animal.where(habitat: params["/animals"][:name])).or(Animal.where(sex: params["/animals"][:name]))
      end
    else
      animals = Animal.all.order(:name)
    end
    user_role = "guest"
    if user_signed_in?
      user_role = current_user.role
    end
    render json: {
      animals: animals,
      user_role: user_role
    }
  end

  def show
    animal = Animal.find(params[:id])
    render json: animal, serializer: AnimalShowSerializer, scope: {current_user: current_user, logged_in: user_signed_in?}
  end

  def create
    animal = Animal.new(animal_params)
    animal.user = current_user

    if animal.save
      render json: animal
    else
      render json: {
        errors: animal.errors.messages,
        fields: animal
      }
    end
  end

  private

  def animal_params
    if params.require(:animal)[:imageurl] == ""
      params.require(:animal).permit(:name, :species, :sex, :habitat, :diet, :description)
    else
      params.require(:animal).permit(:name, :species, :sex, :habitat, :diet, :description, :imageurl)
    end
  end
end
