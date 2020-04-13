Rails.application.routes.draw do
  resources :sessions, only: [:create, :destroy]
  get "/current-user", to: "sessions#get_current_user"
  resources :items, only: [:index]
  resources :users, only: [:index] do
    resources :items, only: [:index]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
