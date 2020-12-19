class HomeController < ApplicationController
  def index
    @feed = Tweet.where(User_id: current_user)
  end

  def create
    @tweet = Tweet.new(user_params)
  end
end
