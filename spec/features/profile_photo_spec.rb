require 'rails_helper'

feature 'profile photo' do
  scenario 'user uploads a profile photo' do
    visit root_path
    click_button "Sign Up"

    fill_in "Username", with: "abc99"
    fill_in "Email", with: "ash@s-mart.com"
    fill_in "Password", with: "abc123"
    fill_in "Password confirmation", with: "abc123"
    attach_file :user_profile_photo, "#{Rails.root}/app/assets/images/IMG_3222.jpg"
    click_button "Sign up"

    expect(page).to have_content("Welcome! You have signed up successfully")
  end
end
