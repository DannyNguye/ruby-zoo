require 'rails_helper'

feature "user visits index" do
  scenario "sees a list of animals" do
    animal_1 = Animal.create(name: "Charles", species: "Giraffe", sex: "M", habitat: "Sahara", diet: "Herbivore", description: "Loves to eat from the trees!")

    animal_2 = Animal.create(name: "Gabby", species: "Gorilla", sex: "F", habitat: "Jungle", diet: "Herbivore", description: "Sooooo many teeth. Such a big smile!")

    visit root_path

    expect(page).to have_content("Charles")
    expect(page).to have_content("Gabby")
  end
end
