require "rails_helper"

RSpec.describe Api::V1::AnimalsController, type: :controller do
  let!(:animal1) { Animal.create(
    name: "Shannon",
    species: "Chicken",
    sex: "F",
    habitat: "Desert",
    diet: "Carnivore",
    description: "He's like Wiley, but he can't talk"
  ) }
  let!(:animal2) { Animal.create(
    name: "Jance",
    species: "Bird",
    sex: "F",
    habitat: "City",
    diet: "anything she can get her beak on",
    description: "peck peck"
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

  describe "GET#index" do
    it "should return a list of all the animals" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 2

      expect(returned_json["animals"][0]["name"]).to eq "Shannon"
      expect(returned_json["animals"][0]["species"]).to eq "Chicken"

      expect(returned_json["animals"][1]["name"]).to eq "Jance"
      expect(returned_json["animals"][1]["species"]).to eq "Bird"
    end

    it "should send user_role as admin if signed in user admin" do
      user = FactoryBot.create(:user)
      user.role = "admin"
      user.save
      sign_in user
      get :index
      returned_json = JSON.parse(response.body)
      expect(returned_json["user_role"]).to eq "admin"
    end

    it "should send user_role as user if signed in not admin" do
      user = FactoryBot.create(:user)
      sign_in user
      get :index
      returned_json = JSON.parse(response.body)
      expect(returned_json["user_role"]).to eq "user"
    end

    it "should send user_role as "" if user is not signed in" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(returned_json["user_role"]).to eq ""
    end
  end

  describe "GET/show" do
    it "should return an individual animal" do
      get :show, params: {id: animal1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json.length).to eq 1
      expect(returned_json["animal"]["name"]).to eq "Shannon"
      expect(returned_json["animal"]["species"]).to eq "Chicken"
      expect(returned_json["animal"]["sex"]).to eq "F"
      expect(returned_json["animal"]["habitat"]).to eq "Desert"
      expect(returned_json["animal"]["diet"]).to eq "Carnivore"
      expect(returned_json["animal"]["description"]).to eq "He's like Wiley, but he can't talk"
    end

    it "should show reviews for the selected animal" do
      get :show, params: {id: animal1.id}
      returned_json = JSON.parse(response.body)

      expect(returned_json["animal"]["reviews"][0]["title"]).to eq "cute elephant"
      expect(returned_json["animal"]["reviews"][0]["rating"]).to eq 1
      expect(returned_json["animal"]["reviews"][0]["body"]).to eq "He is really cute"
    end

    it "should show details for the current user" do
      user = FactoryBot.create(:user)
      sign_in user
      get :show, params: {id: animal1.id}
      returned_json = JSON.parse(response.body)

      expect(returned_json["animal"]["current_user"]["email"]).to eq "user3@example.com"
      expect(returned_json["animal"]["current_user"]["username"]).to eq "user3"
      expect(returned_json["animal"]["logged_in"]).to eq true
    end

    it "should not send user data if not logged in" do
      get :show, params: {id: animal1.id}
      returned_json = JSON.parse(response.body)

      expect(returned_json["animal"]["current_user"]).to eq nil
      expect(returned_json["animal"]["logged_in"]).to eq false
    end

  end

  describe "POST#create" do
    it "returns a 401 authentication error when not logged in" do
      post_json = {
        animal: {
          name: "Charlie",
          species: "Lizard",
          sex: "F",
          habitat: "Wilderness",
          diet: "Bugs",
          description: "Loves to eat bugs everyday"
        }
      }

      post :create, params: post_json, format: :json
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 401
    end

    it "creates a new animal" do
      user = FactoryBot.create(:user)
      sign_in user
      post_json = {
        animal: {
          name: "Charlie",
          species: "Lizard",
          sex: "F",
          habitat: "Wilderness",
          diet: "Bugs",
          description: "Loves to eat bugs everyday"
        }
      }

      prev_count = Animal.count
      post :create, params: post_json, format: :json
      expect(Animal.count).to eq(prev_count + 1)
    end

    it "returns the json of the newly posted animal" do
      user = FactoryBot.create(:user)
      sign_in user
      post_json = {
        animal: {
          name: "Charlie",
          species: "Lizard",
          sex: "F",
          habitat: "Wilderness",
          diet: "Bugs",
          description: "Loves to eat bugs everyday"
        }
      }

      post :create, params: post_json, format: :json
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["animal"]["name"]).to eq "Charlie"
      expect(returned_json["animal"]["species"]).to eq "Lizard"
    end
  end
end
