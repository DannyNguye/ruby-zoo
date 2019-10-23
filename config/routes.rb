Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users

  get '/animals', to: "static_pages#index"
  get '/animals/new', to: "static_pages#new"
  get '/animals/:id', to: "static_pages#index"
  get '/profiles/show', to: "profiles#show"


  namespace :api do
    namespace :v1 do
      resources :animals, only: [:index, :show, :create] do
        resources :reviews, only: [:create] do
          resources :votes, only: [:create, :index]
        end
      end
    end
  end
end
