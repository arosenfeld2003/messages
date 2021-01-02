class TweetsController < ApplicationController
  # before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def create
    tweet = Tweet.create(body: params[:newTweet], user_id: params[:user][:email])

    render json: {
      tweet: tweet
    }
  end

  def delete
  end


end
