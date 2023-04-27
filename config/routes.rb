Rails.application.routes.draw do
  resources :comments
  resources :workouts
  devise_for :users,
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup'
    },
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations'
    }
  get 'home/index'
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'
end
