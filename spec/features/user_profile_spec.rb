require 'rails_helper'

feature 'profile page' do
  scenario 'user signs in' do
    user = FactoryBot.create(:user)

    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log In'

    expect(page).to have_content("My Profile")
  end

  scenario 'user does not sign in' do
    visit root_path

    expect(page).not_to have_content("My Profile")
  end

  scenario 'user visits profile page' do
    user = FactoryBot.create(:user)

    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log In'
    click_link 'My Profile'
    visit profiles_show_url

    expect(page).to have_content(user.username)
  end

  scenario 'user has a list of animals on their profile' do
    user = FactoryBot.create(:user)
    animal = Animal.create(
      name: "Shannon",
      species: "Chicken",
      sex: "F",
      habitat: "Desert",
      diet: "Carnivore",
      description: "He's like Wiley, but he can't talk",
      user: user,
      imageurl: "http://www.chickenimage.com/chicken.jpg")

    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log In'
    click_link 'My Profile'
    visit profiles_show_url

    expect(page).to have_content(animal.name)
  end

  scenario 'user has a list of animals on their profile' do
    user = FactoryBot.create(:user)
    user2 = FactoryBot.create(:user)
    animal = Animal.create(
      name: "Shannon",
      species: "Chicken",
      sex: "F",
      habitat: "Desert",
      diet: "Carnivore",
      description: "He's like Wiley, but he can't talk",
      user: user2,
      imageurl: "http://www.chickenimage.com/chicken.jpg")

    visit new_user_session_path
    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password
    click_button 'Log In'
    click_link 'My Profile'
    visit profiles_show_url

    expect(page).not_to have_content(animal.name)
  end
end
