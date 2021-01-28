Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations", sessions: "sessions"}

  devise_scope :user do
    get 'logged_in' => 'sessions#logged_in?'
    post 'admin/users' => 'registrations#create_from_admin'
    delete 'profile' => 'administration#destroy_profile'
    put 'profile/:id' => 'administration#update_profile'
    post 'profile' => 'administration#get_profile'
  end

  root 'home#index'

  post '/tweets' => 'tweets#create'
  delete '/tweets' => 'tweets#delete'
  
  get '/feed' => 'tweets#get_user_feed'

  post '/relationships' => 'relationships#new'
  delete '/relationships' => 'relationships#delete'
  get '/relationships' => 'relationships#get_followers'

  get '*path', to: 'home#index'

end
