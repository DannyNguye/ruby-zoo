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

  describe "GET#index" do
    it "should return a list of all the animals" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 2

      expect(returned_json[0]["name"]).to eq "Shannon"
      expect(returned_json[0]["species"]).to eq "Chicken"
      expect(returned_json[0]["sex"]).to eq "F"
      expect(returned_json[0]["habitat"]).to eq "Desert"
      expect(returned_json[0]["diet"]).to eq "Carnivore"
      expect(returned_json[0]["description"]).to eq "He's like Wiley, but he can't talk"

      expect(returned_json[1]["name"]).to eq "Jance"
      expect(returned_json[1]["species"]).to eq "Bird"
      expect(returned_json[1]["sex"]).to eq "F"
      expect(returned_json[1]["habitat"]).to eq "City"
      expect(returned_json[1]["diet"]).to eq "anything she can get her beak on"
      expect(returned_json[1]["description"]).to eq "peck peck"
    end
  end

  describe "GET/show" do
    it "should return an individual animal" do
      get :show, params: {id: animal1.id}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 9

      expect(returned_json["name"]).to eq "Shannon"
      expect(returned_json["species"]).to eq "Chicken"
      expect(returned_json["sex"]).to eq "F"
      expect(returned_json["habitat"]).to eq "Desert"
      expect(returned_json["diet"]).to eq "Carnivore"
      expect(returned_json["description"]).to eq "He's like Wiley, but he can't talk"
    end
  end
end
