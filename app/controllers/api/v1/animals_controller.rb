class Api::V1::AnimalsController < ApiController
  before_action :authenticate_user!, except: [:show, :index]

  def index
    render json: Animal.all
  end

  def show
    render json: Animal.find(params[:id]), { serializer: AnimalShowSerializer, logged_in: user_signed_in? }
  end

  def create
    animal = Animal.new(animal_params)

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
    params.require(:animal).permit(:name, :species, :sex, :habitat, :diet, :description)
  end
end
