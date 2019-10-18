require 'rails_helper'

feature 'profile photo' do
  scenario 'user uploads a profile photo' do
    visit root_path
    click_link "Sign Up"

    fill_in "Email", with: "ash@s-mart.com"
    fill_in "Password", with: "abc123"
    fill_in "Password confirmation", with: "abc123"
    attach_file :user_profile_photo, "#{Rails.root}/spec/support/images/photo.png"
    click_button "Sign up"

    expect(page).to have_content("Welcome! Thanks for joining")
    expect(page).to have_css("img[src*='photo.png']")
  end
end
