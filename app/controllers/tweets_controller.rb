class TweetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    p params
    @user = User.find_by(:handle == params[:handle])
    # throw error if not currentUser ??
    @new_tweet = @user.tweets.build(
      body: params[:newTweet]
    )
    respond_to do |format|
      if @new_tweet.save
        render json: {newTweet: @new_tweet}
      else
        render json: {message: "Error: Tweet Not Posted"}, status: :unauthorized
      end
    end
  end
end
