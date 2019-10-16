class Api::V1::AnimalsController < ApiController
  def index
    render json: Animal.all
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
    JSON.parse(request.body.read)
  end
end
