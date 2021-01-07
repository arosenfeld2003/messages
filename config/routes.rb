Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations", sessions: "sessions"}

  devise_scope :user do
    get 'logged_in' => 'sessions#logged_in?'
    post 'profile' => 'administration#get_profile'
    post 'admin/users' => 'registrations#create_from_admin'
    delete 'profile' => 'administration#destroy_profile'
    put 'profile/:id' => 'administration#update_profile'
  end

  root 'home#index'

  get '*path', to: 'home#index'
end
