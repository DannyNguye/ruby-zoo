class Api::V1::AnimalsController < ApiController
  before_action :authenticate_user!, except: [:show, :index]

  def index
    no_result = ""

    if params["/animals"]
      if params["/animals"][:name] == ""
        animals = Animal.all.order(:name)
      else
        if search_results.length == 0
          no_result = "No Results"
          animals = search_results
        else
          animals = search_results
        end
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
      user_role: user_role,
      no_result: no_result
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

  def search_results
    Animal.where(
      name: params["/animals"][:name]).or(Animal.where(species: params["/animals"][:name])).or(Animal.where(habitat: params["/animals"][:name])).or(Animal.where(sex: params["/animals"][:name])
    )
  end

  def animal_params
    if params.require(:animal)[:imageurl] == "" || params.require(:animal)[:imageurl].nil?
      no_image
    elsif acceptable_formats
      params.require(:animal).permit(:name, :species, :sex, :habitat, :diet, :description, :imageurl)
    else
      no_image
    end
  end

  def no_image
    params.require(:animal).permit(:name, :species, :sex, :habitat, :diet, :description)
  end

  def acceptable_formats
    ["jpg", "jpeg", "png", "gif"].any? { |img| params.require(:animal)[:imageurl].downcase.include?(img) }
  end
end
