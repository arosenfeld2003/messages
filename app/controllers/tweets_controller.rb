class TweetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by(handle: params[:user][:handle])
    # throw error if not currentUser ??
    @new_tweet = @user.tweets.build(
      body: params[:newTweet],
      handle: @user[:handle]
    )
    if @new_tweet.save
      render json: {newTweet: @new_tweet}
    else
      # we need better error message?
      render json: {message: "Error: Tweet Not Posted"}, status: :unauthorized
    end
  end

  def delete
    # p params[:id].to_i
    @tweet = Tweet.find(params[:id].to_i)
    @tweet.destroy
    render json: @tweet
  end

  def get_user_feed
    @user_feed = Tweet.where(handle: params[:handle])
    render json: @user_feed
  end

end
