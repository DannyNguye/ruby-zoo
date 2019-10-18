class Api::V1::ReviewsController < ApiController
  def create
    review = Review.new(review_params)
    animal = Animal.find(params[:animal_id])
    review.animal = animal
    review.user = current_user

    if review.save
      render json: review
    else
      render json: {
        errors: review.errors.messages,
        fields: review
      }
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :title, :body)
  end
end
