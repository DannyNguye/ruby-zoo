require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:animal1) { Animal.create(
    name: "Clif",
    species: "Canary",
    sex: "M",
    habitat: "City",
    diet: "Omnivore",
    description: "Don't feed clif bars"
  ) }
  let!(:user1) { User.create(
    username: "John",
    email: "john@gmail.com",
    password: "john123"
  ) }
  let!(:review1) { Review.create(
    title: "cute elephant",
    rating: "1",
    body: "He is really cute",
    user: user1,
    animal: animal1
  ) }

  describe "POST#create" do
    it "creates a new review" do
      user = FactoryBot.create(:user)
      sign_in user
      post_json = {
        review: {
          rating: 3,
          title: "best coyote",
          body: "smells funny"
        },
        animal_id: Animal.first.id
      }

      prev_count = Review.count
      post :create, params: post_json, format: :json
      expect(Review.count).to eq(prev_count + 1)
    end
  end
end
