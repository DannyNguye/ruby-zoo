class ProfilesController < ApplicationController
  def show
    @animals = Animal.where(user: current_user)
    render :show
  end
end
