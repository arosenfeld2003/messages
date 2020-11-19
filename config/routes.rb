Rails.application.routes.draw do
  get '/logged_in', to: 'sessions#logged_in?'
  devise_for :users, controllers: { registrations: "registrations", sessions: 'sessions'}
  root 'login#index'

  get '*path', to: 'login#index'
end
