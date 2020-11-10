Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations", sessions: 'sessions'}
  root 'login#index'

  get '*path', to: 'login#index'
end
