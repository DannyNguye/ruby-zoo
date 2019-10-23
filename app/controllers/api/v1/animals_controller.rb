class Api::V1::AnimalsController < ApiController
  before_action :authenticate_user!, except: [:show, :index]

  def index
    animals = Animal.all
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
