Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations", sessions: "sessions"}
  devise_scope :user do
    get 'logged_in' => 'sessions#logged_in?'
  end
  root 'home#index'

  get '*path', to: 'home#index'

  post '/tweets' => 'tweets#create'

end
