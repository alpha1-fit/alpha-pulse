Rails.application.routes.draw do
  resources :comments
  resources :workouts
  devise_for :users, controllers: {registrations: 'users/registrations'}
  get 'home/index'
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
