Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/animals', to: "static_pages#index"
  get '/animals/new', to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :animals, only: [:index, :create]
    end
  end
end
